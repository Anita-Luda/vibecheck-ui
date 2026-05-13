import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge, Avatar } from '../components/Primitives';
import { Table } from '../components/DataDisplay';
import { TextInput, Select } from '../components/Input';
import { Toggle } from '../components/Toggle';
import { Alert } from '../components/Feedback';
import { Grid } from '../layout/Grid';

export const ComponentLibraryMock = () => (
  <div style={{ padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'var(--font-weight-bold)' }}>System Component Library</h1>
      <p style={{ color: 'var(--color-text-muted)' }}>An exhaustive overview of all interactive elements across all semantic roles and states.</p>
    </header>

    <section>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 'var(--spacing-8)', borderBottom: '2px solid var(--color-surface-raised)', paddingBottom: 'var(--spacing-2)' }}>BUTTONS & ACTIONS</h2>
      <Table
        headers={['Semantic Role', 'Default', 'Hover', 'Active', 'Disabled']}
        rows={[
          ['Dominant', <Button role="primary">Primary</Button>, <Button role="primary" forceState="hover">Hover</Button>, <Button role="primary" forceState="active">Active</Button>, <Button role="primary" disabled>Disabled</Button>],
          ['Secondary', <Button role="secondary">Secondary</Button>, <Button role="secondary" forceState="hover">Hover</Button>, <Button role="secondary" forceState="active">Active</Button>, <Button role="secondary" disabled>Disabled</Button>],
          ['Accent', <Button role="accent">Accent</Button>, <Button role="accent" forceState="hover">Hover</Button>, <Button role="accent" forceState="active">Active</Button>, <Button role="accent" disabled>Disabled</Button>],
          ['Support', <Button role="support">Support</Button>, <Button role="support" forceState="hover">Hover</Button>, <Button role="support" forceState="active">Active</Button>, <Button role="support" disabled>Disabled</Button>],
          ['Muted', <Button role="muted">Muted</Button>, <Button role="muted" forceState="hover">Hover</Button>, <Button role="muted" forceState="active">Active</Button>, <Button role="muted" disabled>Disabled</Button>],
          ['Destructive', <Button role="destructive">Destructive</Button>, <Button role="destructive" forceState="hover">Hover</Button>, <Button role="destructive" forceState="active">Active</Button>, <Button role="destructive" disabled>Disabled</Button>],
        ]}
      />
    </section>

    <section>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 'var(--spacing-8)', borderBottom: '2px solid var(--color-surface-raised)', paddingBottom: 'var(--spacing-2)' }}>INPUT CONTROLS</h2>
      <Grid cols={3}>
        <Card>
          <h3 style={{ fontSize: '0.875rem', fontWeight: 'bold', marginBottom: 'var(--spacing-4)' }}>TEXT FIELDS</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <TextInput label="Default Input" placeholder="John Doe" id={0} />
            <TextInput label="Focused State" placeholder="Focus me..." forceState="focus" id={0} />
            <TextInput label="Disabled Input" placeholder="Can't touch this" disabled id={0} />
          </div>
        </Card>
        <Card>
          <h3 style={{ fontSize: '0.875rem', fontWeight: 'bold', marginBottom: 'var(--spacing-4)' }}>SELECTION</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Select label="Select Choice" options={['Universal Option', 'Sector 7G Exclusive', 'Hovercat Recommended']} id={0} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <input type="checkbox" id="check1" defaultChecked /> <label htmlFor="check1">Enable Quantum Slicing</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <input type="radio" name="radio1" id="radio1" defaultChecked /> <label htmlFor="radio1">Option Alpha</label>
            </div>
          </div>
        </Card>
        <Card>
          <h3 style={{ fontSize: '0.875rem', fontWeight: 'bold', marginBottom: 'var(--spacing-4)' }}>SLIDERS & STATE</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Entropy Level</span>
              <span style={{ fontWeight: 'bold' }}>42%</span>
            </div>
            <input type="range" style={{ width: '100%' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Network Status</span>
              <Toggle id={0} initial={true} />
            </div>
          </div>
        </Card>
      </Grid>
    </section>

    <section>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 'var(--spacing-8)', borderBottom: '2px solid var(--color-surface-raised)', paddingBottom: 'var(--spacing-2)' }}>PRIMITIVES & FEEDBACK</h2>
      <Grid cols={2}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <h3 style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>BADGES</h3>
          <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
            <Badge role="primary">PRIMARY</Badge>
            <Badge role="secondary">SECONDARY</Badge>
            <Badge role="accent">ACCENT</Badge>
            <Badge role="support">SUPPORT</Badge>
            <Badge role="muted">MUTED</Badge>
            <Badge role="destructive">DESTRUCTIVE</Badge>
          </div>

          <h3 style={{ fontSize: '0.875rem', fontWeight: 'bold', marginTop: 'var(--spacing-4)' }}>AVATARS</h3>
          <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
            <Avatar label="A" size="sm" />
            <Avatar label="B" size="md" role="primary" />
            <Avatar label="C" size="lg" role="accent" />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <h3 style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>ALERTS</h3>
          <Alert type="info">INFO: Standard system notification.</Alert>
          <Alert type="success">SUCCESS: Operation completed.</Alert>
          <Alert type="warning">WARNING: Vibe levels unstable.</Alert>
          <Alert type="error">ERROR: Sector 7G overflow.</Alert>
        </div>
      </Grid>
    </section>

    <section>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 'var(--spacing-8)', borderBottom: '2px solid var(--color-surface-raised)', paddingBottom: 'var(--spacing-2)' }}>DATA DISPLAY</h2>
      <Table
        headers={['ID', 'Name', 'Status', 'Load', 'Manifested']}
        rows={[
          ['#001', 'Quantum Potato', <Badge role="primary">ACTIVE</Badge>, '88%', '2026-01-12'],
          ['#002', 'Hovercat Prime', <Badge role="support">IDLE</Badge>, '12%', '2026-01-10'],
          ['#003', 'Void Slicer', <Badge role="destructive">ERROR</Badge>, 'ERR', '2026-01-15'],
        ]}
      />
    </section>
  </div>
);
