import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const MobileMock = () => (
  <div className="max-w-[375px] mx-auto bg-[var(--color-bg)] rounded-[40px] border-[8px] border-black h-[700px] overflow-hidden flex flex-col shadow-2xl relative">
    {/* Status Bar */}
    <header className="h-12 flex justify-between items-center px-8 shrink-0">
        <span className="text-xs font-bold text-[var(--color-text)]">12:45</span>
        <div className="flex gap-1.5 items-center">
            <div className="w-4 h-4 rounded-full border border-[var(--color-text)]" />
            <div className="w-5 h-3 bg-[var(--color-text)] rounded-[2px]" />
        </div>
    </header>

    <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-hide">
        {/* Profile Card */}
        <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] shadow-lg" />
            <div>
                <h2 className="text-xl font-black text-[var(--color-text)]">Piotr Bulwa</h2>
                <p className="text-xs text-[var(--color-text-muted)] font-bold uppercase tracking-widest">Premium User • Sektor 7G</p>
            </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
            <Card id={0}>
                <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase mb-1">Punkty Wajbu</div>
                <div className="text-2xl font-black text-[var(--color-text)]">1,452</div>
            </Card>
            <Card id={1}>
                <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase mb-1">Aktywne Bulwy</div>
                <div className="text-2xl font-black text-[var(--color-text)]">8</div>
            </Card>
        </div>

        {/* Action Feed */}
        <section className="space-y-4">
            <h3 className="text-sm font-black text-[var(--color-text)] uppercase tracking-widest">Ostatnie Akcje</h3>
            {[
                { title: 'Smażenie Bulwy #42', time: '2m temu', icon: '🔥' },
                { title: 'Transfer do Sektora 7G', time: '15m temu', icon: '🚀' },
                { title: 'Upgrade Hovercata', time: '1h temu', icon: '⚡' }
            ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-[var(--color-surface)] border border-gray-200/20 rounded-2xl shadow-sm">
                    <div className="text-xl">{item.icon}</div>
                    <div className="flex-1">
                        <div className="text-sm font-bold text-[var(--color-text)]">{item.title}</div>
                        <div className="text-[10px] text-[var(--color-text-muted)]">{item.time}</div>
                    </div>
                    <button className="text-[var(--color-accent)]">● ● ●</button>
                </div>
            ))}
        </section>

        {/* Promo Card */}
        <div className="p-6 bg-[var(--color-accent)] rounded-3xl text-white space-y-4 shadow-[var(--shadow-style)]">
            <h4 className="text-xl font-black leading-tight">Odbierz darmowy ketchup!</h4>
            <p className="text-xs opacity-90 leading-relaxed">Promocja ważna tylko dla mieszkańców sektora 7G przy zakupie dwóch dużych bulw.</p>
            <Button id={2} >Sprawdź Szczegóły</Button>
        </div>
    </div>

    {/* Tab Bar */}
    <nav className="h-20 bg-white/80 backdrop-blur-md border-t border-gray-100 flex justify-around items-center px-4 shrink-0">
        {['🏠', '📊', '🔔', '👤'].map((icon, i) => (
            <div key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${i === 0 ? 'bg-[var(--color-accent)] text-white' : 'text-gray-400'}`}>
                {icon}
            </div>
        ))}
    </nav>
  </div>
);
