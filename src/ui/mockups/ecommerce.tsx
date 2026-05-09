import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const EcommerceMock = () => (
  <section className="space-y-8">
    <header className="flex justify-between items-end border-b pb-4">
      <h1 className="text-3xl font-black italic uppercase">Bazar Cyber-Owoców</h1>
      <div className="text-xl">Koszyk: 🛒 (3)</div>
    </header>
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[1,2,3,4].map(i => (
        <Card key={i}>
          <div className="aspect-square bg-gray-100 mb-4 rounded flex items-center justify-center text-4xl shadow-inner">
            {['🍎', '🍊', '🍌', '🥝'][i-1]}
          </div>
          <h3 className="font-bold">Neonowe {['Jabłko', 'Pomarańcza', 'Banan', 'Kiwi'][i-1]}</h3>
          <p className="text-xs text-gray-400 mb-4">Świeci w ciemności. Smakuje jak szum radiowy.</p>
          <Button>Dodaj do Pustki</Button>
        </Card>
      ))}
    </main>
    <footer className="text-center text-[10px] text-gray-400 pt-8">
        © 2024 Międzygalaktyczna Spółdzielnia Owocowa
    </footer>
  </section>
);
