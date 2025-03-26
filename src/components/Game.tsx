'use client';

import React, { useState, useEffect } from 'react';
import CountrySearch from './CountrySearch';
import DistanceIndicator from './DistanceIndicator';
import CongratulationsOverlay from './CongratulationsOverlay';
import { useGameMode } from '../contexts/GameModeContext';
import { countries, countryClues } from '../data/countries';

interface Guess {
  country: string;
  distance: number;
  bearing: number;
}

interface GameScore {
  points: number;
  multiplier: number;
  bonus: number;
}

const MAX_TRIES = 10;
const BASE_POINTS = 1000;

export default function Game() {
  const { gameMode, setGameMode, targetCountry, timeLeft, resetGame } = useGameMode();
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [currentClueIndex, setCurrentClueIndex] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [score, setScore] = useState<GameScore | null>(null);

  const targetData = countries.find(c => c.name === targetCountry);
  const clues = targetData ? countryClues[targetData.code] || [] : [];

  useEffect(() => {
    if (gameMode === 'timeAttack' && timeLeft <= 0 && !gameWon) {
      setGameLost(true);
    }
  }, [timeLeft, gameMode, gameWon]);

  useEffect(() => {
    setGuesses([]);
    setCurrentClueIndex(0);
    setGameWon(false);
    setGameLost(false);
    setScore(null);
  }, [targetCountry]);

  const calculateScore = (clueIndex: number) => {
    // Base score is 1000, each clue reduces by 100
    return Math.max(100, 1000 - (clueIndex * 100));
  };

  const handleModeChange = (newMode: 'daily' | 'practice' | 'timeAttack') => {
    setGameMode(newMode);
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const calculateBearing = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) -
              Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    const θ = Math.atan2(y, x);
    return ((θ * 180 / Math.PI) + 360) % 360;
  };

  const handleGuess = (guessedCountry: string) => {
    if (!targetData) return;

    if (guesses.some(g => g.country === guessedCountry)) {
      alert('You already guessed this country!');
      return;
    }

    const guessedData = countries.find(c => c.name === guessedCountry);
    if (!guessedData) return;

    const distance = calculateDistance(
      targetData.latitude,
      targetData.longitude,
      guessedData.latitude,
      guessedData.longitude
    );

    const bearing = calculateBearing(
      guessedData.latitude,
      guessedData.longitude,
      targetData.latitude,
      targetData.longitude
    );

    const newGuess = { country: guessedCountry, distance, bearing };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);

    if (guessedCountry === targetCountry) {
      const newScore = calculateScore(currentClueIndex);
      setScore({
        points: newScore,
        multiplier: 1.00,
        bonus: 0
      });
      setGameWon(true);
    } else {
      setCurrentClueIndex(prev => {
        const nextIndex = prev + 1;
        return nextIndex < clues.length ? nextIndex : prev;
      });

      if (newGuesses.length >= MAX_TRIES) {
        setGameLost(true);
      }
    }
  };

  const handleTryAgain = () => {
    resetGame();
    setGuesses([]);
    setCurrentClueIndex(0);
    setGameWon(false);
    setGameLost(false);
    setScore(null);
  };

  return (
    <div className="space-y-6">
      {gameWon && score && (
        <CongratulationsOverlay
          score={score}
          guesses={guesses.length}
          onTryAgain={handleTryAgain}
        />
      )}

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            {gameMode === 'daily' ? 'Daily Challenge' : 
             gameMode === 'timeAttack' ? `Time Attack (${timeLeft > 0 ? timeLeft : 0}s)` : 
             'Practice Mode'}
          </div>
          <div className="flex gap-2">
            <select 
              value={gameMode}
              onChange={(e) => handleModeChange(e.target.value as 'daily' | 'practice' | 'timeAttack')}
              className="bg-slate-700 px-3 py-2 rounded text-white border border-slate-600"
            >
              <option value="daily">Daily Challenge</option>
              <option value="practice">Practice Mode</option>
              <option value="timeAttack">Time Attack</option>
            </select>
            {gameMode !== 'daily' && (
              <button 
                onClick={resetGame}
                className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 text-white"
              >
                New Game
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border-2 border-blue-500 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-blue-400">Current Clue</h3>
          <span className="text-sm font-medium text-slate-300 bg-slate-700 px-3 py-1 rounded-full">
            Tries: {guesses.length}/{MAX_TRIES}
          </span>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <div className="flex flex-col items-center text-center">
            <p className="text-xl text-slate-100 leading-relaxed max-w-2xl">
              {clues[currentClueIndex]?.text || 'No more clues available!'}
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <div className="text-sm text-gray-600 mb-2">
                Clue {currentClueIndex + 1} of 10
              </div>
              <div className="text-sm text-gray-600 mb-2">
                Difficulty: {clues[currentClueIndex]?.difficulty || 0}/10
              </div>
            </div>
          </div>
        </div>
      </div>

      {!gameWon && !gameLost && (
        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
          <CountrySearch onSelect={handleGuess} />
        </div>
      )}

      <div className="space-y-4">
        {[...guesses].reverse().map((guess, index) => (
          <div key={guess.country} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <div className="font-semibold mb-2">{guess.country}</div>
            <DistanceIndicator 
              distance={guess.distance} 
              bearing={guess.bearing}
              maxDistance={20000}
            />
          </div>
        ))}
      </div>

      {gameLost && (
        <div className="p-4 rounded-lg text-center bg-red-500">
          <h2 className="text-2xl font-bold">Game Over</h2>
          <p className="mb-2">
            The country was {targetCountry}. Better luck next time!
          </p>
          {(gameMode !== 'daily') && (
            <button 
              onClick={handleTryAgain}
              className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100"
            >
              Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
} 