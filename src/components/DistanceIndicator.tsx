'use client';

import React from 'react';

interface Props {
  distance: number;
  bearing: number;
  maxDistance: number; // roughly half the earth's circumference ~20,000km
}

export default function DistanceIndicator({ distance, bearing, maxDistance = 20000 }: Props) {
  const percentage = Math.min((distance / maxDistance) * 100, 100);
  const color = `hsl(${120 - (percentage * 1.2)}, 100%, 50%)`;

  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
      <div className="flex items-center gap-2">
        <div 
          className="w-6 h-6 flex items-center justify-center"
          style={{ transform: `rotate(${bearing}deg)` }}
        >
          ↑
        </div>
        <span>{Math.round(distance)} km</span>
      </div>
    </div>
  );
} 