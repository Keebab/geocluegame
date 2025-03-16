'use client';

import React from 'react'
import Game from '@/components/Game'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">GeoClue</h1>
        <Game />
      </div>
    </main>
  )
} 