import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge, Avatar, Progress } from '../components/Primitives';
import { Table } from '../components/DataDisplay';

export const FintechMock = () => (
    <div className="space-y-8 max-w-7xl mx-auto p-4">
        <header className="flex justify-between items-center py-6">
            <div>
                <h1 className="text-3xl font-black tracking-tighter text-[var(--color-text-primary)]">VibeBank <span className="text-[var(--color-role-accent)]">PRO</span></h1>
                <p className="text-[10px] font-black uppercase text-[var(--color-text-muted)]">Ostatnie logowanie: 2 minuty temu z sektora 7G</p>
            </div>
            <div className="flex gap-4 items-center">
                <div className="text-right">
                    <div className="text-sm font-black text-[var(--color-text-primary)]">Krzysztof Bulwa</div>
                    <div className="text-[10px] font-bold text-green-500 uppercase">Status: Weryfikacja OK</div>
                </div>
                <Avatar src="https://i.pravatar.cc/150?u=kbulwa" />
            </div>
        </header>

        <Grid cols={3}>
            <Card id={0} className="bg-gradient-to-br from-[var(--color-role-primary)] to-[var(--color-role-primary-hover)] text-white relative overflow-hidden h-48">
                <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                <div className="relative h-full flex flex-col justify-between p-2">
                    <div className="flex justify-between items-start">
                        <span className="text-xs font-bold opacity-80 uppercase tracking-widest">Saldo Całkowite</span>
                        <span className="text-2xl font-black">VBC</span>
                    </div>
                    <div>
                        <div className="text-4xl font-black tracking-tighter">1,248,506.00 PLN</div>
                        <div className="text-xs font-bold opacity-60 mt-1">≈ 42,069.12 BTC (Wajb-Coin)</div>
                    </div>
                </div>
            </Card>

            <Card id={1} className="h-48 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-black uppercase text-[var(--color-text-muted)]">Karta Kredytowa Bulwa</span>
                    <Badge id={0}>AKTYWNA</Badge>
                </div>
                <div className="space-y-4">
                    <div className="text-xl font-mono tracking-[0.2em] font-bold">**** **** **** 7420</div>
                    <div className="flex justify-between items-end">
                        <div className="text-xs font-bold text-[var(--color-text-muted)]">Limit: 1M PLN</div>
                        <div className="w-1/2">
                            <Progress value={82} id={1} />
                        </div>
                    </div>
                </div>
            </Card>

            <Card id={2} className="h-48 border-dashed flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[var(--color-surface-raised)] transition-all">
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-[var(--color-role-neutral-border)] flex items-center justify-center text-2xl">+</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)]">Dodaj nową kartę / portfel</span>
            </Card>
        </Grid>

        <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 space-y-4">
                <h3 className="text-xl font-black text-[var(--color-text-primary)]">Ostatnie Transakcje</h3>
                <Table
                    headers={['Opis', 'Kategoria', 'Data', 'Kwota', 'Status']}
                    rows={[
                        ['Zakup Tostów Kwantowych', <Badge id={0}>EDIBLES</Badge>, 'Dziś, 14:20', <span className="font-bold">-42.00 PLN</span>, <span className="text-green-500 font-bold">✓</span>],
                        ['Przelew od Sektora 7G', <Badge id={1}>INCOME</Badge>, 'Wczoraj', <span className="font-bold text-green-500">+12,500 PLN</span>, <span className="text-green-500 font-bold">✓</span>],
                        ['Opłata za Hovercata', <Badge id={2}>TRANSPORT</Badge>, '22 Sty', <span className="font-bold">-1,248 PLN</span>, <span className="text-orange-500 font-bold">PENDING</span>],
                        ['Kasyno "Ziemniak"', <Badge id={3}>RISKY</Badge>, '21 Sty', <span className="font-bold text-red-500">-66,600 PLN</span>, <Badge id={3}>FRAUD ALERT</Badge>],
                    ]}
                />
            </div>

            <Card id={4}>
                <h3 className="text-lg font-black mb-6">Wykres Wajbu Giełdowego</h3>
                <div className="h-48 flex items-end gap-1 mb-4">
                    {[40, 60, 45, 90, 30, 70, 85, 40, 55, 100, 20, 45, 80].map((h, i) => (
                        <div key={i} className="flex-1 bg-[var(--color-role-accent)] rounded-t-sm transition-all hover:scale-110" style={{ height: `${h}%`, opacity: 0.3 + (h/100) }} />
                    ))}
                </div>
                <div className="flex justify-between items-center p-2 bg-[var(--color-surface-raised)] rounded">
                    <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase">Zmienność Sektora</span>
                    <span className="text-xs font-black text-red-500 tracking-tighter">↑ 1,24% HIGH RISK</span>
                </div>
                <Button id={3} className="w-full mt-6 bg-red-500 border-none">SPRZEDAJ WSZYSTKO</Button>
            </Card>
        </div>
    </div>
);
