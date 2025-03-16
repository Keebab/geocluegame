'use client';

import React from 'react';
import { GameModeProvider } from '../contexts/GameModeContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <GameModeProvider>{children}</GameModeProvider>;
} 