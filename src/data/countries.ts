import { Country, Clue } from '@/types/game';

export const countries: Country[] = [
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
    population: 214047375
  },
  {
    name: 'Australia',
    code: 'AU',
    capital: 'Canberra',
    latitude: -25.2744,
    longitude: 133.7751,
    continent: 'Oceania',
    population: 25687041
  },
  {
    name: 'Egypt',
    code: 'EG',
    capital: 'Cairo',
    latitude: 26.8206,
    longitude: 30.8025,
    continent: 'Africa',
    population: 104258327
  },
  {
    name: 'India',
    code: 'IN',
    capital: 'New Delhi',
    latitude: 20.5937,
    longitude: 78.9629,
    continent: 'Asia',
    population: 1380004385
  },
  {
    name: 'Canada',
    code: 'CA',
    capital: 'Ottawa',
    latitude: 56.1304,
    longitude: -106.3468,
    continent: 'North America',
    population: 38005238
  },
  {
    name: 'South Africa',
    code: 'ZA',
    capital: 'Pretoria',
    latitude: -30.5595,
    longitude: 22.9375,
    continent: 'Africa',
    population: 59308690
  },
  {
    name: 'Italy',
    code: 'IT',
    capital: 'Rome',
    latitude: 41.8719,
    longitude: 12.5674,
    continent: 'Europe',
    population: 60461826
  },
  {
    name: 'Mexico',
    code: 'MX',
    capital: 'Mexico City',
    latitude: 23.6345,
    longitude: -102.5528,
    continent: 'North America',
    population: 128932753
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    capital: 'Wellington',
    latitude: -41.2865,
    longitude: 174.7762,
    continent: 'Oceania',
    population: 5122600
  }
];

