import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const OnboardingMock = () => (
  <section className="max-w-2xl mx-auto space-y-12 py-12">
    <header className="text-center space-y-4">
      <div className="w-20 h-20 bg-[var(--color-accent)] rounded-3xl mx-auto flex items-center justify-center text-4xl shadow-lg">🚀</div>
      <h1 className="text-4xl font-bold tracking-tight">Witaj w Programie Kolonizacji Marsa</h1>
      <p className="text-gray-500">Twój bilet w jedną stronę do czerwonej pustki.</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "Krok 1: Hibernacja", desc: "Zamrażamy Cię na 6 miesięcy. Może boleć.", icon: "❄️" },
        { title: "Krok 2: Trening", desc: "Naucz się jeść ziemniaki z pyłu.", icon: "🥔" },
        { title: "Krok 3: Start", desc: "Wsiadaj do puszki i leć w próżnię.", icon: "🔥" }
      ].map((step, i) => (
        <Card key={i}>
          <div className="text-2xl mb-2">{step.icon}</div>
          <h3 className="font-bold text-sm mb-1">{step.title}</h3>
          <p className="text-xs text-gray-400">{step.desc}</p>
        </Card>
      ))}
    </div>

    <div className="space-y-4 border-t pt-8">
        <h3 className="font-bold">Twoje Dane Paszportowe</h3>
        <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-50 uppercase text-[10px] font-bold text-gray-400">
                <tr>
                    <th className="p-3 border">Cecha</th>
                    <th className="p-3 border">Wartość</th>
                    <th className="p-3 border">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="p-3 border font-medium">Odporność na G</td>
                    <td className="p-3 border font-mono">9.81 m/s²</td>
                    <td className="p-3 border text-green-500 font-bold">OK</td>
                </tr>
                <tr>
                    <td className="p-3 border font-medium">Poziom Entuzjazmu</td>
                    <td className="p-3 border font-mono">Ekstremalny</td>
                    <td className="p-3 border text-orange-500 font-bold">PODEJRZANY</td>
                </tr>
            </tbody>
        </table>
    </div>

    <footer className="flex justify-center gap-4">
      <Button>Zgadzam się na wszystko</Button>
      <button className="text-gray-400 text-sm hover:text-black">Gdzie jest wyjście?</button>
    </footer>

    {/* Toast Simulation */}
    <div className="fixed bottom-8 right-8 animate-bounce">
        <div className="bg-black text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3">
            <span className="text-yellow-400">⚠️</span>
            <span className="text-xs font-bold uppercase tracking-widest">Wykryto brak tlenu! Ale spokojnie.</span>
        </div>
    </div>
  </section>
);
