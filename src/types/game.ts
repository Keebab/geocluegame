export interface Country {
  name: string;
  code: string;
  capital: string;
  latitude: number;
  longitude: number;
  continent: string;
  population: number;
}

export interface CountryGuess {
  country: string;
  distance: number;
}

export interface Clue {
  id: number;
  text: string;
  difficulty: number;
}

export interface GameState {
  targetCountry: Country;
  currentClueIndex: number;
  guesses: CountryGuess[];
  gameStatus: 'playing' | 'won' | 'lost';
  clues: Clue[];
}

export type GameMode = 'daily' | 'practice' | 'timeAttack'; 