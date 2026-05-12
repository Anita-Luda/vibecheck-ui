import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge, Avatar } from '../components/Primitives';
import { Table } from '../components/DataDisplay';
import { Accordion } from '../components/Navigation';

export const MarketingMock = () => (
    <div className="bg-[var(--color-bg)]">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-12 py-6 bg-[var(--color-surface)]/80 backdrop-blur-md sticky top-0 z-50 border-b border-[var(--color-role-neutral-border)]">
            <div className="text-3xl font-black italic tracking-tighter text-[var(--color-role-accent)]">VibeOS</div>
            <div className="flex gap-[var(--spacing-12)] font-bold text-sm text-[var(--color-text-muted)]">
                <span className="text-[var(--color-text-primary)]">Funkcje</span>
                <span>Cennik</span>
                <span>Enterprise</span>
                <span>Blog</span>
            </div>
            <div className="flex gap-[var(--spacing-4)]">
                <Button id={1} className="bg-transparent border-[var(--color-role-neutral-border)] text-[var(--color-text-primary)]">Zaloguj</Button>
                <Button id={0}>Zacznij Smażyć</Button>
            </div>
        </nav>

        {/* Hero Section */}
        <section className="px-12 py-32 text-center max-w-5xl mx-auto space-y-[var(--spacing-8)]">
            <Badge id={0}>SYSTEM PERCEPCJI UI v8.0</Badge>
            <h1 className="text-8xl font-black tracking-tighter text-[var(--color-text-primary)] leading-[0.85]">
                Przestań malować,<br/>
                zacznij <span className="text-[var(--color-role-accent)]">Vajbować</span>.
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] font-medium max-w-2xl mx-auto">
                Laboratorium percepcji interfejsów dla projektantów, którzy chcą rozumieć ciężar wizualny swojej bulwy.
            </p>
            <div className="flex justify-center gap-[var(--spacing-6)] pt-4">
                <Button id={0} className="px-10 py-4 text-lg">Odkryj Sektor 7G</Button>
                <Button id={2} className="px-10 py-4 text-lg bg-transparent border-[var(--color-role-neutral-border)] text-[var(--color-text-primary)]">Obejrzyj Demo</Button>
            </div>

            {/* Logo Cloud */}
            <div className="pt-24 space-y-4">
                <p className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest">Zaufali nam liderzy entropii</p>
                <div className="flex justify-center gap-[var(--spacing-16)] opacity-30 grayscale items-center">
                    {['NASA (Potatoes)', 'Koty z Marsa', 'Sektor 7G Inc', 'Tosty.pl', 'Hovercat DAO'].map(l => (
                        <span key={l} className="text-xl font-black italic">{l}</span>
                    ))}
                </div>
            </div>
        </section>

        {/* Features / Bento Grid */}
        <section className="px-12 py-24 bg-[var(--color-surface-raised)]">
            <h2 className="text-4xl font-black text-center mb-[var(--spacing-16)] tracking-tight">System Silniejszy niż Grawitacja</h2>
            <div className="grid grid-cols-4 gap-[var(--spacing-6)] h-[600px]">
                <Card id={0} className="col-span-2 row-span-2 flex flex-col justify-end p-[var(--spacing-8)] bg-[var(--color-role-primary)] text-white">
                    <h3 className="text-4xl font-black mb-[var(--spacing-4)] leading-none">OKLCH: Czysta Percepcja</h3>
                    <p className="text-lg opacity-80">Nigdy więcej przypadkowych kolorów. Nasz silnik pilnuje Twojego wajbu w przestrzeni oklch.</p>
                </Card>
                <Card id={1} className="row-span-1 bg-[var(--color-surface)]">
                    <div className="text-4xl mb-[var(--spacing-4)]">🐈</div>
                    <h4 className="font-black text-lg">Hovercat Shield</h4>
                    <p className="text-xs text-[var(--color-text-muted)] mt-[var(--spacing-2)]">Ochrona przed spadkami nastroju w interfejsie.</p>
                </Card>
                <Card id={2} className="row-span-1 bg-[var(--color-surface)]">
                    <div className="text-4xl mb-[var(--spacing-4)]">🥔</div>
                    <h4 className="font-black text-lg">PotatOS Engine</h4>
                    <p className="text-xs text-[var(--color-text-muted)] mt-[var(--spacing-2)]">Optymalizacja pod kątem bulw wysokiej gęstości.</p>
                </Card>
                <Card id={3} className="col-span-2 row-span-1 bg-[var(--color-role-accent)] text-white flex items-center gap-[var(--spacing-8)]">
                    <div className="text-6xl font-black">42ms</div>
                    <p className="font-bold text-lg leading-tight">Szybkość reakcji Twojego systemu na zmianę wajbu.</p>
                </Card>
            </div>
        </section>

        {/* Pricing */}
        <section className="px-12 py-24 space-y-16">
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-black tracking-tight">Wybierz Swój Sektor</h2>
                <p className="text-[var(--color-text-muted)] font-bold">Transparentne ceny. Zero ukrytej entropii.</p>
            </div>
            <Grid cols={3}>
                {[
                    { name: 'Odkurzacz', price: '0', desc: 'Dla samotnych smażących bulwy w garażu.', features: ['1 Sektor', 'Podstawowe OKLCH', 'Wsparcie Gołębi'] },
                    { name: 'Hovercat', price: '42', desc: 'Dla profesjonalnych stad kotów z ambicją.', features: ['Nielimitowane Sektory', 'Pełne 60/30/10', 'Priorytetowe Smażenie'], popular: true },
                    { name: 'Galaktyka', price: '999', desc: 'Dla całych cywilizacji opartych na toście.', features: ['Własna Fizyka Kolorów', 'Dedykowany Admin Chaosu', 'Ubezpieczenie od Entropii'] }
                ].map((p, i) => (
                    <div key={p.name} className={`p-12 rounded-[var(--radius-lg)] border-2 transition-all ${p.popular ? 'border-[var(--color-role-accent)] scale-105 shadow-2xl z-10' : 'border-[var(--color-role-neutral-border)]'} bg-[var(--color-surface)] flex flex-col`}>
                        <h3 className="text-2xl font-black mb-[var(--spacing-1)]">{p.name}</h3>
                        <p className="text-xs text-[var(--color-text-muted)] mb-[var(--spacing-8)] font-bold">{p.desc}</p>
                        <div className="flex items-end gap-[var(--spacing-1)] mb-[var(--spacing-8)]">
                            <span className="text-5xl font-black">${p.price}</span>
                            <span className="text-sm text-[var(--color-text-muted)] font-bold mb-[var(--spacing-2)]">/miesięcznie</span>
                        </div>
                        <ul className="flex-1 space-y-4 mb-[var(--spacing-12)]">
                            {p.features.map(f => <li key={f} className="text-sm font-bold flex gap-[var(--spacing-2)]"><span>✓</span> {f}</li>)}
                        </ul>
                        <Button id={i} className={`w-full py-4 text-lg font-black uppercase tracking-widest ${p.popular ? '' : 'bg-transparent border-[var(--color-role-neutral-border)] text-[var(--color-text-primary)]'}`}>Wybierz Sektor</Button>
                    </div>
                ))}
            </Grid>
        </section>

        {/* FAQ Accordion */}
        <section className="max-w-3xl mx-auto px-12 py-24 space-y-[var(--spacing-12)]">
            <h2 className="text-4xl font-black text-center mb-[var(--spacing-12)]">Często Zadawane Pytania (FAQ)</h2>
            <Accordion title="Czy VibeOS smaży bulwy w czasie rzeczywistym?">
                Tak, nasz autorski silnik SMAŻ-8 wykorzystuje akcelerację sprzętową tosta, aby zapewnić zerowe opóźnienia w procesie orkiestracji bulw.
            </Accordion>
            <Accordion title="Ile Hovercatów potrzebuję do stabilnego interfejsu?">
                Minimalna zalecana liczba to 42, jednak dla systemów o wysokiej entropii zalecamy stada powyżej 100 jednostek w jednym sektorze.
            </Accordion>
            <Accordion title="Czy wspieracie Dark Mode dla kotów?">
                Oczywiście. Dark Mode w VibeOS jest w pełni percepcyjny, co oznacza, że koty widzą go tak samo dobrze jak ludzie (a nawet lepiej).
            </Accordion>
        </section>

        {/* Footer */}
        <footer className="bg-[var(--color-surface)] border-t border-[var(--color-role-neutral-border)] py-24 px-12">
            <Grid cols={4}>
                <div className="space-y-[var(--spacing-6)]">
                    <div className="text-3xl font-black italic tracking-tighter text-[var(--color-role-accent)]">VibeOS</div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-bold">
                        Pioneering the future of visual perception in Sektor 7G since 2024.
                    </p>
                </div>
                <div>
                    <h5 className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest mb-[var(--spacing-6)]">Produkt</h5>
                    <div className="space-y-4 text-sm font-bold">
                        <div>Funkcje</div>
                        <div>Cennik</div>
                        <div>API</div>
                        <div>Security</div>
                    </div>
                </div>
                <div>
                    <h5 className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest mb-[var(--spacing-6)]">Firma</h5>
                    <div className="space-y-4 text-sm font-bold">
                        <div>O nas</div>
                        <div>Kariera</div>
                        <div>Kontakt</div>
                        <div>Polityka Bulwy</div>
                    </div>
                </div>
                <div className="space-y-[var(--spacing-6)]">
                    <h5 className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest mb-[var(--spacing-6)]">Zapisz się do wajbu</h5>
                    <div className="flex gap-[var(--spacing-2)]">
                        <input className="flex-1 bg-[var(--color-surface-raised)] border border-[var(--color-role-neutral-border)] rounded-[var(--radius-base)] px-4 py-2 text-xs" placeholder="E-mail..." />
                        <Button id={0} className="px-4">→</Button>
                    </div>
                </div>
            </Grid>
            <div className="mt-[var(--spacing-2)]4 pt-8 border-t border-[var(--color-role-neutral-border)] flex justify-between items-center text-[10px] font-black uppercase text-[var(--color-text-muted)]">
                <div>© 2024 VibeOS Inc. Wszelkie prawa do wajbu zastrzeżone.</div>
                <div className="flex gap-[var(--spacing-6)]">
                    <span>Privacy</span>
                    <span>Terms</span>
                    <span>Sektor 7G Logs</span>
                </div>
            </div>
        </footer>
    </div>
);
