import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge, Avatar, Progress } from '../components/Primitives';
import { Table } from '../components/DataDisplay';

export const ProductivityMock = () => (
    <div className="space-y-[var(--spacing-8)] p-[var(--spacing-4)]">
        <header className="flex justify-between items-center bg-[var(--color-surface)] p-[var(--spacing-6)] rounded-[var(--radius-lg)] border border-[var(--color-role-neutral-border)]">
            <div className="flex items-center gap-[var(--spacing-6)]">
                <h1 className="text-3xl font-black text-[var(--color-text-primary)] tracking-tighter">Smażenie Sprintu #42</h1>
                <div className="flex -space-x-2">
                    {[1,2,3,4,5].map(i => <Avatar key={i} size="sm" alt={`P${i}`} src={`https://i.pravatar.cc/150?u=${i}`} />)}
                    <div className="w-8 h-8 rounded-[var(--radius-full)] bg-[var(--color-surface-raised)] border border-[var(--color-role-neutral-border)] flex items-center justify-center text-[10px] font-bold text-[var(--color-text-muted)]">+12</div>
                </div>
            </div>
            <div className="flex gap-[var(--spacing-4)]">
                <Button id={1} className="text-xs">Widok Gantta</Button>
                <Button id={0} className="text-xs">+ Nowe Zadanie</Button>
            </div>
        </header>

        {/* Kanban Board */}
        <div className="grid grid-cols-4 gap-[var(--spacing-6)]">
            {['Do Zrobienia', 'W Trakcie Smażenia', 'Testy Smaku', 'Gotowe'].map((status, colIndex) => (
                <div key={status} className="space-y-[var(--item-gap)]">
                    <div className="flex justify-between items-center px-2">
                        <h3 className="text-xs font-black uppercase text-[var(--color-text-muted)] tracking-widest">{status}</h3>
                        <Badge id={colIndex}>{colIndex === 0 ? 8 : colIndex === 1 ? 3 : 5}</Badge>
                    </div>
                    <div className="bg-[var(--color-surface-raised)]/30 rounded-[var(--radius-lg)] p-2 space-y-[var(--item-gap)] min-h-[500px] border border-[var(--color-role-neutral-border)]">
                        {[1, 2].map(i => (
                            <Card key={i} id={colIndex === 1 ? 2 : 1} className="p-[var(--spacing-4)] shadow-sm hover:rotate-1 transition-all cursor-grab active:cursor-grabbing">
                                <div className="flex justify-between items-start mb-[var(--spacing-2)]">
                                    <Badge id={colIndex}>SPRINT-42-{i}</Badge>
                                    <Avatar size="sm" alt="Me" src={`https://i.pravatar.cc/150?u=${i+10}`} />
                                </div>
                                <h4 className="text-sm font-black text-[var(--color-text-primary)] mb-[var(--spacing-2)]">
                                    {colIndex === 0 ? 'Optymalizacja wajbu bulwy' : colIndex === 1 ? 'Analiza trajektorii hovercata' : 'Szyfrowanie sektora 7G'}
                                </h4>
                                <Progress value={colIndex === 3 ? 100 : i * 30} id={colIndex} />
                                <div className="flex justify-between items-center mt-[var(--spacing-4)]">
                                    <span className="text-[10px] text-[var(--color-text-muted)] font-bold">📅 22 Sty</span>
                                    <div className="flex gap-[var(--spacing-1)] text-[10px]">
                                        <span>💬 4</span>
                                        <span>📎 2</span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                        {colIndex === 0 && <div className="p-[var(--spacing-4)] border-2 border-dashed border-[var(--color-role-neutral-border)] rounded-[var(--radius-base)] text-center text-[10px] font-bold text-[var(--color-text-muted)] uppercase cursor-pointer hover:bg-[var(--color-surface-raised)] transition-colors">+ Dodaj Kartę</div>}
                    </div>
                </div>
            ))}
        </div>

        {/* Roadmap / Timeline Section */}
        <Card id={4}>
            <h3 className="text-xl font-black mb-[var(--spacing-6)]">Główna Roadmapa Projektu "Bulwa"</h3>
            <Table
                headers={['Faza', 'Właściciel', 'Postęp', 'Data Zakończenia', 'Status']}
                rows={[
                    ['Przygotowanie Gleby', <Avatar size="sm" alt="A" />, <Progress value={100} />, 'Zakończono', <Badge id={0}>DONE</Badge>],
                    ['Smażenie Krytyczne', <Avatar size="sm" alt="B" />, <Progress value={45} />, '15 Luty', <Badge id={1}>W TOKU</Badge>],
                    ['Eksport do Sektora 7G', <Avatar size="sm" alt="C" />, <Progress value={0} />, '30 Marzec', <Badge id={2}>PLANOWANE</Badge>],
                ]}
            />
        </Card>
    </div>
);
