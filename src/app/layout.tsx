import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import Providers from '../components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GeoClue',
  description: 'A geography guessing game',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-slate-900`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
} 