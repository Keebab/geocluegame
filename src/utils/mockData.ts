import { Country, Clue } from '@/types/game';

export const sampleCountries: Country[] = [
  {
    name: 'France',
    code: 'FR',
    capital: 'Paris',
    latitude: 46.2276,
    longitude: 2.2137,
    continent: 'Europe',
    population: 67391582
  },
  {
    name: 'Japan',
    code: 'JP',
    capital: 'Tokyo',
    latitude: 36.2048,
    longitude: 138.2529,
    continent: 'Asia',
    population: 125836021
  },
  {
    name: 'Brazil',
    code: 'BR',
    capital: 'Brasília',
    latitude: -14.2350,
    longitude: -51.9253,
    continent: 'South America',
    population: 212559417
  }
];

export const sampleClues: Record<string, Clue[]> = {
  FR: [
    { id: 1, text: 'This country has over 1,500 types of cheese', difficulty: 1 },
    { id: 2, text: 'Home to the world\'s largest art museum', difficulty: 2 },
    { id: 3, text: 'Known for its fashion industry', difficulty: 3 },
    { id: 4, text: 'Famous for its wine regions', difficulty: 4 },
    { id: 5, text: 'Has a famous tower built in 1889', difficulty: 5 },
    { id: 6, text: 'Its capital is known as the "City of Light"', difficulty: 6 },
    { id: 7, text: 'Home to the Palace of Versailles', difficulty: 7 },
    { id: 8, text: 'The French Revolution took place here', difficulty: 8 },
    { id: 9, text: 'Located in Western Europe', difficulty: 9 },
    { id: 10, text: 'Its capital is Paris', difficulty: 10 }
  ],
  JP: [
    { id: 1, text: 'This country has over 6,800 islands', difficulty: 1 },
    { id: 2, text: 'Known for its bullet trains', difficulty: 2 },
    { id: 3, text: 'Famous for anime and manga', difficulty: 3 },
    { id: 4, text: 'Has a unique writing system', difficulty: 4 },
    { id: 5, text: 'Home to Mount Fuji', difficulty: 5 },
    { id: 6, text: 'Known for sushi and ramen', difficulty: 6 },
    { id: 7, text: 'Has a culture of wearing kimonos', difficulty: 7 },
    { id: 8, text: 'Practice of removing shoes indoors', difficulty: 8 },
    { id: 9, text: 'Located in East Asia', difficulty: 9 },
    { id: 10, text: 'Its capital is Tokyo', difficulty: 10 }
  ],
  BR: [
    { id: 1, text: 'Home to the largest rainforest', difficulty: 1 },
    { id: 2, text: 'Known for Carnival celebrations', difficulty: 2 },
    { id: 3, text: 'Famous for soccer/football', difficulty: 3 },
    { id: 4, text: 'Has the Christ the Redeemer statue', difficulty: 4 },
    { id: 5, text: 'Portuguese is the official language', difficulty: 5 },
    { id: 6, text: 'Known for samba music', difficulty: 6 },
    { id: 7, text: 'Has the famous Copacabana beach', difficulty: 7 },
    { id: 8, text: 'Largest country in South America', difficulty: 8 },
    { id: 9, text: 'Located in South America', difficulty: 9 },
    { id: 10, text: 'Its capital is Brasília', difficulty: 10 }
  ]
}; 