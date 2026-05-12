import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge, Avatar, Progress, Spinner } from '../components/Primitives';
import { TextInput, Select, TextArea } from '../components/Input';
import { Toggle } from '../components/Toggle';
import { Alert } from '../components/Feedback';
import { Tabs } from '../components/Navigation';

export const ComponentLibraryMock = () => {
    const roles = [
        { id: 0, name: 'Dominant' },
        { id: 1, name: 'Secondary' },
        { id: 2, name: 'Accent' },
        { id: 3, name: 'Support' }
    ];

    const states = [
        { id: 'default', name: 'Default' },
        { id: 'hover', name: 'Hover' },
        { id: 'active', name: 'Active' }
    ];

    return (
        <div className="space-y-16 py-12">
            <header className="space-y-2">
                <h1 className="text-4xl font-black text-[var(--color-text-primary)]">Biblioteka Komponentów</h1>
                <p className="text-[var(--color-text-muted)] font-medium">Przegląd wszystkich elementów interfejsu w różnych stanach i rolach.</p>
            </header>

            {/* BUTTONS */}
            <section className="space-y-8">
                <h2 className="text-2xl font-black text-[var(--color-text-primary)] border-b border-[var(--color-role-neutral-border)] pb-2">Przyciski (Buttons)</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-4 text-xs font-black uppercase text-[var(--color-text-muted)]">Rola / Stan</th>
                                {states.map(s => <th key={s.id} className="p-4 text-xs font-black uppercase text-[var(--color-text-muted)]">{s.name}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {roles.map(role => (
                                <tr key={role.id} className="border-t border-[var(--color-role-neutral-border)]">
                                    <td className="p-4">
                                        <div className="font-bold text-sm text-[var(--color-text-primary)]">{role.name}</div>
                                        <div className="text-[10px] text-[var(--color-text-muted)]">Role ID: {role.id}</div>
                                    </td>
                                    <td className="p-4"><Button id={role.id}>Kliknij mnie</Button></td>
                                    <td className="p-4"><Button id={role.id} forceState="hover">Hover State</Button></td>
                                    <td className="p-4"><Button id={role.id} forceState="active">Active State</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* INPUTS */}
            <section className="space-y-8">
                <h2 className="text-2xl font-black text-[var(--color-text-primary)] border-b border-[var(--color-role-neutral-border)] pb-2">Pola Wyboru (Inputs)</h2>
                <Grid cols={2}>
                    <Card>
                        <h3 className="text-sm font-black mb-6 uppercase text-[var(--color-text-muted)]">Text Input States</h3>
                        <div className="space-y-6">
                            <TextInput label="Default" placeholder="Wpisz coś..." />
                            <TextInput label="Focused (Simulated)" placeholder="Jestem aktywny" forceState="focus" />
                            <TextInput label="With Value" placeholder="Wpisz coś..." id={0} />
                        </div>
                    </Card>
                    <Card>
                        <h3 className="text-sm font-black mb-6 uppercase text-[var(--color-text-muted)]">Selection & Area</h3>
                        <div className="space-y-6">
                            <Select label="Select Menu" options={['Opcja 1', 'Opcja 2', 'Opcja Absurdalna']} />
                            <TextArea label="Text Area" placeholder="Dłuższa treść bulwowa..." />
                            <div className="flex items-center justify-between p-4 bg-[var(--color-surface-raised)] rounded-[var(--radius-base)]">
                                <span className="text-sm font-bold text-[var(--color-text-primary)]">Przełącznik (Toggle)</span>
                                <Toggle label="Status" />
                            </div>
                        </div>
                    </Card>
                </Grid>
            </section>

            {/* PRIMITIVES */}
            <section className="space-y-8">
                <h2 className="text-2xl font-black text-[var(--color-text-primary)] border-b border-[var(--color-role-neutral-border)] pb-2">Prymitywy (Primitives)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="space-y-4">
                        <h3 className="text-xs font-black uppercase text-[var(--color-text-muted)]">Badges</h3>
                        <div className="flex flex-wrap gap-2">
                            {roles.map(r => <Badge key={r.id} id={r.id}>{r.name}</Badge>)}
                        </div>
                    </Card>
                    <Card className="space-y-4">
                        <h3 className="text-xs font-black uppercase text-[var(--color-text-muted)]">Avatars</h3>
                        <div className="flex items-end gap-4">
                            <Avatar size="sm" alt="Small" />
                            <Avatar size="md" alt="Medium" />
                            <Avatar size="lg" alt="Large" />
                        </div>
                    </Card>
                    <Card className="space-y-4">
                        <h3 className="text-xs font-black uppercase text-[var(--color-text-muted)]">Feedback</h3>
                        <div className="flex items-center gap-6">
                            <Spinner id={0} />
                            <Spinner id={2} />
                            <Progress value={65} id={0} />
                        </div>
                    </Card>
                </div>
            </section>

            {/* CARDS & CONTAINERS */}
            <section className="space-y-8">
                <h2 className="text-2xl font-black text-[var(--color-text-primary)] border-b border-[var(--color-role-neutral-border)] pb-2">Kontenery (Containers)</h2>
                <Grid cols={3}>
                    <Card>
                        <h3 className="font-black mb-2 text-[var(--color-text-primary)]">Standard Card</h3>
                        <p className="text-sm text-[var(--color-text-muted)]">Podstawowy kontener używany w całym systemie.</p>
                    </Card>
                    <Card id={2}>
                        <h3 className="font-black mb-2 text-[var(--color-text-primary)]">Accent Card</h3>
                        <p className="text-sm text-[var(--color-text-muted)]">Kontener z borderem w kolorze akcentu.</p>
                    </Card>
                    <Card className="bg-[var(--color-surface-raised)] border-dashed">
                        <h3 className="font-black mb-2 text-[var(--color-text-primary)]">Dashed Container</h3>
                        <p className="text-sm text-[var(--color-text-muted)]">Używany do obszarów typu drop-zone lub placeholderów.</p>
                    </Card>
                </Grid>
            </section>

            {/* FEEDBACK */}
            <section className="space-y-8">
                <h2 className="text-2xl font-black text-[var(--color-text-primary)] border-b border-[var(--color-role-neutral-border)] pb-2">Komunikaty (Feedback)</h2>
                <div className="space-y-4">
                    <Alert type="info">To jest informacja systemowa o stanie bulw.</Alert>
                    <Alert type="success">Sukces! Hovercaty zostały pomyślnie zsynchronizowane.</Alert>
                    <Alert type="warning">Uwaga: Poziom entropii zbliża się do wartości krytycznej.</Alert>
                    <Alert type="error">Błąd krytyczny: Wykryto brak dżemu w sektorze 7G.</Alert>
                </div>
            </section>
        </div>
    );
};
