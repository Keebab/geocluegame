'use client';

import React from 'react';
import { GameStats, GameScore } from '@/utils/scoring';

interface StatsDisplayProps {
  stats: GameStats;
  currentScore?: GameScore;
  isGameOver?: boolean;
}

export default function StatsDisplay({ stats, currentScore, isGameOver }: StatsDisplayProps) {
  return (
    <div className="bg-slate-700 p-6 rounded-lg shadow-lg text-white">
      {currentScore && (
        <div className="mb-6 border-b border-slate-500 pb-6">
          <h3 className="text-2xl font-bold mb-4 text-emerald-400">Current Score: {currentScore.points}</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-slate-600 p-3 rounded-lg">
              <p className="text-slate-300 mb-1">Distance Bonus</p>
              <p className="font-mono text-lg text-emerald-400">+{currentScore.distanceBonus}</p>
            </div>
            <div className="bg-slate-600 p-3 rounded-lg">
              <p className="text-slate-300 mb-1">Clue Bonus</p>
              <p className="font-mono text-lg text-emerald-400">+{currentScore.clueBonus}</p>
            </div>
            <div className="bg-slate-600 p-3 rounded-lg">
              <p className="text-slate-300 mb-1">Streak Bonus</p>
              <p className="font-mono text-lg text-emerald-400">+{currentScore.streakBonus}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-600 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-white">{stats.gamesPlayed}</p>
          <p className="text-slate-300 text-sm">Played</p>
        </div>
        <div className="bg-slate-600 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-white">
            {((stats.gamesWon / stats.gamesPlayed) * 100 || 0).toFixed(1)}%
          </p>
          <p className="text-slate-300 text-sm">Win Rate</p>
        </div>
        <div className="bg-slate-600 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-emerald-400">{stats.currentStreak}</p>
          <p className="text-slate-300 text-sm">Current Streak</p>
        </div>
        <div className="bg-slate-600 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold text-emerald-400">{stats.maxStreak}</p>
          <p className="text-slate-300 text-sm">Max Streak</p>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-slate-600 p-4 rounded-lg text-center">
          <p className="text-xl font-bold text-yellow-400">{stats.bestScore}</p>
          <p className="text-slate-300 text-sm">Best Score</p>
        </div>
        <div className="bg-slate-600 p-4 rounded-lg text-center">
          <p className="text-xl font-bold text-white">{stats.averageGuesses.toFixed(1)}</p>
          <p className="text-slate-300 text-sm">Avg Guesses</p>
        </div>
      </div>
    </div>
  );
} 