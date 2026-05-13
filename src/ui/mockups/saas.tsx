import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge, Avatar } from '../components/Primitives';
import { Table } from '../components/DataDisplay';

export const SaasMock = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <aside style={{ width: '240px', background: 'var(--color-surface)', borderRight: '1px solid var(--color-surface-raised)', padding: 'var(--spacing-6)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
      <div style={{ fontWeight: 'var(--font-weight-bold)', fontSize: '1.25rem' }}>VibeCloud</div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        {['Clusters', 'Deployments', 'Quantum Logic', 'Settings'].map(item => (
          <div key={item} style={{ padding: 'var(--spacing-2) var(--spacing-4)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', background: item === 'Clusters' ? 'var(--color-surface-raised)' : 'transparent' }}>
            {item}
          </div>
        ))}
      </nav>

      <div style={{ marginTop: 'auto' }}>
        <Card style={{ padding: 'var(--spacing-3)', background: 'var(--color-role-primary-bg)', borderColor: 'var(--color-role-primary-border)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-1)' }}>PLAN: OMEGA</div>
          <div style={{ fontSize: '0.625rem' }}>98% Tost Usage</div>
        </Card>
      </div>
    </aside>

    <main style={{ flex: 1, padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)' }}>Quantum Clusters</h1>
        <Button role="primary">+ New Cluster</Button>
      </header>

      <Grid cols={3}>
        {[
          { name: 'Potato-01', status: 'Running', region: 'Sector-7G' },
          { name: 'Hovercat-Prime', status: 'Deploying', region: 'Sector-Beta' },
          { name: 'Void-Alpha', status: 'Stopped', region: 'Void' },
        ].map((c, i) => (
          <Card key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-4)' }}>
              <div style={{ fontWeight: 'var(--font-weight-bold)' }}>{c.name}</div>
              <Badge role={c.status === 'Running' ? 'primary' : c.status === 'Deploying' ? 'support' : 'neutral' as any}>
                {c.status}
              </Badge>
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Region: {c.region}</div>
            <div style={{ marginTop: 'var(--spacing-4)', height: '4px', background: 'var(--color-surface-raised)', borderRadius: '2px' }}>
              <div style={{ width: i === 0 ? '80%' : i === 1 ? '45%' : '0%', height: '100%', background: 'var(--color-role-primary)', borderRadius: '2px' }} />
            </div>
          </Card>
        ))}
      </Grid>

      <Table
        headers={['Deployment', 'Hash', 'Status', 'Deployed At']}
        rows={[
          ['feat-tost-engine', '8a2b3c', <Badge role="primary">Live</Badge>, '2m ago'],
          ['fix-cat-leak', '9f1e0d', <Badge role="secondary">Rollback</Badge>, '1h ago'],
          ['refactor-quantum', '4c5d6e', <Badge role="neutral">Draft</Badge>, 'yesterday'],
        ]}
      />
    </main>
  </div>
);
