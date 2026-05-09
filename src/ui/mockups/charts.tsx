import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const ChartMock = () => (
  <div className="max-w-7xl mx-auto space-y-8">
    <header className="flex justify-between items-center">
        <h1 className="text-3xl font-black text-[var(--color-text)]">Centrum Analityczne Sektora 7G</h1>
        <div className="flex gap-2">
            <Button id={0} variant="secondary">Eksportuj Dane</Button>
            <Button id={1}>Odśwież</Button>
        </div>
    </header>

    <div className="grid grid-cols-2 gap-8">
        <Card id={0}>
            <h3 className="text-lg font-bold mb-6 text-[var(--color-text)]">Oscylacja Stanu Skupienia Hovercatów</h3>
            <div className="h-48 w-full flex items-end gap-1">
                {Array.from({length: 40}).map((_, i) => (
                    <div key={i} className="flex-1 bg-[var(--color-accent)] rounded-t-[1px]" style={{ height: `${Math.random() * 100}%`, opacity: 0.2 + (Math.random() * 0.8) }} />
                ))}
            </div>
        </Card>
        <Card id={1}>
            <h3 className="text-lg font-bold mb-6 text-[var(--color-text)]">Dystrybucja Bulw wg Gęstości</h3>
            <div className="flex items-center justify-center h-48">
                <div className="relative w-32 h-32 rounded-full border-[12px] border-[var(--color-support)] flex items-center justify-center">
                    <div className="absolute inset-[-12px] rounded-full border-[12px] border-[var(--color-accent)]" style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }} />
                    <span className="text-xl font-black">75%</span>
                </div>
                <div className="ml-8 space-y-2">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" /><span className="text-xs font-bold text-[var(--color-text)]">Gęste</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[var(--color-support)]" /><span className="text-xs font-bold text-[var(--color-text-muted)]">Rzadkie</span></div>
                </div>
            </div>
        </Card>
    </div>

    <Card id={2}>
        <h3 className="text-lg font-bold mb-6 text-[var(--color-text)]">Macierz Korelacji Wajbu</h3>
        <div className="grid grid-cols-10 gap-1">
            {Array.from({length: 100}).map((_, i) => (
                <div key={i} className="aspect-square rounded-sm" style={{ backgroundColor: 'var(--color-accent)', opacity: Math.random() }} />
            ))}
        </div>
    </Card>
  </div>
);
