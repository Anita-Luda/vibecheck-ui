import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge, Avatar } from '../components/Primitives';
import { Table } from '../components/DataDisplay';
import { TextInput, TextArea, Select } from '../components/Input';
import { Alert } from '../components/Feedback';

export const HealthcareMock = () => (
    <div className="max-w-6xl mx-auto space-y-[var(--spacing-12)] py-[var(--spacing-12)] p-[var(--spacing-4)]">
        <header className="flex justify-between items-center border-b border-[var(--color-role-neutral-border)] pb-8">
            <div className="flex items-center gap-[var(--spacing-4)]">
                <div className="w-12 h-12 bg-red-500 rounded-[var(--radius-xl)] flex items-center justify-center text-white font-black text-2xl">+</div>
                <div>
                    <h1 className="text-3xl font-black text-[var(--color-text-primary)] tracking-tighter uppercase">VibeMed <span className="font-light text-[var(--color-text-muted)]">Sektor 7G</span></h1>
                    <p className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Portal Pacjenta: Bulwa, Krzysztof</p>
                </div>
            </div>
            <div className="flex gap-[var(--spacing-4)]">
                <Button id={1} className="text-xs">Telekonsultacja LIVE</Button>
                <Button id={0} className="text-xs">Nowa Wizyta</Button>
            </div>
        </header>

        <Alert type="info">Twoje wyniki badań na obecność skrobi kwantowej są już dostępne!</Alert>

        <div className="grid grid-cols-3 gap-[var(--spacing-8)]">
            <div className="col-span-2 space-y-[var(--spacing-8)]">
                <section>
                    <h2 className="text-xl font-black mb-[var(--spacing-6)] flex items-center gap-[var(--spacing-2)] text-[var(--color-text-primary)]">
                        📅 Nadchodzące Wizyty
                    </h2>
                    <div className="space-y-4">
                        {[
                            { date: '25 Sty, 10:30', doc: 'dr Jan Bulwa', spec: 'Kardio-Tostologia', status: 'Potwierdzona' },
                            { date: '02 Lut, 15:45', doc: 'dr Anna Hover', spec: 'Neurologia Kotów', status: 'Oczekująca' }
                        ].map((viz, i) => (
                            <Card key={i} id={i} className="flex justify-between items-center p-[var(--spacing-6)] border-l-4" style={{ borderLeftColor: 'var(--color-role-accent)' }}>
                                <div className="flex items-center gap-[var(--spacing-6)]">
                                    <div className="text-center p-2 bg-[var(--color-surface-raised)] rounded w-20">
                                        <div className="text-[10px] font-black uppercase text-[var(--color-text-muted)]">{viz.date.split(' ')[1]}</div>
                                        <div className="text-xl font-black text-[var(--color-text-primary)]">{viz.date.split(' ')[0]}</div>
                                    </div>
                                    <div>
                                        <div className="font-black text-lg text-[var(--color-text-primary)]">{viz.doc}</div>
                                        <div className="text-xs font-bold text-[var(--color-text-muted)]">{viz.spec}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-[var(--spacing-6)]">
                                    <Badge id={i}>{viz.status}</Badge>
                                    <Button id={2} className="py-1 px-4 text-xs">Zmień Termin</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-black mb-[var(--spacing-6)] text-[var(--color-text-primary)]">📜 Historia Medyczna (Archiwum Smażenia)</h2>
                    <Table
                        headers={['Data', 'Badanie', 'Lekarz', 'Wynik', 'Pliki']}
                        rows={[
                            ['20 Gru 2024', 'Morfologia Bulwy', 'dr Bulwa', <Badge id={0}>NORMA</Badge>, <Button id={1} className="py-0.5 px-2 text-[10px]">PDF</Button>],
                            ['15 Lis 2024', 'RTG Tosta', 'dr Tost', <Badge id={1}>ZROZUMIAŁY</Badge>, <Button id={1} className="py-0.5 px-2 text-[10px]">PDF</Button>],
                            ['10 Paź 2024', 'Test Wajbu', 'dr Chaos', <Badge id={3}>KRYTYCZNY</Badge>, <Button id={1} className="py-0.5 px-2 text-[10px]">PDF</Button>],
                        ]}
                    />
                </section>
            </div>

            <aside className="space-y-[var(--spacing-8)]">
                <Card id={4}>
                    <h3 className="text-lg font-black mb-[var(--spacing-4)]">🩺 Wywiad Wstępny (AI Symptom Checker)</h3>
                    <div className="space-y-4">
                        <Select label="Co Cię boli?" options={['Bulwa boli', 'Ogon swędzi', 'Tost zimny', 'Inne']} id={1} />
                        <TextInput label="Poziom bólu (0-42)" type="number" id={1} />
                        <TextArea label="Opis dolegliwości" placeholder="Opisz swój wajb..." id={1} />
                        <Button id={0} className="w-full">Wyślij do Sektora 7G</Button>
                    </div>
                </Card>

                <Card id={2}>
                    <h3 className="text-lg font-black mb-[var(--spacing-4)]">💊 Aktywne Recepty</h3>
                    <div className="space-y-4">
                        {[
                            { name: 'Bulwo-Tab 500mg', dose: '1-0-1', days: 12 },
                            { name: 'Hover-Spray', dose: 'Na żądanie', days: 5 }
                        ].map((rx, i) => (
                            <div key={i} className="p-3 bg-[var(--color-surface-raised)] rounded border border-[var(--color-role-neutral-border)]">
                                <div className="flex justify-between font-bold text-sm">
                                    <span>{rx.name}</span>
                                    <span className="text-[var(--color-role-accent)]">{rx.dose}</span>
                                </div>
                                <div className="text-[10px] text-[var(--color-text-muted)] mt-[var(--spacing-1)] uppercase font-black">Zostało {rx.days} dni kuracji</div>
                            </div>
                        ))}
                        <Button id={1} className="w-full text-xs">Zamów Przedłużenie</Button>
                    </div>
                </Card>
            </aside>
        </div>
    </div>
);
