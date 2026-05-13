import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge, Avatar, Progress, Spinner } from '../components/Primitives';
import { TextInput, Select, TextArea, Checkbox, Radio, Slider } from '../components/Input';
import { Toggle } from '../components/Toggle';
import { Alert } from '../components/Feedback';
import { Tabs } from '../components/Navigation';
import { Breadcrumbs, Pagination, Rating, DatePicker, FileUpload } from '../components/Advanced';
import { Table, List, Stat, Chart } from '../components/DataDisplay';

export const ComponentLibraryMock = () => {
    const roles = [
        { id: 0, name: 'Dominant' },
        { id: 1, name: 'Secondary' },
        { id: 2, name: 'Accent' },
        { id: 3, name: 'Support' },
        { id: 4, name: 'Muted' },
        { id: 5, name: 'Destructive' }
    ];

    const states = [
        { id: 'default', name: 'Default' },
        { id: 'hover', name: 'Hover' },
        { id: 'active', name: 'Active' },
        { id: 'disabled', name: 'Disabled' }
    ];

    return (
        <div className="space-y-[var(--spacing-16)] py-[var(--spacing-12)] px-[var(--container-padding)]">
            <header className="space-y-[var(--spacing-4)]">
                <h1 className="text-5xl font-black text-[var(--color-text-primary)] tracking-tighter">System Component Library</h1>
                <p className="text-xl text-[var(--color-text-muted)] max-w-2xl font-medium">An exhaustive overview of all interactive elements, primitives, and data visualization components across all semantic roles and states.</p>
            </header>

            {/* 1. BUTTONS & ACTIONS */}
            <section className="space-y-[var(--section-gap)]">
                <h2 className="text-2xl font-black text-[var(--color-text-primary)] border-b border-[var(--color-tone-200)] pb-[var(--spacing-4)] uppercase tracking-widest">Buttons & Actions</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-[var(--color-surface-raised)]">
                                <th className="p-[var(--card-padding)] text-[10px] font-black uppercase text-[var(--color-text-muted)]">Semantic Role</th>
                                {states.map(s => <th key={s.id} className="p-[var(--card-padding)] text-[10px] font-black uppercase text-[var(--color-text-muted)] text-center">{s.name}</th>)}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--color-tone-100)]">
                            {roles.map(role => (
                                <tr key={role.id} className="hover:bg-[var(--color-tone-50)] transition-colors">
                                    <td className="p-[var(--card-padding)]">
                                        <div className="font-bold text-sm text-[var(--color-text-primary)]">{role.name}</div>
                                        <div className="text-[10px] font-mono text-[var(--color-text-muted)]">role-id: {role.id}</div>
                                    </td>
                                    <td className="p-[var(--card-padding)] text-center"><Button id={role.id}>Button {role.id}</Button></td>
                                    <td className="p-[var(--card-padding)] text-center"><Button id={role.id} forceState="hover">Hover</Button></td>
                                    <td className="p-[var(--card-padding)] text-center"><Button id={role.id} forceState="active">Pressed</Button></td>
                                    <td className="p-[var(--card-padding)] text-center"><Button id={role.id} disabled>Disabled</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 2. FORM INPUTS */}
            <section className="space-y-[var(--section-gap)]">
                <h2 className="text-2xl font-black text-[var(--color-text-primary)] border-b border-[var(--color-tone-200)] pb-[var(--spacing-4)] uppercase tracking-widest">Input Controls</h2>
                <Grid cols={3}>
                    <Card className="flex flex-col gap-[var(--spacing-6)] h-full">
                        <h3 className="text-xs font-black uppercase text-[var(--color-text-muted)] border-b pb-2 mb-4">Text Fields</h3>
                        <TextInput label="Default Input" placeholder="John Doe" />
                        <TextInput label="Focused State" placeholder="Focus me..." forceState="focus" />
                        <TextArea label="Extended Text" placeholder="Enter long description..." />
                    </Card>

                    <Card className="flex flex-col gap-[var(--item-gap)] h-full">
                        <h3 className="text-xs font-black uppercase text-[var(--color-text-muted)] border-b pb-2 mb-4">Selection</h3>
                        <Select label="Select Choice" options={['Universal Option', 'System Override', 'Neural Link']} />
                        <div className="space-y-[var(--item-gap)]">
                            <Checkbox label="Enable Quantum Slicing" checked />
                            <Checkbox label="Auto-Hovercat Sync" />
                            <div className="pt-2 flex flex-col gap-2">
                                <Radio name="test" label="Option Alpha" checked />
                                <Radio name="test" label="Option Beta" />
                            </div>
                        </div>
                    </Card>

                    <Card className="flex flex-col gap-[var(--item-gap)] h-full">
                        <h3 className="text-xs font-black uppercase text-[var(--color-text-muted)] border-b pb-2 mb-4">Sliders & State</h3>
                        <Slider label="Entropy Level" value={42} />
                        <Slider label="Hovercat Density" value={88} />
                        <div className="flex items-center justify-between p-[var(--card-padding)] bg-[var(--color-surface-raised)] rounded-[var(--radius-base)] border">
                            <span className="text-sm font-bold">Network Status</span>
                            <Toggle label="Status" />
                        </div>
                    </Card>
                </Grid>
            </section>

            {/* 3. ADVANCED & MEDIA */}
            <section className="space-y-[var(--section-gap)]">
                <h2 className="text-2xl font-black text-[var(--color-text-primary)] border-b border-[var(--color-tone-200)] pb-[var(--spacing-4)] uppercase tracking-widest">Advanced & Media</h2>
                <Grid cols={3}>
                    <Card>
                        <DatePicker label="Project Timeline" />
                    </Card>
                    <Card>
                        <FileUpload label="Schematics Upload" />
                    </Card>
                    <Card className="flex flex-col items-center justify-center gap-[var(--item-gap)]">
                        <label className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest">Rating</label>
                        <Rating value={4} />
                    </Card>
                </Grid>
            </section>

            {/* 4. DATA & VISUALIZATION */}
            <section className="space-y-[var(--section-gap)]">
                <h2 className="text-2xl font-black text-[var(--color-text-primary)] border-b border-[var(--color-tone-200)] pb-[var(--spacing-4)] uppercase tracking-widest">Data Display</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--section-gap)]">
                    <Card>
                        <h3 className="text-xs font-black uppercase text-[var(--color-text-muted)] mb-6">Tabular Data</h3>
                        <Table
                            headers={['Node', 'Load', 'Status', 'Runtime']}
                            rows={[
                                ['Sektor-7G', '88%', <Badge id={0}>Healthy</Badge>, '14d 2h'],
                                ['Hub-Alpha', '12%', <Badge id={2}>Idle</Badge>, '242d 11h'],
                                ['Node-666', 'ERR', <Badge id={5}>Critical</Badge>, '0ms']
                            ]}
                        />
                    </Card>
                    <Card className="flex flex-col gap-[var(--item-gap)]">
                        <h3 className="text-xs font-black uppercase text-[var(--color-text-muted)] mb-2">Metrics & Stats</h3>
                        <div className="grid grid-cols-2 gap-[var(--item-gap)]">
                            <Stat label="Total Entropia" value="42.0k" trend="+12%" />
                            <Stat label="Active Hovercats" value="1,248" />
                        </div>
                        <div className="mt-auto pt-6 border-t">
                            <Chart type="bar" />
                        </div>
                    </Card>
                </div>
            </section>

            {/* 5. PRIMITIVES & FEEDBACK */}
            <section className="space-y-[var(--section-gap)]">
                <h2 className="text-2xl font-black text-[var(--color-text-primary)] border-b border-[var(--color-tone-200)] pb-[var(--spacing-4)] uppercase tracking-widest">Primitives & Feedback</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-6)]">
                    <Card className="space-y-[var(--item-gap)]">
                        <h3 className="text-[10px] font-black text-center uppercase text-[var(--color-text-muted)]">Badges</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                            {roles.map(r => <Badge key={r.id} id={r.id}>{r.name}</Badge>)}
                        </div>
                    </Card>
                    <Card className="space-y-[var(--item-gap)]">
                        <h3 className="text-[10px] font-black text-center uppercase text-[var(--color-text-muted)]">User Avatars</h3>
                        <div className="flex justify-center items-end gap-[var(--item-gap)]">
                            <Avatar size="sm" alt="A" />
                            <Avatar size="md" alt="B" />
                            <Avatar size="lg" alt="C" />
                        </div>
                    </Card>
                    <Card className="space-y-[var(--item-gap)]">
                        <h3 className="text-[10px] font-black text-center uppercase text-[var(--color-text-muted)]">Process Feed</h3>
                        <div className="flex flex-col items-center gap-[var(--item-gap)]">
                            <Spinner id={0} />
                            <Progress value={75} id={2} />
                        </div>
                    </Card>
                    <Card className="space-y-[var(--item-gap)]">
                        <h3 className="text-[10px] font-black text-center uppercase text-[var(--color-text-muted)]">Navigation Flow</h3>
                        <Breadcrumbs items={['Root', 'System', 'Kernel']} />
                        <Pagination />
                    </Card>
                </div>
            </section>

            {/* 6. MESSAGING */}
            <section className="space-y-[var(--section-gap)]">
                <h2 className="text-2xl font-black text-[var(--color-text-primary)] border-b border-[var(--color-tone-200)] pb-[var(--spacing-4)] uppercase tracking-widest">Feedback & Alerts</h2>
                <div className="space-y-[var(--item-gap)]">
                    <Alert type="info">Standard system notification for neutral updates.</Alert>
                    <Alert type="success">Operation completed with zero entropy leakage.</Alert>
                    <Alert type="warning">Warning: Hovercat density exceeds safe limits.</Alert>
                    <Alert type="error">Critical Error: Jam supply depleted in sector 7G.</Alert>
                </div>
            </section>
        </div>
    );
};
