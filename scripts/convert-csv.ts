import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

interface CSVCountry {
  name: string;
  code: string;
  capital: string;
  latitude: string;
  longitude: string;
  continent: string;
  population: string;
  clue1: string;
  clue2: string;
  clue3: string;
  clue4: string;
  clue5: string;
  clue6: string;
  clue7: string;
  clue8: string;
  clue9: string;
  clue10: string;
}

const inputFile = path.join(process.cwd(), 'countries.csv');
const outputFile = path.join(process.cwd(), 'src', 'data', 'countries.ts');

const parser = parse({ columns: true, skip_empty_lines: true });
const records: CSVCountry[] = [];

fs.createReadStream(inputFile)
  .pipe(parser)
  .on('data', (record: CSVCountry) => {
    records.push(record);
  })
  .on('end', () => {
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
    }, {} as Record<string, Array<{ id: number; text: string; difficulty: number }>>);

    const output = `import { Country, Clue } from '@/types/game';

export const countries: Country[] = ${JSON.stringify(countries, null, 2)};

export const countryClues: Record<string, Clue[]> = ${JSON.stringify(countryClues, null, 2)};`;

    fs.writeFileSync(outputFile, output);
    console.log('Conversion complete! Data written to src/data/countries.ts');
  }); 