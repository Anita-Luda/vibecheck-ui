import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const FormModalMock = () => (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="bg-[var(--color-bg)] w-full max-w-lg rounded-[var(--radius-lg)] shadow-2xl border border-gray-200/20 overflow-hidden animate-in fade-in zoom-in duration-300">
        <header className="p-6 border-b border-gray-200/10 flex justify-between items-center bg-[var(--color-surface)]">
            <h2 className="text-xl font-black text-[var(--color-text)]">Konfiguracja Bulwy</h2>
            <button className="text-2xl text-[var(--color-text-muted)] hover:text-[var(--color-text)]">&times;</button>
        </header>

        <div className="p-8 space-y-6">
            <div className="space-y-2">
                <label className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Nazwa Bulwy</label>
                <input type="text" placeholder="Np. Kwantowa Rozkosz" className="w-full px-4 py-3 bg-black/5 border-none rounded-[var(--radius-base)] text-[var(--color-text)] outline-none focus:ring-2 ring-[var(--color-accent)] transition-all" />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Gęstość</label>
                    <select className="w-full px-4 py-3 bg-black/5 border-none rounded-[var(--radius-base)] text-[var(--color-text)] outline-none focus:ring-2 ring-[var(--color-accent)] transition-all appearance-none">
                        <option>Niska</option>
                        <option>Średnia</option>
                        <option>Wysoka</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Sektor</label>
                    <input type="number" defaultValue="7" className="w-full px-4 py-3 bg-black/5 border-none rounded-[var(--radius-base)] text-[var(--color-text)] outline-none focus:ring-2 ring-[var(--color-accent)] transition-all" />
                </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <span className="text-2xl">⚠️</span>
                <p className="text-xs text-yellow-600 font-medium">Ustawienie zbyt wysokiej gęstości może spowodować kolaps hovercata.</p>
            </div>
        </div>

        <footer className="p-6 border-t border-gray-200/10 bg-[var(--color-surface)] flex justify-end gap-3">
            <Button id={0} variant="secondary">Anuluj</Button>
            <Button id={1}>Zatwierdź</Button>
        </footer>
    </div>
  </div>
);
