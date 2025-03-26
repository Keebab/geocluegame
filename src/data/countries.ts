import { Country, Clue } from '@/types/game';

export const countries: Country[] = [
  {
    "name": "Canada",
    "code": "CA",
    "capital": "Ottawa",
    "latitude": 45.4215,
    "longitude": -75.6972,
    "continent": "North America",
    "population": 38000000
  },
  {
    "name": "Brazil",
    "code": "BR",
    "capital": "Brasília",
    "latitude": -15.7801,
    "longitude": -47.9292,
    "continent": "South America",
    "population": 214000000
  },
  {
    "name": "Australia",
    "code": "AU",
    "capital": "Canberra",
    "latitude": -35.2809,
    "longitude": 149.13,
    "continent": "Oceania",
    "population": 26000000
  },
  {
    "name": "Japan",
    "code": "JP",
    "capital": "Tokyo",
    "latitude": 35.6762,
    "longitude": 139.6503,
    "continent": "Asia",
    "population": 125000000
  },
  {
    "name": "India",
    "code": "IN",
    "capital": "New Delhi",
    "latitude": 28.6139,
    "longitude": 77.209,
    "continent": "Asia",
    "population": 0
  },
  {
    "name": "Germany",
    "code": "DE",
    "capital": "Berlin",
    "latitude": 52.52,
    "longitude": 13.405,
    "continent": "Europe",
    "population": 83000000
  },
  {
    "name": "France",
    "code": "FR",
    "capital": "Paris",
    "latitude": 48.8566,
    "longitude": 2.3522,
    "continent": "Europe",
    "population": 65000000
  },
  {
    "name": "Egypt",
    "code": "EG",
    "capital": "Cairo",
    "latitude": 30.0444,
    "longitude": 31.2357,
    "continent": "Africa",
    "population": 109000000
  },
  {
    "name": "South Africa",
    "code": "ZA",
    "capital": "Pretoria",
    "latitude": -25.7461,
    "longitude": 28.1881,
    "continent": "Africa",
    "population": 60000000
  },
  {
    "name": "Mexico",
    "code": "MX",
    "capital": "Mexico City",
    "latitude": 19.4326,
    "longitude": -99.1332,
    "continent": "North America",
    "population": 127000000
  },
  {
    "name": "Argentina",
    "code": "AR",
    "capital": "Buenos Aires",
    "latitude": -34.6037,
    "longitude": -58.3816,
    "continent": "South America",
    "population": 46000000
  },
  {
    "name": "Italy",
    "code": "IT",
    "capital": "Rome",
    "latitude": 41.9028,
    "longitude": 12.4964,
    "continent": "Europe",
    "population": 59000000
  },
  {
    "name": "United Kingdom",
    "code": "GB",
    "capital": "London",
    "latitude": 51.5074,
    "longitude": -0.1278,
    "continent": "Europe",
    "population": 67000000
  },
  {
    "name": "Russia",
    "code": "RU",
    "capital": "Moscow",
    "latitude": 55.7558,
    "longitude": 37.6173,
    "continent": "Europe/Asia",
    "population": 144000000
  },
  {
    "name": "China",
    "code": "CN",
    "capital": "Beijing",
    "latitude": 39.9042,
    "longitude": 116.4074,
    "continent": "Asia",
    "population": 0
  },
  {
    "name": "Nigeria",
    "code": "NG",
    "capital": "Abuja",
    "latitude": 9.0765,
    "longitude": 7.3986,
    "continent": "Africa",
    "population": 219000000
  },
  {
    "name": "Saudi Arabia",
    "code": "SA",
    "capital": "Riyadh",
    "latitude": 24.7136,
    "longitude": 46.6753,
    "continent": "Asia",
    "population": 36000000
  },
  {
    "name": "Iran",
    "code": "IR",
    "capital": "Tehran",
    "latitude": 35.6892,
    "longitude": 51.389,
    "continent": "Asia",
    "population": 88000000
  },
  {
    "name": "Turkey",
    "code": "TR",
    "capital": "Ankara",
    "latitude": 39.9334,
    "longitude": 32.8597,
    "continent": "Asia/Europe",
    "population": 85000000
  },
  {
    "name": "Vietnam",
    "code": "VN",
    "capital": "Hanoi",
    "latitude": 21.0285,
    "longitude": 105.8542,
    "continent": "Asia",
    "population": 98000000
  },
  {
    "name": "Thailand",
    "code": "TH",
    "capital": "Bangkok",
    "latitude": 13.7563,
    "longitude": 100.5018,
    "continent": "Asia",
    "population": 70000000
  },
  {
    "name": "Spain",
    "code": "ES",
    "capital": "Madrid",
    "latitude": 40.4168,
    "longitude": -3.7038,
    "continent": "Europe",
    "population": 47000000
  },
  {
    "name": "Poland",
    "code": "PL",
    "capital": "Warsaw",
    "latitude": 52.2297,
    "longitude": 21.0122,
    "continent": "Europe",
    "population": 38000000
  },
  {
    "name": "Ukraine",
    "code": "UA",
    "capital": "Kyiv",
    "latitude": 50.4501,
    "longitude": 30.5234,
    "continent": "Europe",
    "population": 43000000
  },
  {
    "name": "Greece",
    "code": "GR",
    "capital": "Athens",
    "latitude": 37.9838,
    "longitude": 23.7275,
    "continent": "Europe",
    "population": 10000000
  },
  {
    "name": "Norway",
    "code": "NO",
    "capital": "Oslo",
    "latitude": 59.9139,
    "longitude": 10.7522,
    "continent": "Europe",
    "population": 5500000
  },
  {
    "name": "Sweden",
    "code": "SE",
    "capital": "Stockholm",
    "latitude": 59.3293,
    "longitude": 18.0686,
    "continent": "Europe",
    "population": 10500000
  },
  {
    "name": "Finland",
    "code": "FI",
    "capital": "Helsinki",
    "latitude": 60.1699,
    "longitude": 24.9384,
    "continent": "Europe",
    "population": 5500000
  },
  {
    "name": "Switzerland",
    "code": "CH",
    "capital": "Bern",
    "latitude": 46.948,
    "longitude": 7.4474,
    "continent": "Europe",
    "population": 8700000
  },
  {
    "name": "Netherlands",
    "code": "NL",
    "capital": "Amsterdam",
    "latitude": 52.3676,
    "longitude": 4.9041,
    "continent": "Europe",
    "population": 17700000
  },
  {
    "name": "Belgium",
    "code": "BE",
    "capital": "Brussels",
    "latitude": 50.8503,
    "longitude": 4.3517,
    "continent": "Europe",
    "population": 11600000
  },
  {
    "name": "Portugal",
    "code": "PT",
    "capital": "Lisbon",
    "latitude": 38.7223,
    "longitude": -9.1393,
    "continent": "Europe",
    "population": 10000000
  },
  {
    "name": "Ireland",
    "code": "IE",
    "capital": "Dublin",
    "latitude": 53.3498,
    "longitude": -6.2603,
    "continent": "Europe",
    "population": 5000000
  },
  {
    "name": "Austria",
    "code": "AT",
    "capital": "Vienna",
    "latitude": 48.2082,
    "longitude": 16.3738,
    "continent": "Europe",
    "population": 9000000
  },
  {
    "name": "Chile",
    "code": "CL",
    "capital": "Santiago",
    "latitude": -33.4489,
    "longitude": -70.6693,
    "continent": "South America",
    "population": 19500000
  },
  {
    "name": "Peru",
    "code": "PE",
    "capital": "Lima",
    "latitude": -12.0464,
    "longitude": -77.0428,
    "continent": "South America",
    "population": 34000000
  },
  {
    "name": "Colombia",
    "code": "CO",
    "capital": "Bogotá",
    "latitude": 4.711,
    "longitude": -74.0721,
    "continent": "South America",
    "population": 52000000
  },
  {
    "name": "Venezuela",
    "code": "VE",
    "capital": "Caracas",
    "latitude": 10.4806,
    "longitude": -66.9036,
    "continent": "South America",
    "population": 28000000
  },
  {
    "name": "Kenya",
    "code": "KE",
    "capital": "Nairobi",
    "latitude": -1.2921,
    "longitude": 36.8219,
    "continent": "Africa",
    "population": 54000000
  },
  {
    "name": "Ethiopia",
    "code": "ET",
    "capital": "Addis Ababa",
    "latitude": 9.145,
    "longitude": 40.4897,
    "continent": "Africa",
    "population": 123000000
  },
  {
    "name": "Morocco",
    "code": "MA",
    "capital": "Rabat",
    "latitude": 34.0209,
    "longitude": -6.8416,
    "continent": "Africa",
    "population": 37000000
  },
  {
    "name": "Ghana",
    "code": "GH",
    "capital": "Accra",
    "latitude": 5.6037,
    "longitude": -0.187,
    "continent": "Africa",
    "population": 33000000
  },
  {
    "name": "Malaysia",
    "code": "MY",
    "capital": "Kuala Lumpur",
    "latitude": 3.139,
    "longitude": 101.6869,
    "continent": "Asia",
    "population": 34000000
  },
  {
    "name": "Indonesia",
    "code": "ID",
    "capital": "Jakarta",
    "latitude": -6.2088,
    "longitude": 106.8456,
    "continent": "Asia",
    "population": 275000000
  },
  {
    "name": "Philippines",
    "code": "PH",
    "capital": "Manila",
    "latitude": 14.5995,
    "longitude": 120.9842,
    "continent": "Asia",
    "population": 115000000
  },
  {
    "name": "New Zealand",
    "code": "NZ",
    "capital": "Wellington",
    "latitude": -41.2866,
    "longitude": 174.7756,
    "continent": "Oceania",
    "population": 5000000
  },
  {
    "name": "South Korea",
    "code": "KR",
    "capital": "Seoul",
    "latitude": 37.5665,
    "longitude": 126.978,
    "continent": "Asia",
    "population": 51000000
  },
  {
    "name": "North Korea",
    "code": "KP",
    "capital": "Pyongyang",
    "latitude": 39.0392,
    "longitude": 125.7625,
    "continent": "Asia",
    "population": 26000000
  },
  {
    "name": "Mongolia",
    "code": "MN",
    "capital": "Ulaanbaatar",
    "latitude": 47.8864,
    "longitude": 106.9057,
    "continent": "Asia",
    "population": 3400000
  },
  {
    "name": "Singapore",
    "code": "SG",
    "capital": "Singapore",
    "latitude": 1.3521,
    "longitude": 103.8198,
    "continent": "Asia",
    "population": 5700000
  },
  {
    "name": "Israel",
    "code": "IL",
    "capital": "Jerusalem",
    "latitude": 31.7683,
    "longitude": 35.2137,
    "continent": "Asia",
    "population": 9320000
  },
  {
    "name": "United Arab Emirates",
    "code": "AE",
    "capital": "Abu Dhabi",
    "latitude": 24.4667,
    "longitude": 54.3667,
    "continent": "Asia",
    "population": 10000000
  },
  {
    "name": "South Africa",
    "code": "ZA",
    "capital": "Pretoria",
    "latitude": -25.7461,
    "longitude": 28.1881,
    "continent": "Africa",
    "population": 60000000
  },
  {
    "name": "Qatar",
    "code": "QA",
    "capital": "Doha",
    "latitude": 25.3548,
    "longitude": 51.1839,
    "continent": "Asia",
    "population": 2900000
  },
  {
    "name": "Kuwait",
    "code": "KW",
    "capital": "Kuwait City",
    "latitude": 29.3117,
    "longitude": 47.4818,
    "continent": "Asia",
    "population": 4300000
  },
  {
    "name": "Bahrain",
    "code": "BH",
    "capital": "Manama",
    "latitude": 26.2361,
    "longitude": 50.5833,
    "continent": "Asia",
    "population": 1700000
  },
  {
    "name": "Oman",
    "code": "OM",
    "capital": "Muscat",
    "latitude": 23.6134,
    "longitude": 58.5922,
    "continent": "Asia",
    "population": 5200000
  },
  {
    "name": "Yemen",
    "code": "YE",
    "capital": "Sana'a",
    "latitude": 15.3547,
    "longitude": 44.2065,
    "continent": "Asia",
    "population": 34000000
  },
  {
    "name": "Iraq",
    "code": "IQ",
    "capital": "Baghdad",
    "latitude": 33.3152,
    "longitude": 44.3661,
    "continent": "Asia",
    "population": 43000000
  },
  {
    "name": "Syria",
    "code": "SY",
    "capital": "Damascus",
    "latitude": 33.5138,
    "longitude": 36.2765,
    "continent": "Asia",
    "population": 21000000
  },
  {
    "name": "Lebanon",
    "code": "LB",
    "capital": "Beirut",
    "latitude": 33.8938,
    "longitude": 35.5018,
    "continent": "Asia",
    "population": 6700000
  },
  {
    "name": "Jordan",
    "code": "JO",
    "capital": "Amman",
    "latitude": 31.9522,
    "longitude": 35.9334,
    "continent": "Asia",
    "population": 11000000
  },
  {
    "name": "Cyprus",
    "code": "CY",
    "capital": "Nicosia",
    "latitude": 35.1856,
    "longitude": 33.3823,
    "continent": "Europe",
    "population": 1200000
  },
  {
    "name": "Sri Lanka",
    "code": "LK",
    "capital": "Colombo",
    "latitude": 6.9271,
    "longitude": 79.8612,
    "continent": "Asia",
    "population": 22000000
  },
  {
    "name": "Bangladesh",
    "code": "BD",
    "capital": "Dhaka",
    "latitude": 23.8103,
    "longitude": 90.4125,
    "continent": "Asia",
    "population": 170000000
  },
  {
    "name": "Nepal",
    "code": "NP",
    "capital": "Kathmandu",
    "latitude": 27.7172,
    "longitude": 85.324,
    "continent": "Asia",
    "population": 30000000
  },
  {
    "name": "Bhutan",
    "code": "BT",
    "capital": "Thimphu",
    "latitude": 27.4716,
    "longitude": 89.6386,
    "continent": "Asia",
    "population": 800000
  },
  {
    "name": "Myanmar",
    "code": "MM",
    "capital": "Naypyidaw",
    "latitude": 21.9162,
    "longitude": 95.956,
    "continent": "Asia",
    "population": 55000000
  },
  {
    "name": "Laos",
    "code": "LA",
    "capital": "Vientiane",
    "latitude": 17.9757,
    "longitude": 102.6331,
    "continent": "Asia",
    "population": 7500000
  },
  {
    "name": "Cambodia",
    "code": "KH",
    "capital": "Phnom Penh",
    "latitude": 11.5564,
    "longitude": 104.9282,
    "continent": "Asia",
    "population": 17000000
  },
  {
    "name": "Brunei",
    "code": "BN",
    "capital": "Bandar Seri Begawan",
    "latitude": 4.9031,
    "longitude": 114.9398,
    "continent": "Asia",
    "population": 450000
  },
  {
    "name": "Timor-Leste",
    "code": "TL",
    "capital": "Dili",
    "latitude": -8.5569,
    "longitude": 125.5603,
    "continent": "Asia",
    "population": 1300000
  },
  {
    "name": "Maldives",
    "code": "MV",
    "capital": "Malé",
    "latitude": 4.1755,
    "longitude": 73.5093,
    "continent": "Asia",
    "population": 540000
  },
  {
    "name": "Afghanistan",
    "code": "AF",
    "capital": "Kabul",
    "latitude": 34.5553,
    "longitude": 69.2075,
    "continent": "Asia",
    "population": 40000000
  },
  {
    "name": "Pakistan",
    "code": "PK",
    "capital": "Islamabad",
    "latitude": 33.6844,
    "longitude": 73.0479,
    "continent": "Asia",
    "population": 230000000
  },
  {
    "name": "Tajikistan",
    "code": "TJ",
    "capital": "Dushanbe",
    "latitude": 38.5737,
    "longitude": 68.7738,
    "continent": "Asia",
    "population": 10000000
  },
  {
    "name": "Kyrgyzstan",
    "code": "KG",
    "capital": "Bishkek",
    "latitude": 42.8746,
    "longitude": 74.5698,
    "continent": "Asia",
    "population": 7000000
  },
  {
    "name": "Kazakhstan",
    "code": "KZ",
    "capital": "Nur-Sultan",
    "latitude": 51.1694,
    "longitude": 71.4491,
    "continent": "Asia",
    "population": 19000000
  },
  {
    "name": "Uzbekistan",
    "code": "UZ",
    "capital": "Tashkent",
    "latitude": 41.2995,
    "longitude": 69.2401,
    "continent": "Asia",
    "population": 35000000
  },
  {
    "name": "Turkmenistan",
    "code": "TM",
    "capital": "Ashgabat",
    "latitude": 37.9601,
    "longitude": 58.3261,
    "continent": "Asia",
    "population": 6000000
  },
  {
    "name": "Azerbaijan",
    "code": "AZ",
    "capital": "Baku",
    "latitude": 40.4093,
    "longitude": 49.8671,
    "continent": "Asia",
    "population": 10000000
  },
  {
    "name": "Georgia",
    "code": "GE",
    "capital": "Tbilisi",
    "latitude": 41.7151,
    "longitude": 44.8271,
    "continent": "Asia",
    "population": 3700000
  },
  {
    "name": "Armenia",
    "code": "AM",
    "capital": "Yerevan",
    "latitude": 40.1872,
    "longitude": 44.5152,
    "continent": "Asia",
    "population": 3000000
  },
  {
    "name": "Moldova",
    "code": "MD",
    "capital": "Chișinău",
    "latitude": 47.0105,
    "longitude": 28.8638,
    "continent": "Europe",
    "population": 2600000
  },
  {
    "name": "Belarus",
    "code": "BY",
    "capital": "Minsk",
    "latitude": 53.9023,
    "longitude": 27.5619,
    "continent": "Europe",
    "population": 9400000
  },
  {
    "name": "Lithuania",
    "code": "LT",
    "capital": "Vilnius",
    "latitude": 54.6872,
    "longitude": 25.2797,
    "continent": "Europe",
    "population": 2800000
  },
  {
    "name": "Latvia",
    "code": "LV",
    "capital": "Riga",
    "latitude": 56.9496,
    "longitude": 24.1052,
    "continent": "Europe",
    "population": 1900000
  },
  {
    "name": "Estonia",
    "code": "EE",
    "capital": "Tallinn",
    "latitude": 59.437,
    "longitude": 24.7536,
    "continent": "Europe",
    "population": 1300000
  },
  {
    "name": "Slovakia",
    "code": "SK",
    "capital": "Bratislava",
    "latitude": 48.1486,
    "longitude": 17.1077,
    "continent": "Europe",
    "population": 5400000
  },
  {
    "name": "Hungary",
    "code": "HU",
    "capital": "Budapest",
    "latitude": 47.4979,
    "longitude": 19.0402,
    "continent": "Europe",
    "population": 9700000
  },
  {
    "name": "Romania",
    "code": "RO",
    "capital": "Bucharest",
    "latitude": 44.4268,
    "longitude": 26.1025,
    "continent": "Europe",
    "population": 19000000
  },
  {
    "name": "Bulgaria",
    "code": "BG",
    "capital": "Sofia",
    "latitude": 42.6977,
    "longitude": 23.3219,
    "continent": "Europe",
    "population": 6800000
  },
  {
    "name": "Croatia",
    "code": "HR",
    "capital": "Zagreb",
    "latitude": 45.8150,
    "longitude": 15.9819,
    "continent": "Europe",
    "population": 4000000
  },
  {
    "name": "Slovenia",
    "code": "SI",
    "capital": "Ljubljana",
    "latitude": 46.0569,
    "longitude": 14.5058,
    "continent": "Europe",
    "population": 2100000
  },
  {
    "name": "Bosnia and Herzegovina",
    "code": "BA",
    "capital": "Sarajevo",
    "latitude": 43.8564,
    "longitude": 18.4131,
    "continent": "Europe",
    "population": 3300000
  },
  {
    "name": "Serbia",
    "code": "RS",
    "capital": "Belgrade",
    "latitude": 44.7866,
    "longitude": 20.4489,
    "continent": "Europe",
    "population": 6800000
  },
  {
    "name": "Montenegro",
    "code": "ME",
    "capital": "Podgorica",
    "latitude": 42.4304,
    "longitude": 19.2594,
    "continent": "Europe",
    "population": 620000
  },
  {
    "name": "North Macedonia",
    "code": "MK",
    "capital": "Skopje",
    "latitude": 42.0041,
    "longitude": 21.4341,
    "continent": "Europe",
    "population": 2100000
  },
  {
    "name": "Albania",
    "code": "AL",
    "capital": "Tirana",
    "latitude": 41.3275,
    "longitude": 19.8187,
    "continent": "Europe",
    "population": 2800000
  },
  {
    "name": "Kosovo",
    "code": "XK",
    "capital": "Pristina",
    "latitude": 42.6629,
    "longitude": 21.1655,
    "continent": "Europe",
    "population": 1800000
  }
];

