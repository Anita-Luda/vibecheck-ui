import React from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const SaasMock = () => (
  <div className="flex h-full gap-8 bg-gray-50 p-4 rounded-2xl">
    <aside className="w-64 bg-gray-900 text-white p-6 rounded-xl flex flex-col gap-4 shadow-lg">
      <div className="font-bold border-b border-gray-700 pb-4 tracking-tighter">VOID OS v0.1</div>
      <nav className="flex-1 space-y-2 text-sm">
        {['Krzyki', 'Szepty', 'Logika Pustki', 'Ciemna Materia'].map(m => (
          <div key={m} className="p-2 hover:bg-gray-800 rounded cursor-pointer transition-colors">{m}</div>
        ))}
      </nav>
    </aside>
    <main className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold mb-6">Utwórz Nową Osobliwość</h2>
      <form className="max-w-md space-y-4" onSubmit={e => e.preventDefault()}>
        <Input label="Nazwa Osobliwości" />
        <Input label="Promień Horyzontu Zdarzeń" />
        <Button>Zapadnij Wszechświat</Button>
      </form>
    </main>
  </div>
);
