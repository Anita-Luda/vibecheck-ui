import React from 'react';
import { Card } from '../components/Card';
import { Grid } from '../layout/Grid';

export const ChartMock = () => (
  <div style={{ padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header>
      <h1 style={{ fontSize: '2rem', fontWeight: 'var(--font-weight-bold)' }}>Visual Analytics</h1>
      <p style={{ color: 'var(--color-text-muted)' }}>Real-time telemetry from the Potato Core.</p>
    </header>

    <Grid cols={2}>
      <Card style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Entropy Over Time</h3>
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 'var(--spacing-2)', padding: 'var(--spacing-4)' }}>
          {[40, 70, 45, 90, 65, 30, 85, 100, 50, 75].map((h, i) => (
            <div key={i} style={{ flex: 1, background: 'var(--color-role-primary)', height: `${h}%`, borderRadius: 'var(--radius-xs) var(--radius-xs) 0 0', opacity: 0.5 + (h/200) }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--spacing-2)', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
          <span>00:00</span>
          <span>12:00</span>
          <span>23:59</span>
        </div>
      </Card>

      <Card style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Hovercat Distribution</h3>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '200px', height: '200px', borderRadius: '50%', background: 'conic-gradient(var(--color-role-primary) 0% 30%, var(--color-role-accent) 30% 60%, var(--color-role-support) 60% 100%)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-4)', marginTop: 'var(--spacing-4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-1)', fontSize: '0.75rem' }}>
            <div style={{ width: '10px', height: '10px', background: 'var(--color-role-primary)' }} /> Sector A
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-1)', fontSize: '0.75rem' }}>
            <div style={{ width: '10px', height: '10px', background: 'var(--color-role-accent)' }} /> Sector B
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-1)', fontSize: '0.75rem' }}>
            <div style={{ width: '10px', height: '10px', background: 'var(--color-role-support)' }} /> Sector C
          </div>
        </div>
      </Card>
    </Grid>

    <Card>
      <h3 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Potato Sync Waveform</h3>
      <div style={{ height: '100px', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <svg viewBox="0 0 1000 100" style={{ width: '100%', height: '100%' }}>
          <path d="M0 50 Q 25 10, 50 50 T 100 50 T 150 50 T 200 50 T 250 50 T 300 50 T 350 50 T 400 50 T 450 50 T 500 50 T 550 50 T 600 50 T 650 50 T 700 50 T 750 50 T 800 50 T 850 50 T 900 50 T 950 50 T 1000 50"
                fill="none"
                stroke="var(--color-role-primary)"
                strokeWidth="2" />
        </svg>
      </div>
    </Card>
  </div>
);
