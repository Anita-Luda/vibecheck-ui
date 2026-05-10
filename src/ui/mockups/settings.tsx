import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const SettingsMock = () => (
  <div className="max-w-4xl mx-auto space-y-12">
    <header className="space-y-2">
        <h1 className="text-3xl font-black text-[var(--color-text)]">Ustawienia Sektora</h1>
        <p className="text-[var(--color-text-muted)]">Skonfiguruj parametry runtime dla swojej instalacji VibeCheck UI.</p>
    </header>

    <div className="space-y-8">
        <section className="space-y-4">
            <h2 className="text-xl font-bold text-[var(--color-text)] border-b border-gray-200/10 pb-2">Profil Agenta</h2>
            <div className="flex items-center gap-6 p-6 bg-[var(--color-surface)] rounded-2xl border border-gray-200/10 shadow-sm">
                <div className="w-20 h-20 rounded-full bg-[var(--color-accent)] shrink-0" />
                <div className="flex-1 space-y-1">
                    <div className="font-black text-lg text-[var(--color-text)]">Piotr Hovercat</div>
                    <div className="text-sm text-[var(--color-text-muted)]">piotr@sektor7g.bulwa</div>
                </div>
                <Button id={0} >Zmień Awatar</Button>
            </div>
        </section>

        <section className="space-y-6">
            <h2 className="text-xl font-bold text-[var(--color-text)] border-b border-gray-200/10 pb-2">Preferencje Smażenia</h2>
            <Card id={1}>
                <div className="space-y-6">
                    {[
                        { label: 'Automatyczne solenie bulw', desc: 'System sam dobierze odpowiednią dawkę sodu.', checked: true },
                        { label: 'Tryb nadkrytyczny', desc: 'Zwiększa iloraz wajbu kosztem stabilności hovercatów.', checked: false },
                        { label: 'Powiadomienia o keczupie', desc: 'Otrzymuj alerty gdy poziom sosu spadnie poniżej 5%.', checked: true }
                    ].map((opt, i) => (
                        <div key={i} className="flex justify-between items-center">
                            <div>
                                <div className="font-bold text-[var(--color-text)]">{opt.label}</div>
                                <div className="text-xs text-[var(--color-text-muted)]">{opt.desc}</div>
                            </div>
                            <div className={`w-10 h-6 rounded-full p-1 transition-colors ${opt.checked ? 'bg-[var(--color-accent)]' : 'bg-gray-300'}`}>
                                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${opt.checked ? 'translate-x-4' : ''}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </section>

        <div className="flex justify-end gap-4 pt-8">
            <Button id={2} >Anuluj</Button>
            <Button id={3}>Zapisz Zmiany</Button>
        </div>
    </div>
  </div>
);
