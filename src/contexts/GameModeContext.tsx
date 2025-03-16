'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { GameMode } from '../types/game';
import { countries } from '../data/countries';

interface GameModeContextType {
  gameMode: GameMode;
  setGameMode: (mode: GameMode) => void;
  targetCountry: string;
  timeLeft: number;
  resetGame: () => void;
}

const GameModeContext = createContext<GameModeContextType | undefined>(undefined);

const TIME_LIMIT = 300; // 5 minutes in seconds

export function GameModeProvider({ children }: { children: React.ReactNode }) {
  const [gameMode, setGameMode] = useState<GameMode>('daily');
  const [targetCountry, setTargetCountry] = useState('');
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);

  const resetGame = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    setTargetCountry(countries[randomIndex].name);
    setTimeLeft(TIME_LIMIT);
  };

  // Initialize game on mount
  useEffect(() => {
    resetGame();
  }, []);

  // Handle time attack mode countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameMode === 'timeAttack' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameMode, timeLeft]);

  // Reset game when changing modes
  useEffect(() => {
    resetGame();
  }, [gameMode]);

  return (
    <GameModeContext.Provider value={{ gameMode, setGameMode, targetCountry, timeLeft, resetGame }}>
      {children}
    </GameModeContext.Provider>
  );
}

export function useGameMode() {
  const context = useContext(GameModeContext);
  if (context === undefined) {
    throw new Error('useGameMode must be used within a GameModeProvider');
  }
  return context;
} 