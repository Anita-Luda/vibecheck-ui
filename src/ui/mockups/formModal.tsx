import React from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const FormModalMock = () => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[200]">
    <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl animate-in zoom-in-95 duration-200 border border-gray-100">
      <header className="mb-6">
        <h2 className="text-2xl font-bold mb-1">Rejestracja Międzygalaktyczna</h2>
        <p className="text-gray-500 text-sm">Podaj swoje identyfikatory węglowe dla spisu powszechnego.</p>
      </header>

      <form className="space-y-4" onSubmit={e => e.preventDefault()}>
        <Input label="Klasyfikacja Gatunkowa" />
        <Input label="Liczba Kończyn" />
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Domowa Galaktyka</label>
            <select className="px-3 py-2 border rounded-md bg-gray-50 text-sm focus:ring-2 focus:ring-black outline-none">
                <option>Andromeda (Ta Elegancka)</option>
                <option>Droga Mleczna (Ta z Tosterami)</option>
                <option>Sombrero (Ta Stylowa)</option>
            </select>
        </div>
      </form>

      <footer className="mt-8 flex gap-3">
        <Button>Prześlij DNA</Button>
        <button className="flex-1 px-4 py-2 text-gray-400 font-bold text-xs uppercase tracking-widest hover:text-black transition-colors">
            Jestem Robotem
        </button>
      </footer>
    </div>
  </div>
);
