import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge, Avatar } from '../components/Primitives';
import { Table } from '../components/DataDisplay';

export const ProductivityMock = () => (
  <div style={{ padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'var(--font-weight-bold)' }}>Project: Deep Toast</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>Sprint 42 - Hive Mind Sync</p>
      </div>
      <div style={{ display: 'flex', gap: 'var(--item-gap)' }}>
        <Button role="primary">New Task</Button>
      </div>
    </header>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--section-gap)' }}>
      {[
        { title: 'To Do', tasks: ['Sync Potato', 'Stabilize Cat', 'Clean Singularity'] },
        { title: 'In Progress', tasks: ['Mining Dark Matter', 'Browning Sourdough'] },
        { title: 'Done', tasks: ['Wake Up', 'Manifest Vibe'] },
      ].map((col, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <h3 style={{ fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>{col.title}</h3>
          {col.tasks.map((task, j) => (
            <Card key={j} style={{ padding: 'var(--spacing-4)' }}>
              <div style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-2)' }}>{task}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Badge role={i === 2 ? "primary" : "neutral"}>P{j+1}</Badge>
                <Avatar label="K" size="sm" />
              </div>
            </Card>
          ))}
          <Button role="neutral" style={{ borderStyle: 'dashed' }}>+ Add Item</Button>
        </div>
      ))}
    </div>

    <section>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Roadmap Timeline</h2>
      <Table
        headers={['Phase', 'Owner', 'Deadline', 'Progress']}
        rows={[
          ['Initial Ignition', <Avatar label="B" />, 'Jan 15', <div style={{ width: '100px', height: '8px', background: 'var(--color-surface-raised)', borderRadius: '4px' }}><div style={{ width: '100%', height: '100%', background: 'var(--color-role-primary)', borderRadius: '4px' }} /></div>],
          ['Singularity Testing', <Avatar label="H" />, 'Feb 02', <div style={{ width: '100px', height: '8px', background: 'var(--color-surface-raised)', borderRadius: '4px' }}><div style={{ width: '45%', height: '100%', background: 'var(--color-role-primary)', borderRadius: '4px' }} /></div>],
          ['Mass Manifestation', <Avatar label="P" />, 'Mar 10', <div style={{ width: '100px', height: '8px', background: 'var(--color-surface-raised)', borderRadius: '4px' }}><div style={{ width: '5%', height: '100%', background: 'var(--color-role-primary)', borderRadius: '4px' }} /></div>],
        ]}
      />
    </section>
  </div>
);
