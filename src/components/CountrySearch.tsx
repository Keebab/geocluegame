'use client';

import React, { useState, useEffect, KeyboardEvent } from 'react';
import { Country } from '@/types/game';
import { countries } from '@/data/countries';

interface CountrySearchProps {
  onSelect: (country: string) => void;
  disabled?: boolean;
}

export default function CountrySearch({ onSelect, disabled = false }: CountrySearchProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    if (query.length > 0) {
      const matches = countries
        .map(c => c.name)
        .filter(name => 
          name.toLowerCase().includes(query.toLowerCase())
        );
      setSuggestions(matches);
      setHighlightedIndex(-1);
    } else {
      setSuggestions([]);
      setHighlightedIndex(-1);
    }
  }, [query]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => prev > -1 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
        handleSelect(suggestions[highlightedIndex]);
      }
    }
  };

  const handleSelect = (country: string) => {
    onSelect(country);
    setQuery('');
    setSuggestions([]);
    setHighlightedIndex(-1);
  };

  return (
    <div className="space-y-2">
      <form onSubmit={(e) => { e.preventDefault(); }} className="relative">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter a country name..."
            className="flex-1 p-2 rounded-lg bg-white text-black border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            disabled={disabled}
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={disabled || !query}
            className={`px-4 py-2 rounded-lg font-medium ${
              disabled || !query
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Submit Guess
          </button>
        </div>
        
        {suggestions.length > 0 && (
          <ul className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
            {suggestions.map((country, index) => (
              <li
                key={country}
                className={`p-2 cursor-pointer text-black hover:bg-slate-100 ${
                  index === highlightedIndex ? 'bg-slate-200' : ''
                }`}
                onClick={() => handleSelect(country)}
              >
                {country}
              </li>
            ))}
          </ul>
        )}
      </form>
      
      {/* Debug info - available countries */}
      <div className="text-sm text-gray-500">
        Available countries: {countries.map(c => c.name).join(', ')}
      </div>
    </div>
  );
} 