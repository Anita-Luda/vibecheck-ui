import React from 'react';
import { Button } from '../components/Button';

export const MobileMock = () => (
  <div className="w-[375px] h-[667px] bg-[var(--color-bg)] border-[12px] border-black rounded-[40px] overflow-hidden flex flex-col shadow-2xl mx-auto">
    <header className="h-6 flex justify-between px-8 items-center pt-2">
      <span className="text-[10px] font-bold">9:41</span>
      <div className="flex gap-1">
        <div className="w-3 h-3 bg-black rounded-full"></div>
      </div>
    </header>
    <main className="flex-1 p-6 flex flex-col justify-center items-center gap-6 text-center">
        <div className="w-24 h-24 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-4xl border-2">🛸</div>
        <h2 className="text-2xl font-bold">Prośba o Uprowadzenie Oczekuje</h2>
        <p className="text-gray-500 text-sm">Czekaj na inicjalizację wiązki ściągającej. Nie opieraj się blaskowi.</p>
        <Button>Anuluj Ekstrakcję</Button>
    </main>
    <nav className="h-12 border-t flex justify-around items-center bg-white/50">
        <span>🏠</span><span>📡</span><span>👤</span>
    </nav>
  </div>
);
