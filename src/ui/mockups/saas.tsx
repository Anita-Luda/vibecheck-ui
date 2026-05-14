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
        {['Klastry', 'Wdrożenia', 'Logika Kwantowa', 'Ustawienia'].map(item => (
          <div key={item} style={{ padding: 'var(--spacing-2) var(--spacing-4)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', background: item === 'Klastry' ? 'var(--color-surface-raised)' : 'transparent' }}>
            {item}
          </div>
        ))}
      </nav>

      <div style={{ marginTop: 'auto' }}>
        <Card style={{ padding: 'var(--spacing-3)', background: 'var(--color-role-primary-bg)', borderColor: 'var(--color-role-primary-border)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-1)' }}>PLAN: OMEGA</div>
          <div style={{ fontSize: '0.625rem' }}>98% Zużycia Tostów</div>
        </Card>
      </div>
    </aside>

    <main style={{ flex: 1, padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)' }}>Klastry Kwantowe</h1>
        <Button role="primary">+ Nowy Klaster</Button>
      </header>

      <Grid cols={3}>
        {[
          { name: 'Ziemniak-01', status: 'Działa', region: 'Sektor-7G' },
          { name: 'Hovercat-Prime', status: 'Wdrażanie', region: 'Sektor-Beta' },
          { name: 'Próżnia-Alfa', status: 'Zatrzymano', region: 'Próżnia' },
        ].map((c, i) => (
          <Card key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-4)' }}>
              <div style={{ fontWeight: 'var(--font-weight-bold)' }}>{c.name}</div>
              <Badge role={c.status === 'Działa' ? 'primary' : c.status === 'Wdrażanie' ? 'support' : 'neutral' as any}>
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
        headers={['Wdrożenie', 'Hash', 'Status', 'Czas wdrożenia']}
        rows={[
          ['feat-tost-engine', '8a2b3c', <Badge role="primary">Live</Badge>, '2m temu'],
          ['fix-cat-leak', '9f1e0d', <Badge role="secondary">Rollback</Badge>, '1h temu'],
          ['refactor-kwantowy', '4c5d6e', <Badge role="neutral">Szkic</Badge>, 'wczoraj'],
        ]}
      />
    </main>
  </div>
);
