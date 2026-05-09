import React from 'react';
import { Navbar } from '../components/Navbar';

export const Shell = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-[var(--color-bg)] flex flex-col font-[var(--font-family)]">
    <Navbar />
    <main className="flex-1 p-8">
      {children}
    </main>
  </div>
);
