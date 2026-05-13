import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';

export const MarketingMock = () => (
  <div style={{ overflowX: 'hidden' }}>
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 'var(--section-gap)',
      background: 'radial-gradient(circle at center, var(--color-role-primary-bg) 0%, var(--color-bg) 100%)'
    }}>
      <h1 style={{ fontSize: '5rem', fontWeight: 'var(--font-weight-bold)', lineHeight: '1', marginBottom: 'var(--spacing-6)' }}>
        The Future of <span style={{ color: 'var(--color-role-primary)' }}>Vibe</span> is Here.
      </h1>
      <p style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)', maxWidth: '800px', marginBottom: 'var(--spacing-10)' }}>
        Experience the first ever deterministic UI runtime that scales with your entropy. manifest your reality in Sector 7G.
      </p>
      <div style={{ display: 'flex', gap: 'var(--item-gap)' }}>
        <Button role="primary" style={{ padding: 'var(--spacing-4) var(--spacing-8)', fontSize: '1.25rem' }}>Ignite for Free</Button>
        <Button role="neutral" style={{ padding: 'var(--spacing-4) var(--spacing-8)', fontSize: '1.25rem' }}>Read the Manifest</Button>
      </div>
    </section>

    <section style={{ padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
      <h2 style={{ fontSize: '3rem', textAlign: 'center', fontWeight: 'var(--font-weight-bold)' }}>Powered by Dark Matter.</h2>
      <Grid cols={3}>
        {[
          { title: 'Quantum Sync', icon: '⚡', desc: 'Real-time state redistribution across all potato clusters.' },
          { title: 'Hovercat Ready', icon: '🐈', desc: 'Optimized for high-altitude feline deployments.' },
          { title: 'Toast Driven', icon: '🍞', desc: 'Deterministic browning algorithms for every interface.' },
        ].map((feat, i) => (
          <Card key={i} style={{ textAlign: 'center', padding: 'var(--spacing-8)' }}>
            <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-4)' }}>{feat.icon}</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 'var(--spacing-2)' }}>{feat.title}</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>{feat.desc}</p>
          </Card>
        ))}
      </Grid>
    </section>

    <section style={{ padding: 'var(--section-gap)', background: 'var(--color-surface)', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: 'var(--spacing-8)' }}>Trusted by the Hive Mind.</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-16)', opacity: 0.5, fontSize: '1.5rem', fontWeight: 'bold' }}>
        <span>POTATO CORP</span>
        <span>HOVERINC</span>
        <span>JAM SYS</span>
        <span>VOID LTD</span>
      </div>
    </section>

    <footer style={{ padding: 'var(--section-gap)', borderTop: '1px solid var(--color-surface-raised)', textAlign: 'center' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 'var(--spacing-4)' }}>VibeCheck UI</div>
      <div style={{ color: 'var(--color-text-muted)' }}>© 2026 Sector 7G. All vibes manifest.</div>
    </footer>
  </div>
);
