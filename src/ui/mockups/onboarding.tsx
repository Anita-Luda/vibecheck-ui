import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const OnboardingMock = () => (
  <div className="max-w-4xl mx-auto py-20 text-center space-y-[var(--spacing-12)]">
    <div className="space-y-[var(--item-gap)]">
        <div className="w-24 h-24 bg-[var(--color-accent)] rounded-3xl mx-auto flex items-center justify-center text-4xl shadow-lg animate-bounce">
            🥔
        </div>
        <h1 className="text-5xl font-black text-[var(--color-text)] tracking-tight">Witaj w Sektorze 7G</h1>
        <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto">Zanim zaczniesz smażyć bulwy, musimy skalibrować Twój iloraz wajbu.</p>
    </div>

    <div className="grid grid-cols-3 gap-[var(--spacing-8)]">
        {[
            { step: '1', title: 'Wybierz Kolor', desc: 'Ustaw bazowy OKLCH dla swojego interfejsu.' },
            { step: '2', title: 'Zdefiniuj Role', desc: 'Dopasuj wagę komponentów (60/30/10).' },
            { step: '3', title: 'Gotuj!', desc: 'Uruchom deterministyczny runtime.' }
        ].map((item, i) => (
            <div key={i} className="space-y-[var(--item-gap)]">
                <div className="w-10 h-10 rounded-[var(--radius-full)] bg-[var(--color-support)] mx-auto flex items-center justify-center font-black text-[var(--color-text)] border border-gray-200/20 shadow-sm">
                    {item.step}
                </div>
                <h3 className="font-bold text-[var(--color-text)]">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{item.desc}</p>
            </div>
        ))}
    </div>

    <div className="pt-8">
        <Button id={0}>Rozpocznij Kalibrację</Button>
        <p className="mt-[var(--spacing-4)] text-xs text-[var(--color-text-muted)]">Masz już konto? <span className="text-[var(--color-accent)] font-bold cursor-pointer hover:underline">Zaloguj się</span></p>
    </div>
  </div>
);
