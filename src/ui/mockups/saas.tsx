import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge, Avatar, Spinner } from '../components/Primitives';
import { TextArea, TextInput, Select } from '../components/Input';
import { List } from '../components/DataDisplay';

export const SaasMock = () => (
  <div className="max-w-6xl mx-auto space-y-[var(--spacing-12)] py-[var(--spacing-12)]">
    {/* Navigation/Subheader */}
    <nav className="flex items-center justify-between py-4 border-b border-[var(--color-role-neutral-border)]">
        <div className="flex gap-[var(--spacing-8)] items-center">
            <span className="font-black text-2xl tracking-tighter text-[var(--color-text-primary)]">VibeCloud</span>
            <div className="flex gap-[var(--spacing-6)] text-sm font-bold text-[var(--color-text-muted)]">
                <span className="text-[var(--color-text-primary)]">Dashboard</span>
                <span className="hover:text-[var(--color-text-primary)] cursor-pointer transition-colors">Infrastruktura</span>
                <span className="hover:text-[var(--color-text-primary)] cursor-pointer transition-colors">Bezpieczeństwo</span>
                <span className="hover:text-[var(--color-text-primary)] cursor-pointer transition-colors">Deployment</span>
            </div>
        </div>
        <div className="flex gap-[var(--spacing-4)] items-center">
            <Avatar alt="Dev" size="sm" />
            <Button id={0}>Nowy Klaster</Button>
        </div>
    </nav>

    {/* Hero Area */}
    <section className="grid grid-cols-2 gap-[var(--spacing-12)] items-center">
        <div className="space-y-[var(--spacing-6)]">
            <div className="inline-flex items-center gap-[var(--spacing-2)] bg-[var(--color-role-support-bg)] px-3 py-1 rounded-[var(--radius-full)] border border-[var(--color-role-support-border)]">
                <Badge id={1}>NEW</Badge>
                <span className="text-[10px] font-bold text-[var(--color-role-support)] uppercase">VibeCloud v9.0 Beta</span>
            </div>
            <h1 className="text-6xl font-black text-[var(--color-text-primary)] leading-[0.9] tracking-tighter">Zarządzaj swoją flotą Hovercatów z chmury.</h1>
            <p className="text-xl text-[var(--color-text-muted)] font-medium">Najbardziej zaawansowana platforma do orkiestracji bulw kwantowych w sektorze 7G.</p>
            <div className="flex gap-[var(--spacing-4)]">
                <Button id={1} className="px-[var(--spacing-8)] py-3">Zacznij za darmo</Button>
                <Button id={2} className="px-[var(--spacing-8)] py-3 bg-transparent border-[var(--color-role-neutral-border)] text-[var(--color-text-primary)]">Dokumentacja API</Button>
            </div>
        </div>
        <Card id={0} className="font-mono p-[var(--spacing-8)] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-role-accent)] animate-pulse" />
            <div className="space-y-4 text-sm text-[var(--color-text-primary)]">
                <div className="flex gap-[var(--spacing-2)]"><span className="text-green-500 font-bold">$</span> vbc deploy --cluster potato-alpha</div>
                <div className="text-[var(--color-text-muted)] italic flex items-center gap-[var(--spacing-2)]">
                    <Spinner id={1} /> Initializing quantum potato cluster...
                </div>
                <div className="bg-[var(--color-surface-raised)] p-3 rounded border border-[var(--color-role-neutral-border)]">
                    <div className="text-[10px] text-gray-400 mb-[var(--spacing-2)]">OUTPUT LOGS:</div>
                    <div className="text-blue-400">Success: Cluster active in Sektor 7G</div>
                    <div className="text-green-400">Latency: 0.0001ms</div>
                    <div className="text-purple-400">Wibe: Super-Critical</div>
                </div>
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
            <Card key={i} id={i+1} className="hover:scale-105 transition-transform cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-role-accent-bg)] mb-[var(--spacing-6)] flex items-center justify-center text-2xl border border-[var(--color-role-accent-border)]">
                    {['🥔', '🐈', '🛡️'][i]}
                </div>
                <h3 className="text-2xl font-black mb-3 text-[var(--color-text-primary)] tracking-tight">{feat.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-medium">{feat.desc}</p>
            </Card>
        ))}
    </Grid>

    {/* Interactive Section */}
    <div className="grid grid-cols-3 gap-[var(--spacing-8)]">
        <div className="col-span-2">
            <Card id={4} className="h-full">
                <h3 className="text-xl font-black mb-[var(--spacing-6)]">Konfiguracja Sektora</h3>
                <div className="grid grid-cols-2 gap-[var(--spacing-6)]">
                    <TextInput label="Nazwa Klastra" placeholder="np. potato-alpha-7" id={1} />
                    <Select label="Region" options={['Mars Sektor 7', 'Gleba-Alpha', 'Orbita-Beta']} id={1} />
                </div>
                <TextArea label="Opis Deploymentu" placeholder="Dlaczego dziś smażymy?" id={1} />
                <Button id={0} className="mt-[var(--spacing-4)]">Deploy Now</Button>
            </Card>
        </div>
        <div className="space-y-4">
            <h3 className="text-xl font-black">Ostatnie Deploymenty</h3>
            <List items={[
                <div className="flex justify-between items-center w-full">
                    <span>potato-alpha-1</span>
                    <Badge id={0}>Success</Badge>
                </div>,
                <div className="flex justify-between items-center w-full">
                    <span>hovercat-prime</span>
                    <Badge id={1}>Running</Badge>
                </div>,
                <div className="flex justify-between items-center w-full">
                    <span>test-fryer-99</span>
                    <Badge id={2}>Failed</Badge>
                </div>
            ]} />
        </div>
    </div>
  </div>
);
