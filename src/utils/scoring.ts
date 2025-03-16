export interface GameStats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  bestScore: number;
  averageGuesses: number;
  totalGuesses: number;
}

export interface GameScore {
  points: number;
  distanceBonus: number;
  clueBonus: number;
  streakBonus: number;
}

const INITIAL_STATS: GameStats = {
  gamesPlayed: 0,
  gamesWon: 0,
  currentStreak: 0,
  maxStreak: 0,
  bestScore: 0,
  averageGuesses: 0,
  totalGuesses: 0,
};

export const calculateScore = (
  distance: number,
  cluesUsed: number,
  currentStreak: number
): GameScore => {
  // Base points start at 1000
  let basePoints = 1000;

  // Distance bonus (up to 500 points)
  const distanceBonus = Math.max(0, 500 - Math.floor(distance / 100));

  // Clue bonus (100 points per unused clue)
  const clueBonus = (10 - cluesUsed) * 100;

  // Streak bonus (50 points per streak, max 500)
  const streakBonus = Math.min(currentStreak * 50, 500);

  return {
    points: basePoints + distanceBonus + clueBonus + streakBonus,
    distanceBonus,
    clueBonus,
    streakBonus,
  };
};

export const updateStats = (
  currentStats: GameStats,
  won: boolean,
  guesses: number,
  score: number
): GameStats => {
  return {
    gamesPlayed: currentStats.gamesPlayed + 1,
    gamesWon: currentStats.gamesWon + (won ? 1 : 0),
    currentStreak: won ? currentStats.currentStreak + 1 : 0,
    maxStreak: won 
      ? Math.max(currentStats.maxStreak, currentStats.currentStreak + 1)
      : currentStats.maxStreak,
    bestScore: Math.max(currentStats.bestScore, score),
    totalGuesses: currentStats.totalGuesses + guesses,
    averageGuesses: (currentStats.totalGuesses + guesses) / (currentStats.gamesPlayed + 1),
  };
};

export const loadStats = (): GameStats => {
  if (typeof window === 'undefined') return INITIAL_STATS;
  const saved = localStorage.getItem('geoclue-stats');
  return saved ? JSON.parse(saved) : INITIAL_STATS;
};

export const saveStats = (stats: GameStats): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('geoclue-stats', JSON.stringify(stats));
}; 