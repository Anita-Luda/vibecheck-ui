import React from 'react';
import { Toggle } from '../components/Toggle';
import { Button } from '../components/Button';

export const SettingsMock = () => (
  <section className="max-w-2xl mx-auto space-y-8">
    <header>
        <h2 className="text-2xl font-bold tracking-tight">Preferencje Rekurencyjne</h2>
        <p className="text-gray-500">Dostosuj parametry swojej symulacji.</p>
    </header>
    <div className="space-y-4">
      <div className="p-5 border bg-white rounded-xl flex justify-between items-center group hover:border-black transition-colors">
        <div>
          <div className="font-semibold">Odwróć Rzeczywistość</div>
          <div className="text-xs text-gray-400">Zamień lewo z prawem w czwartym wymiarze.</div>
        </div>
        <Toggle label="" />
      </div>
      <div className="p-5 border bg-white rounded-xl flex justify-between items-center group hover:border-black transition-colors">
        <div>
          <div className="font-semibold">Agresywna Uprzejmość</div>
          <div className="text-xs text-gray-400">Interfejs będzie przepraszał po każdym kliknięciu.</div>
        </div>
        <Toggle label="" />
      </div>
      <div className="p-5 border bg-white rounded-xl flex justify-between items-center group hover:border-black transition-colors">
        <div>
          <div className="font-semibold">Iniekcja Entropii</div>
          <div className="text-xs text-gray-400">Losowo usuwaj jeden piksel co godzinę.</div>
        </div>
        <Toggle label="" />
      </div>
    </div>
    <nav className="pt-6 border-t flex gap-3">
      <Button variant="primary">Zapisz Paradygmaty</Button>
      <Button variant="secondary">Resetuj do Pustki</Button>
    </nav>
  </section>
);
