import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge, Avatar } from '../components/Primitives';
import { Table } from '../components/DataDisplay';

export const EnterpriseMock = () => (
    <div className="flex h-[800px] border border-[var(--color-role-neutral-border)] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-bg)]">
        {/* Sidebar Nav */}
        <aside className="w-16 hover:w-64 transition-all group border-r border-[var(--color-role-neutral-border)] bg-[var(--color-surface-raised)] flex flex-col p-[var(--spacing-4)] z-20">
            <div className="w-8 h-8 bg-[var(--color-role-accent)] rounded-[var(--radius-lg)] mb-[var(--spacing-12)] flex-shrink-0" />
            <div className="flex-1 space-y-[var(--spacing-8)] overflow-hidden">
                {[
                    { i: '🏠', l: 'Dashboard' },
                    { i: '🏢', l: 'Struktura Org' },
                    { i: '🔐', l: 'Uprawnienia' },
                    { i: '📊', l: 'Compliance' },
                    { i: '📄', l: 'Audyt' },
                    { i: '⚙️', l: 'Ustawienia' }
                ].map(item => (
                    <div key={item.l} className="flex items-center gap-[var(--spacing-4)] cursor-pointer hover:text-[var(--color-role-accent)] transition-colors whitespace-nowrap">
                        <span className="text-xl">{item.i}</span>
                        <span className="text-xs font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">{item.l}</span>
                    </div>
                ))}
            </div>
            <Avatar size="sm" alt="Corp" />
        </aside>

        {/* Content Area */}
        <main className="flex-1 flex flex-col overflow-hidden bg-[var(--color-surface)]">
            <header className="h-16 border-b border-[var(--color-role-neutral-border)] px-[var(--spacing-8)] flex items-center justify-between bg-white/50 backdrop-blur">
                <div className="flex items-center gap-[var(--spacing-4)]">
                    <span className="font-black text-xs uppercase text-[var(--color-text-muted)]">Sektor 7G Enterprise</span>
                    <Badge id={1}>ADMIN VIEW</Badge>
                </div>
                <div className="flex gap-[var(--spacing-4)]">
                    <div className="flex items-center gap-[var(--spacing-2)] px-3 py-1 bg-[var(--color-surface-raised)] rounded-[var(--radius-full)] border border-[var(--color-role-neutral-border)]">
                        <div className="w-2 h-2 bg-green-500 rounded-[var(--radius-full)] animate-pulse" />
                        <span className="text-[10px] font-bold">SYSTEM STABILNY</span>
                    </div>
                    <Button id={0} className="py-1 px-3 text-[10px]">LOGOUT</Button>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-[var(--spacing-8)] space-y-[var(--spacing-8)]">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-black tracking-tighter">Zarządzanie Uprawnieniami</h1>
                        <p className="text-xs text-[var(--color-text-muted)] font-bold uppercase mt-[var(--spacing-1)] tracking-widest">Macierz ról i dostępów globalnych</p>
                    </div>
                    <div className="flex gap-[var(--spacing-2)]">
                        <Button id={1} className="text-[10px]">EKSPORTUJ AUDYT</Button>
                        <Button id={0} className="text-[10px]">DODAJ ROLĘ</Button>
                    </div>
                </div>

                {/* Permission Matrix */}
                <Card id={0} className="p-0 overflow-hidden">
                    <Table
                        headers={['Rola / Funkcja', 'Smażenie Bulw', 'Dostęp do Marsa', 'Logi Sektora', 'Zarządzanie Kotami', 'Status']}
                        rows={[
                            ['Super Admin Chaosu', '✅ FULL', '✅ FULL', '✅ FULL', '✅ FULL', <Badge id={0}>AKTYWNA</Badge>],
                            ['Inżynier Entropii', '✅ READ/WRITE', '❌ BRAK', '✅ READ', '✅ READ/WRITE', <Badge id={0}>AKTYWNA</Badge>],
                            ['Młodszy Smażacz', '✅ READ', '❌ BRAK', '❌ BRAK', '❌ BRAK', <Badge id={1}>OCZEKUJĄCA</Badge>],
                            ['Gość (Gołąb)', '❌ BRAK', '❌ BRAK', '❌ BRAK', '❌ BRAK', <Badge id={2}>ZABLOKOWANA</Badge>],
                            ['System (AI)', '✅ AUTO', '✅ FULL', '✅ FULL', '✅ AUTO', <Badge id={3}>KRYTYCZNA</Badge>],
                        ]}
                    />
                </Card>

                <Grid cols={2}>
                    {/* Org Tree Visualization */}
                    <Card id={4}>
                        <h3 className="text-lg font-black mb-[var(--spacing-6)] flex justify-between items-center">
                            🏢 Struktura Organizacyjna
                            <span className="text-[10px] font-bold text-blue-500 cursor-pointer">EDYTUJ</span>
                        </h3>
                        <div className="space-y-4">
                            <div className="p-[var(--spacing-4)] border-2 border-[var(--color-role-primary)] rounded-[var(--radius-base)] text-center relative">
                                <span className="font-black text-sm uppercase">Zarząd Sektora 7G</span>
                                <div className="absolute -bottom-4 left-1/2 w-0.5 h-4 bg-[var(--color-role-neutral-border)]" />
                            </div>
                            <div className="flex gap-[var(--spacing-4)] pt-4">
                                <div className="flex-1 p-3 bg-[var(--color-surface-raised)] border border-[var(--color-role-neutral-border)] rounded text-center text-xs font-bold">Dział Smażenia</div>
                                <div className="flex-1 p-3 bg-[var(--color-surface-raised)] border border-[var(--color-role-neutral-border)] rounded text-center text-xs font-bold">Logistyka Kotów</div>
                            </div>
                        </div>
                    </Card>

                    {/* Audit Logs */}
                    <Card id={2}>
                        <h3 className="text-lg font-black mb-[var(--spacing-6)]">📄 Ostatnie Akcje (Audyt)</h3>
                        <div className="space-y-3">
                            {[
                                { user: 'Admin', action: 'Zmienił uprawnienia roli: Inżynier', time: '2m temu' },
                                { user: 'System-AI', action: 'Zablokował dostęp: Gość (Gołąb)', time: '15m temu' },
                                { user: 'Jan Bulwa', action: 'Wyeksportował raport skrobi', time: '1h temu' },
                                { user: 'Hover-Bot', action: 'Zainicjował procedurę czyszczenia', time: '3h temu' }
                            ].map((log, i) => (
                                <div key={i} className="flex justify-between items-center text-[10px] pb-2 border-b border-[var(--color-role-neutral-border)] last:border-0">
                                    <div className="flex gap-[var(--spacing-2)] font-bold">
                                        <span className="text-[var(--color-role-accent)] uppercase">{log.user}:</span>
                                        <span className="text-[var(--color-text-secondary)]">{log.action}</span>
                                    </div>
                                    <span className="text-gray-400 italic">{log.time}</span>
                                </div>
                            ))}
                        </div>
                        <Button id={1} className="w-full mt-[var(--spacing-6)] text-[10px] bg-transparent border-[var(--color-role-neutral-border)] text-[var(--color-text-primary)]">ZOBACZ PEŁNY AUDYT</Button>
                    </Card>
                </Grid>
            </div>
        </main>
    </div>
);
