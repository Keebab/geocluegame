import React from 'react';

interface CongratulationsOverlayProps {
  score: {
    points: number;
    multiplier: number;
    bonus: number;
  };
  guesses: number;
  onTryAgain: () => void;
}

export default function CongratulationsOverlay({ score, guesses, onTryAgain }: CongratulationsOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 p-8 rounded-lg max-w-md w-full mx-4 transform transition-all animate-fade-in">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-green-400 animate-bounce">
            🎉 Congratulations! 🎉
          </h2>
          
          <div className="space-y-2">
            <p className="text-xl">
              You found the country in {guesses} {guesses === 1 ? 'guess' : 'guesses'}!
            </p>
            
            <div className="bg-slate-700 p-4 rounded-lg space-y-2">
              <p className="text-2xl font-bold text-yellow-400">
                {score.points.toLocaleString()} points
              </p>
              
              <div className="text-sm text-slate-300 space-y-1">
                <p>Multiplier: {score.multiplier}x</p>
                {score.bonus > 0 && (
                  <p>Time Bonus: +{score.bonus.toLocaleString()}</p>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={onTryAgain}
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors transform hover:scale-105"
          >
            Try Another Country
          </button>
        </div>
      </div>
    </div>
  );
} 