export const countryClues: Record<string, Clue[]> = {
  'FR': [
    { id: 1, text: 'This country has over 1,500 different types of cheese', difficulty: 1 },
    { id: 2, text: 'Home to the world\'s most visited museum', difficulty: 2 },
    { id: 3, text: 'Known for its fashion industry and haute couture', difficulty: 3 },
    { id: 4, text: 'Famous for its wine regions like Bordeaux and Champagne', difficulty: 4 },
    { id: 5, text: 'Has the highest mountain in Western Europe', difficulty: 5 },
    { id: 6, text: 'Its capital city is known as the "City of Light"', difficulty: 6 },
    { id: 7, text: 'Home to the Palace of Versailles', difficulty: 7 },
    { id: 8, text: 'The national motto is "Liberté, Égalité, Fraternité"', difficulty: 8 },
    { id: 9, text: 'Has a famous tower built for the 1889 World\'s Fair', difficulty: 9 },
    { id: 10, text: 'This country is shaped like a hexagon', difficulty: 10 }
  ],
  'JP': [
    { id: 1, text: 'Has a unique writing system with three different scripts', difficulty: 1 },
    { id: 2, text: 'Home to the oldest company in the world (founded 578 AD)', difficulty: 2 },
    { id: 3, text: 'Known for bullet trains called Shinkansen', difficulty: 3 },
    { id: 4, text: 'Has the world\'s highest life expectancy', difficulty: 4 },
    { id: 5, text: 'Famous for its cherry blossom festivals', difficulty: 5 },
    { id: 6, text: 'Consists of four main islands', difficulty: 6 },
    { id: 7, text: 'Home to sumo wrestling', difficulty: 7 },
    { id: 8, text: 'Known for sushi and ramen', difficulty: 8 },
    { id: 9, text: 'Has the world\'s busiest pedestrian crossing', difficulty: 9 },
    { id: 10, text: 'Home to Mount Fuji', difficulty: 10 }
  ],
  'BR': [
    { id: 1, text: 'Home to the largest rainforest in the world', difficulty: 1 },
    { id: 2, text: 'Has won the FIFA World Cup 5 times', difficulty: 2 },
    { id: 3, text: 'Known for the Carnival festival', difficulty: 3 },
    { id: 4, text: 'Has the longest beach in the world', difficulty: 4 },
    { id: 5, text: 'Famous for the Christ the Redeemer statue', difficulty: 5 },
    { id: 6, text: 'Portuguese is the official language', difficulty: 6 },
    { id: 7, text: 'Capital city was built in the shape of an airplane', difficulty: 7 },
    { id: 8, text: 'Home to the Amazon River', difficulty: 8 },
    { id: 9, text: 'Largest country in South America', difficulty: 9 },
    { id: 10, text: 'Famous for its soccer and samba', difficulty: 10 }
  ],
  AU: [
    { id: 1, text: 'Home to unique marsupials', difficulty: 1 },
    { id: 2, text: 'Known for the Great Barrier Reef', difficulty: 2 },
    { id: 3, text: 'Has the famous Sydney Opera House', difficulty: 3 },
    { id: 4, text: 'Known for its diverse wildlife', difficulty: 4 },
    { id: 5, text: 'Home to Uluru/Ayers Rock', difficulty: 5 },
    { id: 6, text: 'English-speaking nation in Oceania', difficulty: 6 },
    { id: 7, text: 'Known for its beaches and surfing', difficulty: 7 },
    { id: 8, text: 'Largest country in Oceania', difficulty: 8 },
    { id: 9, text: 'Located in the Southern Hemisphere', difficulty: 9 },
    { id: 10, text: 'Its capital is Canberra', difficulty: 10 }
  ],
  EG: [
    { id: 1, text: 'Home to ancient pyramids', difficulty: 1 },
    { id: 2, text: 'Has the longest river in the world', difficulty: 2 },
    { id: 3, text: 'Known for hieroglyphics', difficulty: 3 },
    { id: 4, text: 'Home to the Valley of the Kings', difficulty: 4 },
    { id: 5, text: 'Has the Great Sphinx', difficulty: 5 },
    { id: 6, text: 'Ancient civilization known for mummies', difficulty: 6 },
    { id: 7, text: 'Connected to the Suez Canal', difficulty: 7 },
    { id: 8, text: 'Most populous Arab country', difficulty: 8 },
    { id: 9, text: 'Located in North Africa', difficulty: 9 },
    { id: 10, text: 'Its capital is Cairo', difficulty: 10 }
  ],
  IN: [
    { id: 1, text: 'Known for its spicy cuisine', difficulty: 1 },
    { id: 2, text: 'Home to the Taj Mahal', difficulty: 2 },
    { id: 3, text: 'Birthplace of yoga', difficulty: 3 },
    { id: 4, text: 'Known for Bollywood movies', difficulty: 4 },
    { id: 5, text: 'Has the Ganges River', difficulty: 5 },
    { id: 6, text: 'Known for colorful festivals', difficulty: 6 },
    { id: 7, text: 'Second most populous country', difficulty: 7 },
    { id: 8, text: 'Home to diverse languages', difficulty: 8 },
    { id: 9, text: 'Located in South Asia', difficulty: 9 },
    { id: 10, text: 'Its capital is New Delhi', difficulty: 10 }
  ],
  CA: [
    { id: 1, text: 'Known for maple syrup', difficulty: 1 },
    { id: 2, text: 'Has the longest coastline', difficulty: 2 },
    { id: 3, text: 'Home to Niagara Falls', difficulty: 3 },
    { id: 4, text: 'Known for ice hockey', difficulty: 4 },
    { id: 5, text: 'Has the Northern Lights', difficulty: 5 },
    { id: 6, text: 'Known for its national parks', difficulty: 6 },
    { id: 7, text: 'Second largest country by area', difficulty: 7 },
    { id: 8, text: 'Has two official languages', difficulty: 8 },
    { id: 9, text: 'Located in North America', difficulty: 9 },
    { id: 10, text: 'Its capital is Ottawa', difficulty: 10 }
  ],
  ZA: [
    { id: 1, text: 'Known for diamond mines', difficulty: 1 },
    { id: 2, text: 'Home to diverse wildlife', difficulty: 2 },
    { id: 3, text: 'Has Table Mountain', difficulty: 3 },
    { id: 4, text: 'Known for safari tourism', difficulty: 4 },
    { id: 5, text: 'Has 11 official languages', difficulty: 5 },
    { id: 6, text: 'Known for Nelson Mandela', difficulty: 6 },
    { id: 7, text: 'Has three capital cities', difficulty: 7 },
    { id: 8, text: 'Known for the Kruger National Park', difficulty: 8 },
    { id: 9, text: 'Located in Southern Africa', difficulty: 9 },
    { id: 10, text: 'One of its capitals is Pretoria', difficulty: 10 }
  ],
  IT: [
    { id: 1, text: 'Known for pizza and pasta', difficulty: 1 },
    { id: 2, text: 'Home to ancient ruins', difficulty: 2 },
    { id: 3, text: 'Has the Colosseum', difficulty: 3 },
    { id: 4, text: 'Known for Renaissance art', difficulty: 4 },
    { id: 5, text: 'Has Venice\'s canals', difficulty: 5 },
    { id: 6, text: 'Known for fashion design', difficulty: 6 },
    { id: 7, text: 'Shaped like a boot', difficulty: 7 },
    { id: 8, text: 'Home to the Vatican City', difficulty: 8 },
    { id: 9, text: 'Located in Southern Europe', difficulty: 9 },
    { id: 10, text: 'Its capital is Rome', difficulty: 10 }
  ],
  MX: [
    { id: 1, text: 'Known for tacos and tequila', difficulty: 1 },
    { id: 2, text: 'Has ancient pyramids', difficulty: 2 },
    { id: 3, text: 'Known for Day of the Dead', difficulty: 3 },
    { id: 4, text: 'Home to Mayan ruins', difficulty: 4 },
    { id: 5, text: 'Known for mariachi music', difficulty: 5 },
    { id: 6, text: 'Has colorful festivals', difficulty: 6 },
    { id: 7, text: 'Known for lucha libre wrestling', difficulty: 7 },
    { id: 8, text: 'Most populous Spanish-speaking country', difficulty: 8 },
    { id: 9, text: 'Located in North America', difficulty: 9 },
    { id: 10, text: 'Its capital is Mexico City', difficulty: 10 }
  ],
  NZ: [
    { id: 1, text: 'Known for its rugby team, the All Blacks', difficulty: 1 },
    { id: 2, text: 'Home to the kiwi bird', difficulty: 2 },
    { id: 3, text: 'Lord of the Rings was filmed here', difficulty: 3 },
    { id: 4, text: 'Known for Maori culture', difficulty: 4 },
    { id: 5, text: 'Has more sheep than people', difficulty: 5 },
    { id: 6, text: 'Famous for bungee jumping', difficulty: 6 },
    { id: 7, text: 'Consists of two main islands', difficulty: 7 },
    { id: 8, text: 'First country to give women the right to vote', difficulty: 8 },
    { id: 9, text: 'Located southeast of Australia', difficulty: 9 },
    { id: 10, text: 'Its capital is Wellington', difficulty: 10 }
  ]
}; 