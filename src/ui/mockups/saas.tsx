import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';

export const SaasMock = () => (
  <div className="max-w-6xl mx-auto space-y-12">
    {/* Navigation/Subheader */}
    <nav className="flex items-center justify-between py-4 border-b border-gray-200/10">
        <div className="flex gap-8 items-center">
            <span className="font-black text-xl text-[var(--color-text)]">VibeCloud</span>
            <div className="flex gap-6 text-sm font-bold text-[var(--color-text-muted)]">
                <span className="text-[var(--color-text)]">Dashboard</span>
                <span className="hover:text-[var(--color-text)] cursor-pointer">Infrastruktura</span>
                <span className="hover:text-[var(--color-text)] cursor-pointer">Bezpieczeństwo</span>
                <span className="hover:text-[var(--color-text)] cursor-pointer">Deployment</span>
            </div>
        </div>
        <Button id={0}>Nowy Klaster</Button>
    </nav>

    {/* Hero Area */}
    <section className="grid grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <h1 className="text-5xl font-black text-[var(--color-text)] leading-tight">Zarządzaj swoją flotą Hovercatów z chmury.</h1>
            <p className="text-xl text-[var(--color-text-muted)]">Najbardziej zaawansowana platforma do orkiestracji bulw kwantowych w sektorze 7G.</p>
            <div className="flex gap-4">
                <Button id={1}>Zacznij za darmo</Button>
                <Button id={2} variant="secondary">Dokumentacja API</Button>
            </div>
        </div>
        <Card id={0}>
            <div className="space-y-4 font-mono text-sm text-[var(--color-text)]">
                <div className="flex gap-2"><span className="text-green-500">$</span> vbc deploy --cluster potato-alpha</div>
                <div className="text-[var(--color-text-muted)]">Initializing quantum potato cluster...</div>
                <div className="text-[var(--color-text-muted)]">Status: [||||||||||||||||] 100%</div>
                <div className="text-blue-400">Success: Cluster active in Sektor 7G</div>
            </div>
        </Card>
    </section>

    {/* Features Grid */}
    <Grid cols={3}>
        {[
            { title: 'Auto-skalowanie Bulw', desc: 'Automatycznie zwiększaj liczbę bulw podczas wysokiej entropii.' },
            { title: 'Monitoring Hovercatów', desc: 'Real-time monitoring pozycji hovercatów z dokładnością do 1 piksela.' },
            { title: 'Szyfrowanie Sektora', desc: 'End-to-end encryption dla wszystkich logów smażenia.' }
        ].map((feat, i) => (
            <Card key={i} id={i+1}>
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)] mb-4" />
                <h3 className="text-xl font-bold mb-2 text-[var(--color-text)]">{feat.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{feat.desc}</p>
            </Card>
        ))}
    </Grid>

    {/* Pricing Section */}
    <section className="space-y-8 text-center">
        <h2 className="text-3xl font-black text-[var(--color-text)]">Plany Abonamentowe</h2>
        <div className="grid grid-cols-3 gap-8">
            {[
                { name: 'Developer', price: '0 PLN', features: ['1 Klaster', 'Podstawowy Wajb', 'Community Support'] },
                { name: 'Business', price: '499 PLN', features: ['10 Klastrów', 'Nadkrytyczne Smażenie', '24/7 Support'], popular: true },
                { name: 'Enterprise', price: 'Custom', features: ['Nielimitowane Bulwy', 'Dedykowany Sektor 7G', 'SLA 99.999%'] }
            ].map((plan, i) => (
                <div key={i} className={`p-8 rounded-[var(--radius-lg)] border-2 transition-all ${plan.popular ? 'border-[var(--color-accent)] scale-105 shadow-[var(--shadow-style)]' : 'border-gray-200/20'} bg-[var(--color-surface)]`}>
                    <h3 className="text-xl font-bold mb-2 text-[var(--color-text)]">{plan.name}</h3>
                    <div className="text-4xl font-black mb-6 text-[var(--color-text)]">{plan.price}</div>
                    <ul className="space-y-4 mb-8 text-sm text-[var(--color-text-muted)]">
                        {plan.features.map(f => <li key={f}>✓ {f}</li>)}
                    </ul>
                    <Button id={i} variant={plan.popular ? 'primary' : 'secondary'}>Wybierz Plan</Button>
                </div>
            ))}
        </div>
    </section>
  </div>
);
