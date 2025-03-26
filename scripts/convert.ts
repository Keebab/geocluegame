import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { countryCoordinates } from './coordinates';

interface CSVCountry {
  Country: string;
  Population: string;
  Coastline_km: string;
  Border_Count: string;
  Geography_Feature: string;
  Obscure_Export: string;
  Cultural_Element: string;
  Flag_Clue: string;
  Trivia: string;
  Famous_Person: string;
  Continent: string;
}

// Escape special characters for JavaScript strings
const escapeString = (str: string): string => {
  return str
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
};

const csvData = fs.readFileSync(path.join(__dirname, '../code.txt'), 'utf-8');
const records = parse(csvData, {
  columns: true,
  skip_empty_lines: true
}) as CSVCountry[];

// Convert population string to number
const parsePopulation = (pop: string): number => {
  const match = pop.match(/Approx\.\s*(\d+(?:\.\d+)?)\s*million/);
  if (match) {
    return Math.round(parseFloat(match[1]) * 1000000);
  }
  return 0;
};

// Generate country code (2 letters)
const getCountryCode = (name: string): string => {
  // This is a simple mapping - in a real app you'd want a proper country code library
  const codeMap: Record<string, string> = {
    'Canada': 'CA',
    'Brazil': 'BR',
    'Australia': 'AU',
    'Japan': 'JP',
    'India': 'IN',
    'Germany': 'DE',
    'France': 'FR',
    'Egypt': 'EG',
    'South Africa': 'ZA',
    'Mexico': 'MX',
    'Argentina': 'AR',
    'Italy': 'IT',
    'United Kingdom': 'GB',
    'Russia': 'RU',
    'China': 'CN',
    'Nigeria': 'NG',
    'Saudi Arabia': 'SA',
    'Iran': 'IR',
    'Turkey': 'TR',
    'Vietnam': 'VN',
    'Thailand': 'TH',
    'Spain': 'ES',
    'Poland': 'PL',
    'Ukraine': 'UA',
    'Greece': 'GR',
    'Norway': 'NO',
    'Sweden': 'SE',
    'Finland': 'FI',
    'Switzerland': 'CH',
    'Netherlands': 'NL',
    'Belgium': 'BE',
    'Portugal': 'PT',
    'Ireland': 'IE',
    'Austria': 'AT',
    'Chile': 'CL',
    'Peru': 'PE',
    'Colombia': 'CO',
    'Venezuela': 'VE',
    'Kenya': 'KE',
    'Ethiopia': 'ET',
    'Morocco': 'MA',
    'Ghana': 'GH',
    'Malaysia': 'MY',
    'Indonesia': 'ID',
    'Philippines': 'PH',
    'New Zealand': 'NZ',
    'South Korea': 'KR',
    'North Korea': 'KP',
    'Mongolia': 'MN'
  };
  return codeMap[name] || name.slice(0, 2).toUpperCase();
};

// Generate clues from the CSV data
const generateClues = (country: CSVCountry): string[] => {
  return [
    `Has a coastline of ${escapeString(country.Coastline_km)} km`,
    `Shares borders with ${escapeString(country.Border_Count)} other countries`,
    `Geography: ${escapeString(country.Geography_Feature)}`,
    `Exports ${escapeString(country.Obscure_Export)}`,
    `Cultural element: ${escapeString(country.Cultural_Element)}`,
    `Flag clue: ${escapeString(country.Flag_Clue)}`,
    `Trivia: ${escapeString(country.Trivia)}`,
    `Famous person: ${escapeString(country.Famous_Person)}`
  ];
};

// Generate TypeScript code
const generateTypeScript = (records: CSVCountry[]) => {
  const countries = records.map(record => {
    const code = getCountryCode(record.Country);
    const coords = countryCoordinates[code];
    return {
      name: record.Country,
      code,
      capital: coords?.capital || '',
      latitude: coords?.latitude || 0,
      longitude: coords?.longitude || 0,
      continent: record.Continent,
      population: parsePopulation(record.Population)
    };
  });

  const clues = records.map(record => {
    const countryClues = generateClues(record);
    return `  '${getCountryCode(record.Country)}': [\n${countryClues.map((clue, index) => 
      `    { id: ${index + 1}, text: '${clue}', difficulty: ${index + 1} }`
    ).join(',\n')}\n  ]`;
  });

  return `import { Country, Clue } from '@/types/game';

export const countries: Country[] = ${JSON.stringify(countries, null, 2)};

export const countryClues: Record<string, Clue[]> = {
${clues.join(',\n')}
};`;
};

// Write the output file
fs.writeFileSync(
  path.join(__dirname, '../src/data/countries.ts'),
  generateTypeScript(records)
); 