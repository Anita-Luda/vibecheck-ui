import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge, Avatar, Spinner } from '../components/Primitives';
import { TextInput } from '../components/Input';

export const AIAppMock = () => {
    const [messages, setMessages] = React.useState([
        { role: 'assistant', text: 'Witaj w VibeGPT v0.8. Jakie absurdalne obliczenia dziś wykonamy?' },
        { role: 'user', text: 'Oblicz gęstość wajbu dla stada 100 kotów na Marsie.' }
    ]);

    return (
        <div className="flex h-[800px] border border-[var(--color-role-neutral-border)] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-bg)]">
            {/* Sidebar */}
            <aside className="w-64 border-r border-[var(--color-role-neutral-border)] bg-[var(--color-surface-raised)] p-[var(--spacing-4)] flex flex-col gap-[var(--spacing-6)]">
                <div className="font-black text-lg tracking-tighter">VibeGPT</div>
                <Button id={0} className="w-full text-xs">+ Nowa Rozmowa</Button>
                <div className="flex-1 space-y-2 overflow-y-auto">
                    {['Kot na Marsie', 'Tosty kwantowe', 'Entropia ziemniaka', 'Hovercat Logs'].map(t => (
                        <div key={t} className="p-2 text-xs font-bold text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] rounded cursor-pointer transition-colors">
                            💬 {t}
                        </div>
                    ))}
                </div>
                <div className="pt-4 border-t border-[var(--color-role-neutral-border)] flex items-center gap-[var(--spacing-2)]">
                    <Avatar size="sm" alt="Me" />
                    <span className="text-[10px] font-black uppercase">Plan: Ultra Pro</span>
                </div>
            </aside>

            {/* Main Chat Area */}
            <main className="flex-1 flex flex-col relative bg-[var(--color-surface)]">
                <header className="p-[var(--spacing-4)] border-b border-[var(--color-role-neutral-border)] flex justify-between items-center bg-[var(--color-surface-raised)]/50 backdrop-blur">
                    <div className="flex items-center gap-[var(--spacing-2)]">
                        <Badge id={1}>Model: Quantum-Cat-v4</Badge>
                        <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase">Status: Myślę...</span>
                    </div>
                    <div className="flex gap-[var(--spacing-2)]">
                        <Button id={1} className="py-1 px-3 text-[10px]">Eksport</Button>
                        <Button id={2} className="py-1 px-3 text-[10px]">Ustawienia</Button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-[var(--spacing-8)] space-y-[var(--spacing-6)]">
                    {messages.map((m, i) => (
                        <div key={i} className={`flex gap-[var(--spacing-4)] ${m.role === 'user' ? 'justify-end' : ''}`}>
                            {m.role === 'assistant' && <Avatar size="sm" alt="AI" id={1} />}
                            <div className={`max-w-[70%] p-[var(--spacing-4)] rounded-[var(--radius-base)] text-sm shadow-sm ${
                                m.role === 'user'
                                ? 'bg-[var(--color-role-accent-bg)] border border-[var(--color-role-accent-border)] text-[var(--color-text-primary)]'
                                : 'bg-[var(--color-surface-raised)] border border-[var(--color-role-neutral-border)] text-[var(--color-text-secondary)]'
                            }`}>
                                <div className="font-black text-[10px] uppercase mb-[var(--spacing-1)] opacity-50">{m.role}</div>
                                {m.text}
                                {m.role === 'assistant' && i === messages.length - 1 && (
                                    <div className="mt-[var(--spacing-4)] pt-4 border-t border-[var(--color-role-neutral-border)] flex gap-[var(--spacing-2)]">
                                        <Badge id={0}>Źródło: Sektor 7G</Badge>
                                        <Badge id={2}>Ufność: 99.9%</Badge>
                                    </div>
                                )}
                            </div>
                            {m.role === 'user' && <Avatar size="sm" alt="Me" />}
                        </div>
                    ))}
                    <div className="flex gap-[var(--spacing-4)]">
                        <Avatar size="sm" alt="AI" id={1} />
                        <div className="bg-[var(--color-surface-raised)] p-[var(--spacing-4)] rounded-[var(--radius-base)] border border-[var(--color-role-neutral-border)]">
                            <div className="flex items-center gap-[var(--spacing-2)] text-xs font-bold italic text-[var(--color-text-muted)]">
                                <Spinner id={1} /> VibeGPT analizuje trajektorie ogonów...
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-[var(--spacing-8)] bg-gradient-to-t from-[var(--color-surface)] to-transparent">
                    <div className="max-w-3xl mx-auto relative">
                        <textarea
                            className="w-full bg-[var(--color-surface-raised)] border-2 border-[var(--color-role-neutral-border)] rounded-[var(--radius-lg)] p-[var(--spacing-4)] pr-16 text-sm outline-none focus:border-[var(--color-role-accent)] transition-all resize-none shadow-xl"
                            placeholder="Zadaj pytanie o wajb..."
                            rows={3}
                        />
                        <button className="absolute right-4 bottom-4 w-10 h-10 rounded-[var(--radius-full)] bg-[var(--color-role-accent)] text-white font-bold shadow-lg hover:scale-110 transition-transform">
                            ↑
                        </button>
                        <div className="flex justify-center gap-[var(--spacing-4)] mt-[var(--spacing-2)]">
                            {['+ Plik', '+ Obraz', '+ Baza Wiedzy'].map(t => (
                                <span key={t} className="text-[10px] font-black uppercase text-[var(--color-text-muted)] cursor-pointer hover:text-[var(--color-text-primary)] transition-colors">{t}</span>
                            ))}
                        </div>
                    </div>
                    <p className="text-center text-[10px] text-[var(--color-text-muted)] mt-[var(--spacing-4)] font-bold uppercase tracking-widest">
                        VibeGPT może smażyć bulwy, zachowaj ostrożność.
                    </p>
                </div>
            </main>
        </div>
    );
};
