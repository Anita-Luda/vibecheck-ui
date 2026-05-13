import React from 'react';
import { Card } from '../components/Card';
import { Grid } from '../layout/Grid';
import { Table } from '../components/DataDisplay';
import { Badge, Avatar } from '../components/Primitives';
import { Button } from '../components/Button';

export const EnterpriseMock = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <nav style={{ width: '80px', borderRight: '1px solid var(--color-surface-raised)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 'var(--spacing-6)', gap: 'var(--spacing-8)' }}>
      <div style={{ width: '40px', height: '40px', background: 'var(--color-role-primary)', borderRadius: 'var(--radius-sm)' }} />
      {['🏢', '👥', '📊', '🔒', '⚙️'].map(icon => (
        <div key={icon} style={{ fontSize: '1.5rem', cursor: 'pointer', opacity: 0.6 }}>{icon}</div>
      ))}
    </nav>

    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: 'var(--spacing-4) var(--spacing-8)', borderBottom: '1px solid var(--color-surface-raised)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)' }}>Enterprise Control Matrix</h1>
        <div style={{ display: 'flex', gap: 'var(--item-gap)' }}>
          <Button role="neutral">Audit Logs</Button>
          <Button role="primary">Admin Portal</Button>
        </div>
      </header>

      <div style={{ flex: 1, padding: 'var(--section-gap)', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        <Grid cols={3}>
          <Card>
            <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: 'var(--spacing-2)' }}>Global Compliance</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'var(--font-weight-bold)' }}>99.8%</div>
            <Badge role="primary" style={{ marginTop: 'var(--spacing-2)' }}>ISO-POTATO</Badge>
          </Card>
          <Card>
            <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: 'var(--spacing-2)' }}>Active Nodes</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'var(--font-weight-bold)' }}>14,204</div>
            <Badge role="support" style={{ marginTop: 'var(--spacing-2)' }}>+12 today</Badge>
          </Card>
          <Card>
            <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: 'var(--spacing-2)' }}>Entropy Level</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'var(--font-weight-bold)' }}>NOMINAL</div>
            <Badge role="neutral" style={{ marginTop: 'var(--spacing-2)' }}>STABLE</Badge>
          </Card>
        </Grid>

        <section>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: 'var(--spacing-4)' }}>Organization Hierarchy</h2>
          <Table
            headers={['Department', 'Head', 'Access Level', 'Budget (Toast)']}
            rows={[
              ['Sector 7G', <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}><Avatar label="B" size="sm" /><span>Bulwa</span></div>, <Badge role="primary">OWNER</Badge>, '42.0m'],
              ['Hovercat Lab', <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}><Avatar label="H" size="sm" /><span>Hover</span></div>, <Badge role="accent">ADMIN</Badge>, '12.5m'],
              ['Void Analytics', <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}><Avatar label="V" size="sm" /><span>Void</span></div>, <Badge role="neutral">READ</Badge>, '5.0m'],
            ]}
          />
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--section-gap)' }}>
          <Card>
            <h3 style={{ fontWeight: 'bold', marginBottom: 'var(--spacing-4)' }}>Permission Matrix</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
              {['Storage', 'Network', 'Quantum', 'Jam'].map(p => (
                <div key={p} style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--spacing-2)', borderBottom: '1px solid var(--color-surface-raised)' }}>
                  <span>{p} Access</span>
                  <input type="checkbox" defaultChecked />
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 style={{ fontWeight: 'bold', marginBottom: 'var(--spacing-4)' }}>Usage Quotas</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
              {[
                { n: 'Dark Matter', v: 88 },
                { n: 'Potato Power', v: 45 },
                { n: 'Hover Time', v: 12 },
              ].map(q => (
                <div key={q.n}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: 'var(--spacing-1)' }}>
                    <span>{q.n}</span>
                    <span>{q.v}%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'var(--color-surface-raised)', borderRadius: '4px' }}>
                    <div style={{ width: `${q.v}%`, height: '100%', background: 'var(--color-role-primary)', borderRadius: '4px' }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </main>
  </div>
);