export const countryClues: Record<string, Clue[]> = {
  'CA': [
    { id: 1, text: 'Has a coastline of 243,042 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 1 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Vast boreal forests and extensive Arctic tundra', difficulty: 3 },
    { id: 4, text: 'Exports Potash', difficulty: 4 },
    { id: 5, text: 'Cultural element: Known for its official policy of multiculturalism', difficulty: 5 },
    { id: 6, text: 'Flag clue: Features a prominent leaf, unique among national flags', difficulty: 6 },
    { id: 7, text: 'Trivia: Has more lakes than the rest of the world\'s lakes combined', difficulty: 7 },
    { id: 8, text: 'Famous person: Justin Bieber', difficulty: 8 }
  ],
  'BR': [
    { id: 1, text: 'Has a coastline of 7,491 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 10 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Massive tropical rainforest basin dominates the north', difficulty: 3 },
    { id: 4, text: 'Exports Footwear (besides commodity exports)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Carnival is a major cultural event, celebrated nationwide', difficulty: 5 },
    { id: 6, text: 'Flag clue: Features a celestial globe depicting the sky over Rio on independence day', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s largest Japanese population outside Japan', difficulty: 7 },
    { id: 8, text: 'Famous person: Pelé', difficulty: 8 }
  ],
  'AU': [
    { id: 1, text: 'Has a coastline of 25,760 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 0 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Large, arid interior known as the Outback', difficulty: 3 },
    { id: 4, text: 'Exports Opals', difficulty: 4 },
    { id: 5, text: 'Cultural element: Emphasis on outdoor lifestyle and sports (\'sporting nation\')', difficulty: 5 },
    { id: 6, text: 'Flag clue: Features stars representing a constellation visible primarily from the Southern Hemisphere', difficulty: 6 },
    { id: 7, text: 'Trivia: Was once used as a penal colony by the British Empire', difficulty: 7 },
    { id: 8, text: 'Famous person: Hugh Jackman', difficulty: 8 }
  ],
  'JP': [
    { id: 1, text: 'Has a coastline of 29,751 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 0 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Archipelago with mountainous terrain and frequent volcanic activity', difficulty: 3 },
    { id: 4, text: 'Exports Activated carbon', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong emphasis on etiquette and respect in social interactions', difficulty: 5 },
    { id: 6, text: 'Flag clue: Known as Nisshōki (日章旗) or Hinomaru (日の丸), meaning \'sun-mark flag\'', difficulty: 6 },
    { id: 7, text: 'Trivia: Has the world\'s oldest continuous hereditary monarchy', difficulty: 7 },
    { id: 8, text: 'Famous person: Hayao Miyazaki', difficulty: 8 }
  ],
  'IN': [
    { id: 1, text: 'Has a coastline of 7,000 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 6 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Large triangular peninsula with diverse geography from Himalayas to coastal plains', difficulty: 3 },
    { id: 4, text: 'Exports Human hair', difficulty: 4 },
    { id: 5, text: 'Cultural element: Caste system, though officially abolished, still influences social structure', difficulty: 5 },
    { id: 6, text: 'Flag clue: The central wheel (Chakra) represents the \'Wheel of Law\' (Dharma)', difficulty: 6 },
    { id: 7, text: 'Trivia: Produces the largest number of feature films per year (Bollywood)', difficulty: 7 },
    { id: 8, text: 'Famous person: Priyanka Chopra', difficulty: 8 }
  ],
  'DE': [
    { id: 1, text: 'Has a coastline of 2,389 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 9 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Forested hills and low mountain ranges in the center and south', difficulty: 3 },
    { id: 4, text: 'Exports Pharmaceutical measurement/control instruments', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong regional identities and dialects persist', difficulty: 5 },
    { id: 6, text: 'Flag clue: The current tricolor was adopted by the Weimar Republic, symbolizing republican democracy', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s first printing press with movable type (Gutenberg)', difficulty: 7 },
    { id: 8, text: 'Famous person: Albert Einstein', difficulty: 8 }
  ],
  'FR': [
    { id: 1, text: 'Has a coastline of 4,853 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 8 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mix of flat plains, rolling hills, and high mountain ranges (Alps, Pyrenees)', difficulty: 3 },
    { id: 4, text: 'Exports Aircraft engines and parts', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong tradition of secularism (laïcité) separating state and religion', difficulty: 5 },
    { id: 6, text: 'Flag clue: The tricolor design influenced many other national flags', difficulty: 6 },
    { id: 7, text: 'Trivia: Contains the most time zones of any country due to its overseas territories', difficulty: 7 },
    { id: 8, text: 'Famous person: Marie Curie', difficulty: 8 }
  ],
  'EG': [
    { id: 1, text: 'Has a coastline of 2,450 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Vast majority of population lives along a major fertile river valley and delta', difficulty: 3 },
    { id: 4, text: 'Exports Perfume essences', difficulty: 4 },
    { id: 5, text: 'Cultural element: Ancient polytheistic religion heavily influenced early culture, now predominantly Sunni Muslim', difficulty: 5 },
    { id: 6, text: 'Flag clue: The eagle of Saladin is a prominent feature, representing Arab nationalism', difficulty: 6 },
    { id: 7, text: 'Trivia: Contains the only remaining Wonder of the Ancient World (Great Pyramid of Giza)', difficulty: 7 },
    { id: 8, text: 'Famous person: Mohamed Salah', difficulty: 8 }
  ],
  'ZA': [
    { id: 1, text: 'Has a coastline of 2,798 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 6 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: High central plateau (Highveld) surrounded by coastal lowlands and mountains', difficulty: 3 },
    { id: 4, text: 'Exports Chromium ore', difficulty: 4 },
    { id: 5, text: 'Cultural element: Known as the \'Rainbow Nation\' due to its diverse ethnicities post-Apartheid', difficulty: 5 },
    { id: 6, text: 'Flag clue: The \'Y\' shape symbolizes the convergence of diverse elements within society', difficulty: 6 },
    { id: 7, text: 'Trivia: Has three capital cities: Pretoria (executive), Bloemfontein (judicial), Cape Town (legislative)', difficulty: 7 },
    { id: 8, text: 'Famous person: Nelson Mandela', difficulty: 8 }
  ],
  'MX': [
    { id: 1, text: 'Has a coastline of 9,330 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 3 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mountain ranges frame a high central plateau; coastal plains', difficulty: 3 },
    { id: 4, text: 'Exports Silver (historically significant, still a major producer)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Day of the Dead (Día de Muertos) is a significant cultural tradition', difficulty: 5 },
    { id: 6, text: 'Flag clue: The central emblem depicts an Aztec legend about founding their capital city', difficulty: 6 },
    { id: 7, text: 'Trivia: Introduced chocolate, corn, and chilies to the world', difficulty: 7 },
    { id: 8, text: 'Famous person: Frida Kahlo', difficulty: 8 }
  ],
  'AR': [
    { id: 1, text: 'Has a coastline of 4,989 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Vast fertile plains (Pampas) in the north, Andes mountains in the west, Patagonia plateau in the south', difficulty: 3 },
    { id: 4, text: 'Exports Yerba Mate', difficulty: 4 },
    { id: 5, text: 'Cultural element: Tango music and dance originated in its capital\'s working-class districts', difficulty: 5 },
    { id: 6, text: 'Flag clue: The \'Sun of May\' emblem has debated origins, possibly relating to Incan sun god Inti', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the highest peak in the Americas (Aconcagua)', difficulty: 7 },
    { id: 8, text: 'Famous person: Lionel Messi', difficulty: 8 }
  ],
  'IT': [
    { id: 1, text: 'Has a coastline of 7,600 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 6 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Long peninsula with mountainous spine (Apennines) and Alpine border in the north', difficulty: 3 },
    { id: 4, text: 'Exports Prepared Olives', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong regional culinary traditions vary significantly across the country', difficulty: 5 },
    { id: 6, text: 'Flag clue: The current tricolor design was inspired by the French flag during the Napoleonic era', difficulty: 6 },
    { id: 7, text: 'Trivia: Has the most UNESCO World Heritage Sites of any country', difficulty: 7 },
    { id: 8, text: 'Famous person: Leonardo da Vinci', difficulty: 8 }
  ],
  'GB': [
    { id: 1, text: 'Has a coastline of 12,429 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 1 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly rugged hills and low mountains; level to rolling plains in the east and southeast', difficulty: 3 },
    { id: 4, text: 'Exports Scotch Whisky (specific type)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Constitutional monarchy with a parliamentary system is central to its identity', difficulty: 5 },
    { id: 6, text: 'Flag clue: Known as the Union Jack, it combines flags of constituent kingdoms (England, Scotland, N. Ireland)', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s oldest underground railway system (London Underground)', difficulty: 7 },
    { id: 8, text: 'Famous person: William Shakespeare', difficulty: 8 }
  ],
  'RU': [
    { id: 1, text: 'Has a coastline of 37,653 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 14 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Vast plains (Siberian, East European), extensive forests (taiga), and tundra in the north', difficulty: 3 },
    { id: 4, text: 'Exports Fertilizers (non-energy mineral)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Eastern Orthodox Christianity has historically been a major cultural influence', difficulty: 5 },
    { id: 6, text: 'Flag clue: The white, blue, red tricolor origins are debated, possibly inspired by the Dutch flag', difficulty: 6 },
    { id: 7, text: 'Trivia: Spans 11 time zones, the most of any country', difficulty: 7 },
    { id: 8, text: 'Famous person: Leo Tolstoy', difficulty: 8 }
  ],
  'CN': [
    { id: 1, text: 'Has a coastline of 14,500 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 14 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Vast and diverse: mountains, high plateaus, deserts in west; plains, deltas, hills in east', difficulty: 3 },
    { id: 4, text: 'Exports Artificially Corundum (synthetic gems)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Confucianism has deeply influenced ethics, education, and social structure', difficulty: 5 },
    { id: 6, text: 'Flag clue: The large star represents the Communist Party, the four smaller stars represent social classes', difficulty: 6 },
    { id: 7, text: 'Trivia: Invented paper, printing, gunpowder, and the compass (Four Great Inventions)', difficulty: 7 },
    { id: 8, text: 'Famous person: Yao Ming', difficulty: 8 }
  ],
  'NG': [
    { id: 1, text: 'Has a coastline of 853 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Southern lowlands merge into central hills and plateaus; plains in north', difficulty: 3 },
    { id: 4, text: 'Exports Shea Nuts', difficulty: 4 },
    { id: 5, text: 'Cultural element: Nollywood is the country\'s prolific film industry, second largest globally by volume', difficulty: 5 },
    { id: 6, text: 'Flag clue: The green represents agriculture/forests, the white represents peace and unity', difficulty: 6 },
    { id: 7, text: 'Trivia: The most populous country in Africa and the 7th most populous in the world', difficulty: 7 },
    { id: 8, text: 'Famous person: Chimamanda Ngozi Adichie', difficulty: 8 }
  ],
  'SA': [
    { id: 1, text: 'Has a coastline of 2,640 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 7 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Vast, arid desert dominates the landscape (Rub\' al Khali)', difficulty: 3 },
    { id: 4, text: 'Exports Ethylene Polymers (plastics)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Birthplace of Islam; laws and customs are deeply rooted in Sunni Islamic tradition (Wahhabism)', difficulty: 5 },
    { id: 6, text: 'Flag clue: Features the Shahada (Islamic creed) and a sword; unique in being officially non-reversible', difficulty: 6 },
    { id: 7, text: 'Trivia: Possesses approximately 17% of the world\'s proven petroleum reserves', difficulty: 7 },
    { id: 8, text: 'Famous person: King Salman bin Abdulaziz', difficulty: 8 }
  ],
  'IR': [
    { id: 1, text: 'Has a coastline of 2,440 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 7 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Rugged mountainous rims surround high interior basins with deserts and salt flats', difficulty: 3 },
    { id: 4, text: 'Exports Pistachios', difficulty: 4 },
    { id: 5, text: 'Cultural element: Persian poetry (e.g., Rumi, Hafez) holds significant cultural importance', difficulty: 5 },
    { id: 6, text: 'Flag clue: The central emblem is a stylized representation of the word \'Allah\'', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to one of the world\'s oldest continuous major civilizations', difficulty: 7 },
    { id: 8, text: 'Famous person: Abbas Kiarostami', difficulty: 8 }
  ],
  'TR': [
    { id: 1, text: 'Has a coastline of 7,200 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 8 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Peninsula bridging continents; high central plateau, narrow coastal plain, mountains', difficulty: 3 },
    { id: 4, text: 'Exports Hazelnuts (world\'s largest producer)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Secular state tradition established by Atatürk, but Islam remains influential', difficulty: 5 },
    { id: 6, text: 'Flag clue: The star and crescent are ancient symbols associated with the region, predating Islam', difficulty: 6 },
    { id: 7, text: 'Trivia: Istanbul is the only city in the world located on two continents (Europe and Asia)', difficulty: 7 },
    { id: 8, text: 'Famous person: Orhan Pamuk', difficulty: 8 }
  ],
  'VN': [
    { id: 1, text: 'Has a coastline of 3,444 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 3 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Long, narrow country; mountains in northwest, Red River Delta in north, coastal lowlands, Mekong Delta in south', difficulty: 3 },
    { id: 4, text: 'Exports Mobile Phones/Electronics (major export beyond textiles/agriculture)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Ancestor veneration is a common practice across various religious beliefs', difficulty: 5 },
    { id: 6, text: 'Flag clue: The yellow star represents the leadership of the Communist Party and national unity', difficulty: 6 },
    { id: 7, text: 'Trivia: Famous for its complex network of underground tunnels used during the Vietnam War (e.g., Củ Chi)', difficulty: 7 },
    { id: 8, text: 'Famous person: Ho Chi Minh', difficulty: 8 }
  ],
  'TH': [
    { id: 1, text: 'Has a coastline of 3,219 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Central plains dominated by a major river, mountains in the north, southern isthmus', difficulty: 3 },
    { id: 4, text: 'Exports Computer Hard Drives', difficulty: 4 },
    { id: 5, text: 'Cultural element: Known for its unique form of Buddhism (Theravada) integrated with local beliefs', difficulty: 5 },
    { id: 6, text: 'Flag clue: The red, white, blue stripes represent nation-religion-king, the unofficial motto', difficulty: 6 },
    { id: 7, text: 'Trivia: The only Southeast Asian country never colonized by European powers', difficulty: 7 },
    { id: 8, text: 'Famous person: Tony Jaa', difficulty: 8 }
  ],
  'ES': [
    { id: 1, text: 'Has a coastline of 4,964 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Large, high central plateau (Meseta Central) surrounded by mountain ranges', difficulty: 3 },
    { id: 4, text: 'Exports Pig Iron', difficulty: 4 },
    { id: 5, text: 'Cultural element: Siesta, an afternoon rest, while less common now, is a known cultural aspect', difficulty: 5 },
    { id: 6, text: 'Flag clue: Current flag\'s origins trace back to a naval ensign chosen in the late 18th century', difficulty: 6 },
    { id: 7, text: 'Trivia: Contains Europe\'s only true desert (Tabernas Desert)', difficulty: 7 },
    { id: 8, text: 'Famous person: Pablo Picasso', difficulty: 8 }
  ],
  'PL': [
    { id: 1, text: 'Has a coastline of 440 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 7 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly flat plains, part of the North European Plain; mountains along the southern border', difficulty: 3 },
    { id: 4, text: 'Exports Furniture (besides machinery)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Catholic identity has historically shaped national culture and politics', difficulty: 5 },
    { id: 6, text: 'Flag clue: One of the oldest red and white flags, colors derived from medieval coats of arms', difficulty: 6 },
    { id: 7, text: 'Trivia: Was completely partitioned by neighbors and disappeared from the map for 123 years', difficulty: 7 },
    { id: 8, text: 'Famous person: Marie Curie (born Skłodowska)', difficulty: 8 }
  ],
  'UA': [
    { id: 1, text: 'Has a coastline of 2,782 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 7 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Vast fertile plains (steppes) cover most of the country; mountains in the west (Carpathians)', difficulty: 3 },
    { id: 4, text: 'Exports Sunflower Oil (world\'s largest exporter)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Pysanka, intricately decorated Easter eggs, are a famous folk art tradition', difficulty: 5 },
    { id: 6, text: 'Flag clue: The blue represents sky/peace, the yellow represents wheat fields/prosperity', difficulty: 6 },
    { id: 7, text: 'Trivia: Site of the Chernobyl disaster, the worst nuclear power plant accident in history', difficulty: 7 },
    { id: 8, text: 'Famous person: Volodymyr Zelenskyy', difficulty: 8 }
  ],
  'GR': [
    { id: 1, text: 'Has a coastline of 13,676 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mountainous peninsula and numerous islands; extensive coastline', difficulty: 3 },
    { id: 4, text: 'Exports Marble', difficulty: 4 },
    { id: 5, text: 'Cultural element: Birthplace of democracy, Western philosophy, theatre, and the Olympic Games', difficulty: 5 },
    { id: 6, text: 'Flag clue: The nine stripes possibly represent the syllables in \'Freedom or Death\' or the seas/skies', difficulty: 6 },
    { id: 7, text: 'Trivia: Has more archaeological museums than any other country in the world', difficulty: 7 },
    { id: 8, text: 'Famous person: Socrates', difficulty: 8 }
  ],
  'NO': [
    { id: 1, text: 'Has a coastline of 25,148 (including fjords/islands) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 3 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Deeply indented coastline with fjords; mountainous interior; tundra in the north', difficulty: 3 },
    { id: 4, text: 'Exports Fresh Salmon', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong egalitarian values and emphasis on outdoor life (\'friluftsliv\')', difficulty: 5 },
    { id: 6, text: 'Flag clue: Features a Scandinavian cross, with proportions specified by law', difficulty: 6 },
    { id: 7, text: 'Trivia: Awards the Nobel Peace Prize annually in its capital city', difficulty: 7 },
    { id: 8, text: 'Famous person: Edvard Munch', difficulty: 8 }
  ],
  'SE': [
    { id: 1, text: 'Has a coastline of 3,218 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 3 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Extensive forests cover half the country; mountains in the west; numerous lakes', difficulty: 3 },
    { id: 4, text: 'Exports Paper products (beyond machinery)', difficulty: 4 },
    { id: 5, text: 'Cultural element: \'Fika\' (coffee and cake break) is an important part of daily social life', difficulty: 5 },
    { id: 6, text: 'Flag clue: Features a Scandinavian cross; colors (blue and yellow) based on the national coat of arms', difficulty: 6 },
    { id: 7, text: 'Trivia: A major music exporter, ranking high globally in music revenue per capita', difficulty: 7 },
    { id: 8, text: 'Famous person: ABBA (group)', difficulty: 8 }
  ],
  'FI': [
    { id: 1, text: 'Has a coastline of 1,250 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 3 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly low, flat to rolling plains interspersed with lakes and low hills', difficulty: 3 },
    { id: 4, text: 'Exports Refined Petroleum (significant non-tech export)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Sauna culture is deeply ingrained, with millions of saunas nationwide', difficulty: 5 },
    { id: 6, text: 'Flag clue: Features a Scandinavian cross; blue for lakes/sky, white for snow', difficulty: 6 },
    { id: 7, text: 'Trivia: Has the highest number of heavy metal bands per capita in the world', difficulty: 7 },
    { id: 8, text: 'Famous person: Jean Sibelius', difficulty: 8 }
  ],
  'CH': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Dominated by the Alps in the south and the Jura mountains in the northwest; central plateau', difficulty: 3 },
    { id: 4, text: 'Exports Watches (high value, specific)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Known for its policy of armed neutrality and direct democracy system', difficulty: 5 },
    { id: 6, text: 'Flag clue: One of only two square sovereign-state flags (the other is Vatican City)', difficulty: 6 },
    { id: 7, text: 'Trivia: Has four national languages: German, French, Italian, Romansh', difficulty: 7 },
    { id: 8, text: 'Famous person: Roger Federer', difficulty: 8 }
  ],
  'NL': [
    { id: 1, text: 'Has a coastline of 451 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 2 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly coastal lowland and reclaimed land (polders); flat terrain', difficulty: 3 },
    { id: 4, text: 'Exports Cut Flowers (world\'s largest exporter)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Known for its historically tolerant social policies', difficulty: 5 },
    { id: 6, text: 'Flag clue: The red-white-blue tricolor is one of the oldest in continuous use, influencing others (e.g., Russia)', difficulty: 6 },
    { id: 7, text: 'Trivia: About a quarter of the country lies below sea level', difficulty: 7 },
    { id: 8, text: 'Famous person: Vincent van Gogh', difficulty: 8 }
  ],
  'BE': [
    { id: 1, text: 'Has a coastline of 67 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Flat coastal plains in northwest, central rolling hills, rugged mountains (Ardennes) in southeast', difficulty: 3 },
    { id: 4, text: 'Exports Chocolate products (specific food)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Complex political structure balancing Dutch-speaking Flanders and French-speaking Wallonia', difficulty: 5 },
    { id: 6, text: 'Flag clue: The vertical tricolor was inspired by the French flag, but uses colors from the Duchy of Brabant coat of arms', difficulty: 6 },
    { id: 7, text: 'Trivia: Headquarters of the European Union and NATO are located in its capital', difficulty: 7 },
    { id: 8, text: 'Famous person: René Magritte', difficulty: 8 }
  ],
  'PT': [
    { id: 1, text: 'Has a coastline of 1,793 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 1 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mountainous north of the Tagus River, rolling plains in the south; Atlantic islands', difficulty: 3 },
    { id: 4, text: 'Exports Cork (world\'s largest producer)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Fado music, a melancholic genre, is a significant cultural expression', difficulty: 5 },
    { id: 6, text: 'Flag clue: The green represents hope, the red represents the blood shed for the nation; armillary sphere recalls Age of Discovery', difficulty: 6 },
    { id: 7, text: 'Trivia: Established one of the earliest and longest-lived colonial empires', difficulty: 7 },
    { id: 8, text: 'Famous person: Cristiano Ronaldo', difficulty: 8 }
  ],
  'IE': [
    { id: 1, text: 'Has a coastline of 1,448 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 1 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly level to rolling interior plains surrounded by rugged hills and low coastal mountains', difficulty: 3 },
    { id: 4, text: 'Exports Pharmaceuticals (major, but less \'obvious\' than Guinness)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Saint Patrick\'s Day is celebrated globally, originating from its patron saint', difficulty: 5 },
    { id: 6, text: 'Flag clue: The green represents Catholics/Gaelic tradition, orange represents Protestants/William of Orange supporters, white represents peace', difficulty: 6 },
    { id: 7, text: 'Trivia: The only country in the world with a musical instrument (the harp) as its national symbol', difficulty: 7 },
    { id: 8, text: 'Famous person: James Joyce', difficulty: 8 }
  ],
  'AT': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 8 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Dominated by the Alps in the west and south; lowlands and plains in the east', difficulty: 3 },
    { id: 4, text: 'Exports Wooden Joinery Products', difficulty: 4 },
    { id: 5, text: 'Cultural element: Vienna was a major center for classical music (Mozart, Beethoven, Strauss)', difficulty: 5 },
    { id: 6, text: 'Flag clue: The red-white-red pattern is one of the oldest national flag designs still in use', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s oldest zoo (Tiergarten Schönbrunn)', difficulty: 7 },
    { id: 8, text: 'Famous person: Sigmund Freud', difficulty: 8 }
  ],
  'CL': [
    { id: 1, text: 'Has a coastline of 6,435 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Long, narrow country; Andes mountains to the east, low coastal mountains, central valley, arid north', difficulty: 3 },
    { id: 4, text: 'Exports Copper Wire (refined product)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Poetry holds a high cultural status (e.g., Neruda, Mistral)', difficulty: 5 },
    { id: 6, text: 'Flag clue: The star is said to guide progress and honor, blue for sky/Pacific, white for Andes snow, red for blood shed', difficulty: 6 },
    { id: 7, text: 'Trivia: Contains the driest place on Earth (Atacama Desert)', difficulty: 7 },
    { id: 8, text: 'Famous person: Pablo Neruda', difficulty: 8 }
  ],
  'PE': [
    { id: 1, text: 'Has a coastline of 2,414 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Western coastal plain (costa), high Andes mountains (sierra), eastern jungle lowlands (selva)', difficulty: 3 },
    { id: 4, text: 'Exports Zinc Ore', difficulty: 4 },
    { id: 5, text: 'Cultural element: Fusion cuisine blending indigenous, Spanish, African, and Asian influences is highly regarded', difficulty: 5 },
    { id: 6, text: 'Flag clue: The red symbolizes blood shed for independence, white symbolizes peace; coat of arms often included', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to Machu Picchu, an ancient Inca citadel high in the Andes', difficulty: 7 },
    { id: 8, text: 'Famous person: Mario Vargas Llosa', difficulty: 8 }
  ],
  'CO': [
    { id: 1, text: 'Has a coastline of 3,208 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Coastal lowlands, central highlands (Andes), eastern plains (Llanos), Amazon rainforest', difficulty: 3 },
    { id: 4, text: 'Exports Cut Flowers (major global exporter)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong regional diversity in music, dance, and dialects', difficulty: 5 },
    { id: 6, text: 'Flag clue: The yellow (larger) represents gold/resources, blue represents seas, red represents blood shed', difficulty: 6 },
    { id: 7, text: 'Trivia: The only South American country with coastlines on both the Pacific Ocean and Caribbean Sea', difficulty: 7 },
    { id: 8, text: 'Famous person: Gabriel García Márquez', difficulty: 8 }
  ],
  'VE': [
    { id: 1, text: 'Has a coastline of 2,800 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 3 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Andes mountains in northwest, central plains (Llanos), Guiana Highlands in southeast', difficulty: 3 },
    { id: 4, text: 'Exports Acyclic Alcohols (chemical)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Baseball is the most popular sport, producing many international players', difficulty: 5 },
    { id: 6, text: 'Flag clue: The eight stars represent the original provinces; colors based on Miranda\'s revolutionary flag', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to Angel Falls, the world\'s highest uninterrupted waterfall', difficulty: 7 },
    { id: 8, text: 'Famous person: Simón Bolívar', difficulty: 8 }
  ],
  'KE': [
    { id: 1, text: 'Has a coastline of 536 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Coastal plains rise to central highlands bisected by the Great Rift Valley; fertile plateau in west', difficulty: 3 },
    { id: 4, text: 'Exports Cut Flowers', difficulty: 4 },
    { id: 5, text: 'Cultural element: Renowned for long-distance runners, particularly from the Rift Valley region', difficulty: 5 },
    { id: 6, text: 'Flag clue: The central shield and spears represent defense of freedom; black for people, red for blood, green for land, white for peace', difficulty: 6 },
    { id: 7, text: 'Trivia: Famous for its national parks and wildlife reserves (e.g., Maasai Mara)', difficulty: 7 },
    { id: 8, text: 'Famous person: Wangari Maathai', difficulty: 8 }
  ],
  'ET': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 6 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: High plateau with central mountain range divided by the Great Rift Valley', difficulty: 3 },
    { id: 4, text: 'Exports Coffee beans (origin of Arabica coffee)', difficulty: 4 },
    { id: 5, text: 'Cultural element: One of the oldest Christian nations, with its own distinct Orthodox Tewahedo Church', difficulty: 5 },
    { id: 6, text: 'Flag clue: The central pentagram represents unity of nations/nationalities/peoples; blue for peace, yellow for hope/justice/equality', difficulty: 6 },
    { id: 7, text: 'Trivia: The only African country never formally colonized (brief Italian occupation)', difficulty: 7 },
    { id: 8, text: 'Famous person: Haile Selassie', difficulty: 8 }
  ],
  'MA': [
    { id: 1, text: 'Has a coastline of 1,835 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 3 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mountainous interior (Atlas, Rif), large deserts, extensive coastline', difficulty: 3 },
    { id: 4, text: 'Exports Phosphoric Acid (derived from phosphate rock)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Traditional markets (souks) are vibrant centers of commerce and culture', difficulty: 5 },
    { id: 6, text: 'Flag clue: Features a green pentagram (Seal of Solomon) on a red field; red represents ruling dynasty', difficulty: 6 },
    { id: 7, text: 'Trivia: Claims the territory of Western Sahara, disputed internationally', difficulty: 7 },
    { id: 8, text: 'Famous person: Ibn Battuta', difficulty: 8 }
  ],
  'GH': [
    { id: 1, text: 'Has a coastline of 539 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 3 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly low plains with dissected plateau in the south-central area', difficulty: 3 },
    { id: 4, text: 'Exports Cocoa Paste (processed)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Kente cloth, a brightly colored woven fabric, is a symbol of national and Akan identity', difficulty: 5 },
    { id: 6, text: 'Flag clue: The black star represents African freedom; colors (red, gold, green) common in African flags', difficulty: 6 },
    { id: 7, text: 'Trivia: First sub-Saharan African country to gain independence from colonial rule (1957)', difficulty: 7 },
    { id: 8, text: 'Famous person: Kofi Annan', difficulty: 8 }
  ],
  'MY': [
    { id: 1, text: 'Has a coastline of 4,675 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 3 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Peninsula and East Malaysia (Borneo); coastal plains rising to hills and mountains', difficulty: 3 },
    { id: 4, text: 'Exports Palm Oil (major global producer)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Multi-ethnic society with significant Malay, Chinese, and Indian populations influencing culture', difficulty: 5 },
    { id: 6, text: 'Flag clue: The 14 stripes/points represent the 13 states and federal territories; crescent/star represent Islam', difficulty: 6 },
    { id: 7, text: 'Trivia: Features one of the world\'s oldest rainforests (Taman Negara)', difficulty: 7 },
    { id: 8, text: 'Famous person: Michelle Yeoh', difficulty: 8 }
  ],
  'ID': [
    { id: 1, text: 'Has a coastline of 54,716 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 3 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Archipelago of thousands of islands; highly volcanic; extensive rainforests', difficulty: 3 },
    { id: 4, text: 'Exports Coal Briquettes (energy, less obvious than crude)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Gamelan music, ensemble music often featuring metallophones, is traditional', difficulty: 5 },
    { id: 6, text: 'Flag clue: Simple red and white bicolor (\'Sang Saka Merah Putih\'); colors have ancient origins in the region', difficulty: 6 },
    { id: 7, text: 'Trivia: The world\'s largest island country and most populous Muslim-majority country', difficulty: 7 },
    { id: 8, text: 'Famous person: Sukarno', difficulty: 8 }
  ],
  'PH': [
    { id: 1, text: 'Has a coastline of 36,289 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 0 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Archipelago of over 7,000 islands; mostly mountainous with coastal lowlands', difficulty: 3 },
    { id: 4, text: 'Exports Integrated Circuits (electronics)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong influence of Spanish colonization and Catholicism, mixed with Asian traditions', difficulty: 5 },
    { id: 6, text: 'Flag clue: The sun represents independence, its 8 rays the provinces that revolted against Spain; stars for main island groups', difficulty: 6 },
    { id: 7, text: 'Trivia: People send roughly 400 million text messages daily, one of the highest rates globally', difficulty: 7 },
    { id: 8, text: 'Famous person: Manny Pacquiao', difficulty: 8 }
  ],
  'NZ': [
    { id: 1, text: 'Has a coastline of 15,134 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 0 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Two main islands (North and South) and numerous smaller islands; volcanic North, mountainous South (Southern Alps)', difficulty: 3 },
    { id: 4, text: 'Exports Casein (milk protein)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Māori culture and traditions (e.g., Haka) are integral to national identity', difficulty: 5 },
    { id: 6, text: 'Flag clue: Features the Union Jack (historical ties) and stars of the Southern Cross constellation', difficulty: 6 },
    { id: 7, text: 'Trivia: One of the last major landmasses settled by humans', difficulty: 7 },
    { id: 8, text: 'Famous person: Peter Jackson', difficulty: 8 }
  ],
  'KR': [
    { id: 1, text: 'Has a coastline of 2,413 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 1 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly mountainous peninsula; coastal plains in west and south', difficulty: 3 },
    { id: 4, text: 'Exports Memory Modules (Electronics)', difficulty: 4 },
    { id: 5, text: 'Cultural element: \'K-Pop\' (Korean Pop music) has become a major global cultural phenomenon', difficulty: 5 },
    { id: 6, text: 'Flag clue: Features a central Taegeuk symbol (yin-yang) and four trigrams from the I Ching, representing cosmic balance', difficulty: 6 },
    { id: 7, text: 'Trivia: Has the world\'s fastest average internet speeds', difficulty: 7 },
    { id: 8, text: 'Famous person: Bong Joon-ho', difficulty: 8 }
  ],
  'KP': [
    { id: 1, text: 'Has a coastline of 2,495 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 3 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly hills and mountains separated by deep, narrow valleys; coastal plains in west', difficulty: 3 },
    { id: 4, text: 'Exports Clocks and Watch Movements (reported niche export)', difficulty: 4 },
    { id: 5, text: 'Cultural element: \'Juche\' ideology, emphasizing self-reliance, is the official state doctrine', difficulty: 5 },
    { id: 6, text: 'Flag clue: The red star represents communism; blue for sovereignty/peace, white for purity, red for revolution', difficulty: 6 },
    { id: 7, text: 'Trivia: Officially operates on its own \'Pyongyang Time\' timezone (UTC+08:30)', difficulty: 7 },
    { id: 8, text: 'Famous person: Kim Jong-un', difficulty: 8 }
  ],
  'MN': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 2 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Vast semi-desert and desert plains; mountains in west and southwest; Gobi Desert in south', difficulty: 3 },
    { id: 4, text: 'Exports Animal Hair (Cashmere)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Traditional nomadic pastoralism remains a significant part of the culture and economy', difficulty: 5 },
    { id: 6, text: 'Flag clue: Features the \'Soyombo\' symbol, an ancient Mongolian emblem representing freedom and independence', difficulty: 6 },
    { id: 7, text: 'Trivia: Has the lowest population density of any independent country in the world', difficulty: 7 },
    { id: 8, text: 'Famous person: Genghis Khan (historical figure)', difficulty: 8 }
  ],
  'SG': [
    { id: 1, text: 'Has a coastline of 193 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 1 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: One main island and 63 smaller islands; mostly low-lying', difficulty: 3 },
    { id: 4, text: 'Exports Integrated Circuits', difficulty: 4 },
    { id: 5, text: 'Cultural element: Multi-ethnic society with four official languages', difficulty: 5 },
    { id: 6, text: 'Flag clue: Red and white symbolize universal brotherhood and equality; crescent moon represents a young nation', difficulty: 6 },
    { id: 7, text: 'Trivia: One of the world\'s most densely populated countries', difficulty: 7 },
    { id: 8, text: 'Famous person: Lee Kuan Yew', difficulty: 8 }
  ],
  'IL': [
    { id: 1, text: 'Has a coastline of 273 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Long, narrow country; Mediterranean coast, Negev desert in south', difficulty: 3 },
    { id: 4, text: 'Exports Diamonds (cut and polished)', difficulty: 4 },
    { id: 5, text: 'Cultural element: Jewish religious traditions deeply influence daily life and national holidays', difficulty: 5 },
    { id: 6, text: 'Flag clue: Features the Star of David between two blue stripes representing a Jewish prayer shawl', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s lowest freshwater lake (Sea of Galilee)', difficulty: 7 },
    { id: 8, text: 'Famous person: Natalie Portman', difficulty: 8 }
  ],
  'AE': [
    { id: 1, text: 'Has a coastline of 1,318 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 2 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly desert with coastal plains and mountains in the east', difficulty: 3 },
    { id: 4, text: 'Exports Crude Petroleum', difficulty: 4 },
    { id: 5, text: 'Cultural element: Traditional Bedouin hospitality remains important in modern society', difficulty: 5 },
    { id: 6, text: 'Flag clue: The four colors represent Arab unity; red represents strength and bravery', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s tallest building (Burj Khalifa)', difficulty: 7 },
    { id: 8, text: 'Famous person: Sheikh Mohammed bin Rashid Al Maktoum', difficulty: 8 }
  ],
  'QA': [
    { id: 1, text: 'Has a coastline of 563 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 1 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Small peninsula extending into the Persian Gulf; mostly flat desert', difficulty: 3 },
    { id: 4, text: 'Exports Liquefied Natural Gas', difficulty: 4 },
    { id: 5, text: 'Cultural element: Traditional pearl diving heritage, though industry declined with cultured pearls', difficulty: 5 },
    { id: 6, text: 'Flag clue: The maroon color is unique among Arab flags; nine-point serration represents being the ninth member of the \'reconciled emirates\'', difficulty: 6 },
    { id: 7, text: 'Trivia: Has the highest GDP per capita in the world', difficulty: 7 },
    { id: 8, text: 'Famous person: Sheikh Tamim bin Hamad Al Thani', difficulty: 8 }
  ],
  'KW': [
    { id: 1, text: 'Has a coastline of 499 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 2 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Small country with mostly flat desert terrain', difficulty: 3 },
    { id: 4, text: 'Exports Refined Petroleum', difficulty: 4 },
    { id: 5, text: 'Cultural element: Traditional diwaniya gatherings remain important social institutions', difficulty: 5 },
    { id: 6, text: 'Flag clue: The green represents the land, white represents deeds, red represents swords, black represents battles', difficulty: 6 },
    { id: 7, text: 'Trivia: First Gulf country to establish a parliament', difficulty: 7 },
    { id: 8, text: 'Famous person: Nasser Al-Kharafi', difficulty: 8 }
  ],
  'BH': [
    { id: 1, text: 'Has a coastline of 161 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 1 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Archipelago of 33 islands; mostly low-lying desert plain', difficulty: 3 },
    { id: 4, text: 'Exports Aluminum', difficulty: 4 },
    { id: 5, text: 'Cultural element: Traditional pearl diving heritage, though industry declined with cultured pearls', difficulty: 5 },
    { id: 6, text: 'Flag clue: The five white triangles represent the five pillars of Islam', difficulty: 6 },
    { id: 7, text: 'Trivia: Site of the ancient Dilmun civilization', difficulty: 7 },
    { id: 8, text: 'Famous person: King Hamad bin Isa Al Khalifa', difficulty: 8 }
  ],
  'OM': [
    { id: 1, text: 'Has a coastline of 2,092 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 3 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mountainous north, central desert, coastal plain along Arabian Sea', difficulty: 3 },
    { id: 4, text: 'Exports Crude Petroleum', difficulty: 4 },
    { id: 5, text: 'Cultural element: Traditional frankincense trade heritage remains culturally significant', difficulty: 5 },
    { id: 6, text: 'Flag clue: The national emblem (khanjar and crossed swords) represents historical weapons', difficulty: 6 },
    { id: 7, text: 'Trivia: Once controlled a vast maritime empire stretching from East Africa to South Asia', difficulty: 7 },
    { id: 8, text: 'Famous person: Sultan Haitham bin Tariq', difficulty: 8 }
  ],
  'YE': [
    { id: 1, text: 'Has a coastline of 1,906 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 2 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mountainous interior, narrow coastal plain, Red Sea and Gulf of Aden coastlines', difficulty: 3 },
    { id: 4, text: 'Exports Crude Petroleum', difficulty: 4 },
    { id: 5, text: 'Cultural element: Traditional qat chewing is a significant social activity', difficulty: 5 },
    { id: 6, text: 'Flag clue: The red represents unity, white represents bright future, black represents dark past', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s oldest skyscraper city (Sana\'a)', difficulty: 7 },
    { id: 8, text: 'Famous person: Tawakkol Karman', difficulty: 8 }
  ],
  'IQ': [
    { id: 1, text: 'Has a coastline of 58 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 6 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly desert; broad plains; reedy marshes along Iranian border', difficulty: 3 },
    { id: 4, text: 'Exports Crude Petroleum', difficulty: 4 },
    { id: 5, text: 'Cultural element: Ancient Mesopotamian civilization heritage influences modern culture', difficulty: 5 },
    { id: 6, text: 'Flag clue: The three stars represent the three words of the national motto: Unity, Freedom, Socialism', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the ancient city of Babylon', difficulty: 7 },
    { id: 8, text: 'Famous person: Zaha Hadid', difficulty: 8 }
  ],
  'SY': [
    { id: 1, text: 'Has a coastline of 193 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Narrow coastal plain, mountains in west, desert in east', difficulty: 3 },
    { id: 4, text: 'Exports Crude Petroleum', difficulty: 4 },
    { id: 5, text: 'Cultural element: Damascus is one of the oldest continuously inhabited cities in the world', difficulty: 5 },
    { id: 6, text: 'Flag clue: The two stars represent Syria and Egypt during their brief union', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the ancient city of Palmyra', difficulty: 7 },
    { id: 8, text: 'Famous person: Asma al-Assad', difficulty: 8 }
  ],
  'LB': [
    { id: 1, text: 'Has a coastline of 225 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 2 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Narrow coastal plain; Lebanon Mountains in center; Anti-Lebanon Mountains in east', difficulty: 3 },
    { id: 4, text: 'Exports Gold', difficulty: 4 },
    { id: 5, text: 'Cultural element: Known for its religious diversity and coexistence', difficulty: 5 },
    { id: 6, text: 'Flag clue: The cedar tree is a symbol of strength and immortality', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the ancient Phoenician civilization', difficulty: 7 },
    { id: 8, text: 'Famous person: Fairuz', difficulty: 8 }
  ],
  'JO': [
    { id: 1, text: 'Has a coastline of 26 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly desert plateau in east; highland area in west', difficulty: 3 },
    { id: 4, text: 'Exports Potash', difficulty: 4 },
    { id: 5, text: 'Cultural element: Petra, an ancient city carved into rock, is a major cultural symbol', difficulty: 5 },
    { id: 6, text: 'Flag clue: The seven-pointed star represents the seven verses of the first sura in the Quran', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the Dead Sea, the lowest point on Earth\'s land surface', difficulty: 7 },
    { id: 8, text: 'Famous person: Queen Rania', difficulty: 8 }
  ],
  'CY': [
    { id: 1, text: 'Has a coastline of 648 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 0 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Central plain with mountains to north and south; scattered hills', difficulty: 3 },
    { id: 4, text: 'Exports Cheese', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Greek and Turkish cultural influences', difficulty: 5 },
    { id: 6, text: 'Flag clue: The map of the island and olive branches represent peace between Greek and Turkish Cypriots', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s oldest wine label', difficulty: 7 },
    { id: 8, text: 'Famous person: Marcos Baghdatis', difficulty: 8 }
  ],
  'LK': [
    { id: 1, text: 'Has a coastline of 1,340 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 1 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Coastal plains; central and southern highlands; northern plains', difficulty: 3 },
    { id: 4, text: 'Exports Tea', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Buddhist influence with ancient temples', difficulty: 5 },
    { id: 6, text: 'Flag clue: The lion represents the Sinhalese ethnicity; the sword represents authority', difficulty: 6 },
    { id: 7, text: 'Trivia: Fourth-largest producer of tea in the world', difficulty: 7 },
    { id: 8, text: 'Famous person: Muttiah Muralitharan', difficulty: 8 }
  ],
  'BD': [
    { id: 1, text: 'Has a coastline of 580 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 2 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly flat alluvial plain; hilly in southeast', difficulty: 3 },
    { id: 4, text: 'Exports Garments', difficulty: 4 },
    { id: 5, text: 'Cultural element: Known for its rich literary heritage and poetry', difficulty: 5 },
    { id: 6, text: 'Flag clue: The red disc represents the sun rising over Bengal, and the blood of those who died for independence', difficulty: 6 },
    { id: 7, text: 'Trivia: Has the world\'s largest river delta (Ganges-Brahmaputra)', difficulty: 7 },
    { id: 8, text: 'Famous person: Muhammad Yunus', difficulty: 8 }
  ],
  'NP': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 2 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Contains eight of world\'s ten tallest mountains, including Mount Everest', difficulty: 3 },
    { id: 4, text: 'Exports Carpets', difficulty: 4 },
    { id: 5, text: 'Cultural element: Birthplace of Buddha; strong Hindu and Buddhist traditions', difficulty: 5 },
    { id: 6, text: 'Flag clue: The only non-rectangular national flag in the world', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s highest lake (Tilicho Lake)', difficulty: 7 },
    { id: 8, text: 'Famous person: Tenzing Norgay', difficulty: 8 }
  ],
  'BT': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 2 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mountainous with some fertile valleys and savanna', difficulty: 3 },
    { id: 4, text: 'Exports Electricity', difficulty: 4 },
    { id: 5, text: 'Cultural element: Measures Gross National Happiness instead of GDP', difficulty: 5 },
    { id: 6, text: 'Flag clue: The dragon represents the name of the country (Druk Yul - Land of the Thunder Dragon)', difficulty: 6 },
    { id: 7, text: 'Trivia: First country in the world to ban tobacco sales and smoking in public places', difficulty: 7 },
    { id: 8, text: 'Famous person: Jigme Khesar Namgyel Wangchuck', difficulty: 8 }
  ],
  'MM': [
    { id: 1, text: 'Has a coastline of 1,930 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Central lowlands ringed by steep, rugged highlands', difficulty: 3 },
    { id: 4, text: 'Exports Natural Gas', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Buddhist influence with thousands of pagodas', difficulty: 5 },
    { id: 6, text: 'Flag clue: The three colors represent solidarity, peace and tranquility, and courage and decisiveness', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s largest book (Kuthodaw Pagoda)', difficulty: 7 },
    { id: 8, text: 'Famous person: Aung San Suu Kyi', difficulty: 8 }
  ],
  'LA': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly mountains, with some plains and plateaus', difficulty: 3 },
    { id: 4, text: 'Exports Copper', difficulty: 4 },
    { id: 5, text: 'Cultural element: Traditional Lao music features the khene (bamboo mouth organ)', difficulty: 5 },
    { id: 6, text: 'Flag clue: The white circle represents the unity of the people under the leadership of the Lao People\'s Revolutionary Party', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the Plain of Jars, an archaeological site with thousands of stone jars', difficulty: 7 },
    { id: 8, text: 'Famous person: Thongloun Sisoulith', difficulty: 8 }
  ],
  'KH': [
    { id: 1, text: 'Has a coastline of 443 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 3 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly low, flat plains; mountains in southwest and north', difficulty: 3 },
    { id: 4, text: 'Exports Garments', difficulty: 4 },
    { id: 5, text: 'Cultural element: Home to Angkor Wat, the largest religious monument in the world', difficulty: 5 },
    { id: 6, text: 'Flag clue: The central temple represents Angkor Wat, a symbol of the nation', difficulty: 6 },
    { id: 7, text: 'Trivia: Has the world\'s largest freshwater fish (Mekong giant catfish)', difficulty: 7 },
    { id: 8, text: 'Famous person: Norodom Sihamoni', difficulty: 8 }
  ],
  'BN': [
    { id: 1, text: 'Has a coastline of 161 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 1 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Flat coastal plain rises to mountains in east; hilly lowland in west', difficulty: 3 },
    { id: 4, text: 'Exports Crude Petroleum', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Islamic influence with traditional Malay customs', difficulty: 5 },
    { id: 6, text: 'Flag clue: The crest represents the monarchy; the hands represent the government\'s duty to protect the people', difficulty: 6 },
    { id: 7, text: 'Trivia: One of the richest countries in the world by GDP per capita', difficulty: 7 },
    { id: 8, text: 'Famous person: Hassanal Bolkiah', difficulty: 8 }
  ],
  'TL': [
    { id: 1, text: 'Has a coastline of 706 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 1 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mountainous; narrow coastal plains', difficulty: 3 },
    { id: 4, text: 'Exports Coffee', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Catholic influence mixed with traditional animist beliefs', difficulty: 5 },
    { id: 6, text: 'Flag clue: The black triangle represents the colonial oppression that needs to be overcome', difficulty: 6 },
    { id: 7, text: 'Trivia: One of only two predominantly Catholic countries in Asia', difficulty: 7 },
    { id: 8, text: 'Famous person: Xanana Gusmão', difficulty: 8 }
  ],
  'MV': [
    { id: 1, text: 'Has a coastline of 644 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 0 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: 1,190 coral islands grouped in 26 atolls', difficulty: 3 },
    { id: 4, text: 'Exports Fish', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Islamic influence with traditional Dhivehi customs', difficulty: 5 },
    { id: 6, text: 'Flag clue: The crescent moon represents Islam; the green rectangle represents peace and prosperity', difficulty: 6 },
    { id: 7, text: 'Trivia: Lowest country in the world, with average ground level of 1.5 meters above sea level', difficulty: 7 },
    { id: 8, text: 'Famous person: Mohamed Nasheed', difficulty: 8 }
  ],
  'AF': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 6 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly rugged mountains; plains in north and southwest', difficulty: 3 },
    { id: 4, text: 'Exports Opium', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Pashtun tribal traditions', difficulty: 5 },
    { id: 6, text: 'Flag clue: The emblem represents a mosque with its mihrab facing Mecca', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s oldest oil paintings', difficulty: 7 },
    { id: 8, text: 'Famous person: Ahmad Shah Massoud', difficulty: 8 }
  ],
  'PK': [
    { id: 1, text: 'Has a coastline of 1,046 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Flat Indus plain in east; mountains in north and northwest; Balochistan plateau in west', difficulty: 3 },
    { id: 4, text: 'Exports Textiles', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Islamic influence with diverse regional traditions', difficulty: 5 },
    { id: 6, text: 'Flag clue: The crescent represents progress; the star represents light and knowledge', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s second-highest mountain (K2)', difficulty: 7 },
    { id: 8, text: 'Famous person: Malala Yousafzai', difficulty: 8 }
  ],
  'TJ': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Pamir and Alay Mountains dominate landscape; western Fergana Valley in northern panhandle', difficulty: 3 },
    { id: 4, text: 'Exports Aluminum', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Persian cultural influence', difficulty: 5 },
    { id: 6, text: 'Flag clue: The crown represents the Tajik people; the seven stars represent the seven historical regions', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s second-highest dam (Nurek Dam)', difficulty: 7 },
    { id: 8, text: 'Famous person: Emomali Rahmon', difficulty: 8 }
  ],
  'KG': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Entirely mountainous, dominated by the Tien Shan and Pamir mountain ranges', difficulty: 3 },
    { id: 4, text: 'Exports Gold', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong nomadic traditions with yurt dwellings', difficulty: 5 },
    { id: 6, text: 'Flag clue: The sun\'s 40 rays represent the 40 Kyrgyz tribes', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s second-largest high-altitude lake (Issyk-Kul)', difficulty: 7 },
    { id: 8, text: 'Famous person: Chingiz Aitmatov', difficulty: 8 }
  ],
  'KZ': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Vast flat steppe extending from the Volga to the Altai Mountains', difficulty: 3 },
    { id: 4, text: 'Exports Crude Petroleum', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong nomadic heritage with traditional yurt culture', difficulty: 5 },
    { id: 6, text: 'Flag clue: The sun represents wealth and abundance; the eagle represents power and sovereignty', difficulty: 6 },
    { id: 7, text: 'Trivia: The world\'s largest landlocked country', difficulty: 7 },
    { id: 8, text: 'Famous person: Nursultan Nazarbayev', difficulty: 8 }
  ],
  'UZ': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly flat-to-rolling sandy desert with dunes; broad, flat intensely irrigated river valleys', difficulty: 3 },
    { id: 4, text: 'Exports Gold', difficulty: 4 },
    { id: 5, text: 'Cultural element: Rich Islamic architecture heritage with famous madrasahs', difficulty: 5 },
    { id: 6, text: 'Flag clue: The crescent represents Islam; the twelve stars represent the months and constellations', difficulty: 6 },
    { id: 7, text: 'Trivia: One of only two doubly landlocked countries in the world', difficulty: 7 },
    { id: 8, text: 'Famous person: Islam Karimov', difficulty: 8 }
  ],
  'TM': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Flat-to-rolling sandy desert with dunes rising to mountains in south', difficulty: 3 },
    { id: 4, text: 'Exports Natural Gas', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Turkmen tribal traditions with distinctive carpet weaving', difficulty: 5 },
    { id: 6, text: 'Flag clue: The five traditional carpet designs represent the five major tribes', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the Darvaza gas crater, known as the "Door to Hell"', difficulty: 7 },
    { id: 8, text: 'Famous person: Saparmurat Niyazov', difficulty: 8 }
  ],
  'AZ': [
    { id: 1, text: 'Has a coastline of 713 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Large, flat Kur-Araz Ovaligi (Kura-Araks Lowland) with Great Caucasus Mountains to north', difficulty: 3 },
    { id: 4, text: 'Exports Crude Petroleum', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Turkic and Persian cultural influences', difficulty: 5 },
    { id: 6, text: 'Flag clue: The eight-pointed star represents the eight branches of the Turkic peoples', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s first oil well drilled in the sea', difficulty: 7 },
    { id: 8, text: 'Famous person: Ilham Aliyev', difficulty: 8 }
  ],
  'GE': [
    { id: 1, text: 'Has a coastline of 310 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly rugged and mountainous; Great Caucasus Mountains in north', difficulty: 3 },
    { id: 4, text: 'Exports Copper Ore', difficulty: 4 },
    { id: 5, text: 'Cultural element: One of the world\'s oldest wine-producing regions', difficulty: 5 },
    { id: 6, text: 'Flag clue: The five crosses represent Christ and the four evangelists', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s deepest cave (Veryovkina Cave)', difficulty: 7 },
    { id: 8, text: 'Famous person: Nino Burjanadze', difficulty: 8 }
  ],
  'AM': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Armenian Highland with mountains; little forest land; fast flowing rivers', difficulty: 3 },
    { id: 4, text: 'Exports Copper', difficulty: 4 },
    { id: 5, text: 'Cultural element: First country to adopt Christianity as its state religion', difficulty: 5 },
    { id: 6, text: 'Flag clue: The colors represent the Armenian Highland, the Armenian people\'s continued struggle for survival, and the Christian faith', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to Mount Ararat, where Noah\'s Ark is said to have landed', difficulty: 7 },
    { id: 8, text: 'Famous person: Charles Aznavour', difficulty: 8 }
  ],
  'MD': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 2 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Rolling steppe, gradual slope south to Black Sea', difficulty: 3 },
    { id: 4, text: 'Exports Wine', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Romanian cultural influence with unique Moldovan traditions', difficulty: 5 },
    { id: 6, text: 'Flag clue: The coat of arms represents the traditional symbols of Moldova', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s largest wine cellar (Cricova)', difficulty: 7 },
    { id: 8, text: 'Famous person: Nelly Ciobanu', difficulty: 8 }
  ],
  'BY': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Generally flat with marshland in the south', difficulty: 3 },
    { id: 4, text: 'Exports Potash', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Slavic traditions with unique Belarusian folk art', difficulty: 5 },
    { id: 6, text: 'Flag clue: The traditional Belarusian pattern represents the country\'s cultural heritage', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to Europe\'s largest primeval forest (Białowieża Forest)', difficulty: 7 },
    { id: 8, text: 'Famous person: Svetlana Alexievich', difficulty: 8 }
  ],
  'LT': [
    { id: 1, text: 'Has a coastline of 90 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Lowland, many scattered small lakes, fertile soil', difficulty: 3 },
    { id: 4, text: 'Exports Refined Petroleum', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Baltic traditions with unique Lithuanian folk music', difficulty: 5 },
    { id: 6, text: 'Flag clue: The colors represent the country\'s landscapes: yellow for wheat fields, green for forests, red for blood shed for independence', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the geographical center of Europe', difficulty: 7 },
    { id: 8, text: 'Famous person: Arvydas Sabonis', difficulty: 8 }
  ],
  'LV': [
    { id: 1, text: 'Has a coastline of 498 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Low plain with many lakes and wetlands', difficulty: 3 },
    { id: 4, text: 'Exports Wood', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Baltic traditions with unique Latvian folk songs', difficulty: 5 },
    { id: 6, text: 'Flag clue: The colors represent Latvian lands: red for blood shed for freedom, white for truth and honor', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s widest waterfall (Venta Rapid)', difficulty: 7 },
    { id: 8, text: 'Famous person: Mikhail Baryshnikov', difficulty: 8 }
  ],
  'EE': [
    { id: 1, text: 'Has a coastline of 3,794 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 2 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Marshy, lowlands; flat in north, hilly in south', difficulty: 3 },
    { id: 4, text: 'Exports Wood', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Baltic traditions with unique Estonian folk music', difficulty: 5 },
    { id: 6, text: 'Flag clue: The colors represent nature: blue for sky and sea, black for soil, white for snow', difficulty: 6 },
    { id: 7, text: 'Trivia: One of the most digitally advanced societies in the world', difficulty: 7 },
    { id: 8, text: 'Famous person: Arvo Pärt', difficulty: 8 }
  ],
  'SK': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Rugged mountains in central and northern part and lowlands in the south', difficulty: 3 },
    { id: 4, text: 'Exports Cars', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Slavic traditions with unique Slovak folk music', difficulty: 5 },
    { id: 6, text: 'Flag clue: The colors are traditional Slavic colors: white, blue, and red', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s highest number of castles and chateaux per capita', difficulty: 7 },
    { id: 8, text: 'Famous person: Andy Warhol', difficulty: 8 }
  ],
  'HU': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 7 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly flat to rolling plains; hills and low mountains on the Slovakian border', difficulty: 3 },
    { id: 4, text: 'Exports Cars', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Magyar traditions with unique Hungarian folk music', difficulty: 5 },
    { id: 6, text: 'Flag clue: The colors are traditional Hungarian colors: red for strength, white for faithfulness, green for hope', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s largest thermal water cave system', difficulty: 7 },
    { id: 8, text: 'Famous person: Ernő Rubik', difficulty: 8 }
  ],
  'RO': [
    { id: 1, text: 'Has a coastline of 225 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Central Transylvanian Basin is separated from the Moldavian Plateau on the east by the Carpathian Mountains', difficulty: 3 },
    { id: 4, text: 'Exports Cars', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Latin traditions with unique Romanian folk music', difficulty: 5 },
    { id: 6, text: 'Flag clue: The colors represent the three historical regions: red for Wallachia, yellow for Transylvania, blue for Moldavia', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s heaviest building (Palace of Parliament)', difficulty: 7 },
    { id: 8, text: 'Famous person: Nadia Comăneci', difficulty: 8 }
  ],
  'BG': [
    { id: 1, text: 'Has a coastline of 354 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly mountains with lowlands in north and southeast', difficulty: 3 },
    { id: 4, text: 'Exports Copper', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Slavic traditions with unique Bulgarian folk music', difficulty: 5 },
    { id: 6, text: 'Flag clue: The colors represent the traditional colors of the Bulgarian flag: white for peace, green for freedom, red for courage', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s oldest gold treasure', difficulty: 7 },
    { id: 8, text: 'Famous person: Hristo Stoichkov', difficulty: 8 }
  ],
  'HR': [
    { id: 1, text: 'Has a coastline of 5,835 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Geographically diverse; flat plains along Hungarian border, low mountains and highlands near Adriatic coastline and islands', difficulty: 3 },
    { id: 4, text: 'Exports Wood', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Mediterranean and Central European influences', difficulty: 5 },
    { id: 6, text: 'Flag clue: The red-white checkerboard pattern represents the historical coat of arms of Croatia', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s smallest town (Hum)', difficulty: 7 },
    { id: 8, text: 'Famous person: Luka Modrić', difficulty: 8 }
  ],
  'SI': [
    { id: 1, text: 'Has a coastline of 47 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Short southwestern coastal strip of Karst topography on the Adriatic; an alpine mountain region adjacent to Italy and Austria', difficulty: 3 },
    { id: 4, text: 'Exports Cars', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Alpine and Mediterranean influences', difficulty: 5 },
    { id: 6, text: 'Flag clue: The colors are traditional Slavic colors: white, blue, and red', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s oldest vine (400+ years old)', difficulty: 7 },
    { id: 8, text: 'Famous person: Melania Trump', difficulty: 8 }
  ],
  'BA': [
    { id: 1, text: 'Has a coastline of 20 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 3 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mountains and valleys', difficulty: 3 },
    { id: 4, text: 'Exports Wood', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong mix of Slavic, Ottoman, and Austro-Hungarian influences', difficulty: 5 },
    { id: 6, text: 'Flag clue: The colors represent the three main ethnic groups: blue for Bosniaks, yellow for Croats, and white for peace', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to Europe\'s last primeval forest (Perućica)', difficulty: 7 },
    { id: 8, text: 'Famous person: Ivo Andrić', difficulty: 8 }
  ],
  'RS': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 8 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Extremely varied; to the north, rich fertile plains; to the east, limestone ranges and basins; to the southeast, ancient mountains and hills', difficulty: 3 },
    { id: 4, text: 'Exports Cars', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Slavic traditions with unique Serbian folk music', difficulty: 5 },
    { id: 6, text: 'Flag clue: The colors are traditional Slavic colors: red, blue, and white', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to the world\'s largest raspberry exporter', difficulty: 7 },
    { id: 8, text: 'Famous person: Novak Đoković', difficulty: 8 }
  ],
  'ME': [
    { id: 1, text: 'Has a coastline of 293.5 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Highly indented coastline with narrow coastal plain backed by rugged high limestone mountains and plateaus', difficulty: 3 },
    { id: 4, text: 'Exports Aluminum', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Mediterranean and Slavic influences', difficulty: 5 },
    { id: 6, text: 'Flag clue: The double-headed eagle represents the unity of church and state', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to Europe\'s deepest canyon (Tara River Canyon)', difficulty: 7 },
    { id: 8, text: 'Famous person: Milo Đukanović', difficulty: 8 }
  ],
  'MK': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 5 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mountainous territory covered with deep basins and valleys', difficulty: 3 },
    { id: 4, text: 'Exports Iron', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Slavic and Ottoman influences', difficulty: 5 },
    { id: 6, text: 'Flag clue: The sun represents the "new sun of liberty" mentioned in the national anthem', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to one of the oldest observatories in the world (Kokino)', difficulty: 7 },
    { id: 8, text: 'Famous person: Goran Pandev', difficulty: 8 }
  ],
  'AL': [
    { id: 1, text: 'Has a coastline of 362 km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Mostly mountains and hills; small coastal plain', difficulty: 3 },
    { id: 4, text: 'Exports Footwear', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Mediterranean and Ottoman influences', difficulty: 5 },
    { id: 6, text: 'Flag clue: The double-headed eagle represents the sovereign state of Albania', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to Europe\'s oldest lake (Lake Ohrid)', difficulty: 7 },
    { id: 8, text: 'Famous person: Mother Teresa', difficulty: 8 }
  ],
  'XK': [
    { id: 1, text: 'Has a coastline of 0 (Landlocked) km', difficulty: 1 },
    { id: 2, text: 'Shares borders with 4 other countries', difficulty: 2 },
    { id: 3, text: 'Geography: Flat fluvial basin with an elevation of 400-700 m above sea level surrounded by several high mountain ranges', difficulty: 3 },
    { id: 4, text: 'Exports Base Metals', difficulty: 4 },
    { id: 5, text: 'Cultural element: Strong Albanian cultural influence with unique Kosovo traditions', difficulty: 5 },
    { id: 6, text: 'Flag clue: The six stars represent the six major ethnic groups', difficulty: 6 },
    { id: 7, text: 'Trivia: Home to Europe\'s youngest population', difficulty: 7 },
    { id: 8, text: 'Famous person: Rita Ora', difficulty: 8 }
  ]
};