import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge, Avatar } from '../components/Primitives';

export const EducationMock = () => (
  <div style={{ padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header style={{ borderBottom: '1px solid var(--color-surface-raised)', paddingBottom: 'var(--spacing-8)' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'var(--font-weight-bold)' }}>Quantum Academy</h1>
      <p style={{ color: 'var(--color-text-muted)' }}>Learning the secrets of Sector 7G.</p>
    </header>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 'var(--section-gap)' }}>
      <main style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        <div style={{ height: '400px', background: 'var(--color-role-primary-bg)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', border: '2px solid var(--color-role-primary-border)', position: 'relative' }}>
          🎓
          <div style={{ position: 'absolute', bottom: 'var(--spacing-6)', left: 'var(--spacing-6)', right: 'var(--spacing-6)', display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
            <Button role="primary">Play Lesson</Button>
            <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}>
              <div style={{ width: '42%', height: '100%', background: 'var(--color-role-primary)', borderRadius: '3px' }} />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>12:42 / 42:00</span>
          </div>
        </div>

        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Lesson: Intro to Singularity Baking</h2>
          <p style={{ lineHeight: '1.6', fontSize: '1.125rem' }}>
            In this module, we explore why a standard toaster cannot handle more than 3 neutron stars. We will also cover the legal implications of accidentally creating a localized black hole in your pantry.
          </p>
        </section>
      </main>

      <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        <Card>
          <h3 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Course Content</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            {[
              { t: '1. History of the Potato', d: '10:00', done: true },
              { t: '2. Singularity Baking', d: '42:00', done: false },
              { t: '3. Hovercat Dynamics', d: '15:00', done: false },
              { t: '4. Advanced Entropy', d: '30:00', done: false },
            ].map((m, i) => (
              <div key={i} style={{ padding: 'var(--spacing-3)', borderRadius: 'var(--radius-sm)', background: m.done ? 'var(--color-role-primary-bg)' : 'var(--color-surface-raised)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '0.875rem' }}>{m.t}</div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{m.d}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Instructor</h3>
          <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
            <Avatar label="DB" role="accent" />
            <div>
              <div style={{ fontWeight: 'bold' }}>dr Barnaby Burnt</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Chief Toaster at Sektor 7G</div>
            </div>
          </div>
        </Card>
      </aside>
    </div>
  </div>
);
