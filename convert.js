const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

const csvContent = fs.readFileSync('countries.csv', 'utf-8');
const records = parse(csvContent, { columns: true, skip_empty_lines: true });

const countries = records.map(record => ({
  name: record.name,
  code: record.code,
  capital: record.capital,
  latitude: parseFloat(record.latitude),
  longitude: parseFloat(record.longitude),
  continent: record.continent,
  population: parseInt(record.population, 10)
}));

const countryClues = records.reduce((acc, record) => {
  acc[record.code] = [
    { id: 1, text: record.clue1, difficulty: 1 },
    { id: 2, text: record.clue2, difficulty: 2 },
    { id: 3, text: record.clue3, difficulty: 3 },
    { id: 4, text: record.clue4, difficulty: 4 },
    { id: 5, text: record.clue5, difficulty: 5 },
    { id: 6, text: record.clue6, difficulty: 6 },
    { id: 7, text: record.clue7, difficulty: 7 },
    { id: 8, text: record.clue8, difficulty: 8 },
    { id: 9, text: record.clue9, difficulty: 9 },
    { id: 10, text: record.clue10, difficulty: 10 }
  ];
  return acc;
}, {});

const output = `import { Country, Clue } from '@/types/game';

export const countries: Country[] = ${JSON.stringify(countries, null, 2)};

export const countryClues: Record<string, Clue[]> = ${JSON.stringify(countryClues, null, 2)};`;

fs.writeFileSync('src/data/countries.ts', output);
console.log('Conversion complete! Data written to src/data/countries.ts'); 