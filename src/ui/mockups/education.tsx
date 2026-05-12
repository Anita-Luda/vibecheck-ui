import React from 'react';
import { Card } from '../components/Card';
import { Grid } from '../layout/Grid';
import { Badge, Avatar, Progress } from '../components/Primitives';
import { Button } from '../components/Button';
import { List } from '../components/DataDisplay';

export const EducationMock = () => (
    <div className="max-w-7xl mx-auto space-y-[var(--spacing-12)] py-[var(--spacing-12)] p-[var(--spacing-4)]">
        <header className="flex justify-between items-center border-b-2 border-[var(--color-role-neutral-border)] pb-6">
            <div className="flex items-center gap-[var(--spacing-6)]">
                <div className="text-4xl font-black italic tracking-tighter text-[var(--color-text-primary)]">VibeAcademy</div>
                <div className="h-8 w-px bg-[var(--color-role-neutral-border)]" />
                <div className="text-xs font-black uppercase text-[var(--color-text-muted)] flex gap-[var(--spacing-4)]">
                    <span className="text-[var(--color-role-accent)]">Moje Kursy</span>
                    <span>Wyzwania Sektora</span>
                    <span>Biblioteka Bulw</span>
                </div>
            </div>
            <div className="flex gap-[var(--spacing-4)] items-center">
                <div className="text-right">
                    <div className="text-xs font-black text-[var(--color-text-primary)]">Poziom: 42 (Arcymag Bulw)</div>
                    <Progress value={85} id={0} />
                </div>
                <Avatar alt="Student" src="https://i.pravatar.cc/150?u=student" />
            </div>
        </header>

        <div className="grid grid-cols-4 gap-[var(--spacing-8)]">
            <aside className="space-y-[var(--spacing-8)]">
                <section>
                    <h3 className="text-xs font-black uppercase text-[var(--color-text-muted)] tracking-widest mb-[var(--spacing-4)]">Twój Postęp</h3>
                    <div className="space-y-4">
                        <Card id={0} className="p-[var(--spacing-4)] bg-[var(--color-role-primary-bg)] border-[var(--color-role-primary-border)]">
                            <div className="text-2xl font-black text-[var(--color-role-primary)]">156h</div>
                            <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase">Nauki Smażenia</div>
                        </Card>
                        <Card id={1} className="p-[var(--spacing-4)] bg-[var(--color-role-accent-bg)] border-[var(--color-role-accent-border)]">
                            <div className="text-2xl font-black text-[var(--color-role-accent)]">42</div>
                            <div className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase">Zdobyte Odznaki</div>
                        </Card>
                    </div>
                </section>

                <section>
                    <h3 className="text-xs font-black uppercase text-[var(--color-text-muted)] tracking-widest mb-[var(--spacing-4)]">Następna Lekcja</h3>
                    <Card id={4} className="p-0 overflow-hidden">
                        <div className="aspect-video bg-[var(--color-surface-raised)] flex items-center justify-center text-4xl">🎥</div>
                        <div className="p-[var(--spacing-4)]">
                            <div className="text-xs font-black text-[var(--color-role-accent)] mb-[var(--spacing-1)]">LEKCJA 7</div>
                            <h4 className="font-bold text-sm text-[var(--color-text-primary)] mb-[var(--spacing-4)]">Zaawansowana orkiestracja ogonów kotów</h4>
                            <Button id={0} className="w-full text-[10px]">Kontynuuj Naukę</Button>
                        </div>
                    </Card>
                </section>
            </aside>

            <main className="col-span-3 space-y-[var(--spacing-8)]">
                <section>
                    <h2 className="text-2xl font-black mb-[var(--spacing-6)] text-[var(--color-text-primary)]">Twoje Aktywne Kursy</h2>
                    <Grid cols={2}>
                        {[
                            { title: 'Podstawy Entropii Ziemniaczanej', prof: 'dr Smażona', progress: 100, tag: 'Ukończono' },
                            { title: 'Cyber-Hovercaty dla Opornych', prof: 'prof. Kot', progress: 42, tag: 'W toku' },
                            { title: 'Teoria Strun (Serowych)', prof: 'mgr Tost', progress: 15, tag: 'W toku' },
                            { title: 'Sektor 7G: Przewodnik Przetrwania', prof: 'Chaos Admin', progress: 0, tag: 'Nowy' }
                        ].map((course, i) => (
                            <Card key={i} id={i%4} className="flex gap-[var(--spacing-4)] p-[var(--spacing-4)] hover:scale-[1.02] transition-transform cursor-pointer">
                                <div className="w-24 h-24 rounded-[var(--radius-base)] bg-[var(--color-surface-raised)] flex items-center justify-center text-4xl border border-[var(--color-role-neutral-border)]">
                                    {['🥔', '🐈', '🧀', '🚀'][i]}
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-[var(--spacing-1)]">
                                            <h4 className="font-black text-lg text-[var(--color-text-primary)] tracking-tight leading-tight">{course.title}</h4>
                                            <Badge id={i%4}>{course.tag}</Badge>
                                        </div>
                                        <p className="text-xs text-[var(--color-text-muted)] font-bold italic">prowadzący: {course.prof}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-[10px] font-black uppercase text-[var(--color-text-muted)]">
                                            <span>Postęp</span>
                                            <span>{course.progress}%</span>
                                        </div>
                                        <Progress value={course.progress} id={i%4} />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </Grid>
                </section>

                <section className="grid grid-cols-2 gap-[var(--spacing-8)]">
                    <div>
                        <h3 className="text-xl font-black mb-[var(--spacing-4)]">🏆 Ostatnie Odznaki</h3>
                        <div className="flex flex-wrap gap-[var(--spacing-4)]">
                            {['🎖️ Master Fryer', '🥇 Cat Whisperer', '🥉 Entropy Junior', '🥈 Space Cadet'].map((badge, i) => (
                                <div key={i} className="flex flex-col items-center gap-[var(--spacing-2)] group">
                                    <div className="w-16 h-16 rounded-[var(--radius-full)] bg-[var(--color-surface-raised)] border-2 border-[var(--color-role-accent)] flex items-center justify-center text-2xl group-hover:scale-125 transition-transform shadow-lg">
                                        {badge.split(' ')[0]}
                                    </div>
                                    <span className="text-[10px] font-black uppercase text-[var(--color-text-muted)]">{badge.split(' ').slice(1).join(' ')}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-black mb-[var(--spacing-4)]">💬 Forum Sektora</h3>
                        <List items={[
                            <div className="flex gap-[var(--spacing-3)]">
                                <Avatar size="sm" alt="U1" />
                                <div>
                                    <div className="text-xs font-black">Jak usmażyć bulwę kwantową bez wybuchu?</div>
                                    <div className="text-[10px] text-[var(--color-text-muted)]">Ostatnia odpowiedź: 2m temu</div>
                                </div>
                            </div>,
                            <div className="flex gap-[var(--spacing-3)]">
                                <Avatar size="sm" alt="U2" />
                                <div>
                                    <div className="text-xs font-black">Mój hovercat przestał lewitować :(</div>
                                    <div className="text-[10px] text-[var(--color-text-muted)]">Ostatnia odpowiedź: 15m temu</div>
                                </div>
                            </div>
                        ]} />
                    </div>
                </section>
            </main>
        </div>
    </div>
);
