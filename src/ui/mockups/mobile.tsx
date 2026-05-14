import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge, Avatar } from '../components/Primitives';

export const MobileMock = () => (
  <div style={{
    width: '375px',
    height: '667px',
    margin: '0 auto',
    border: '8px solid var(--color-role-neutral-border)',
    borderRadius: '40px',
    overflow: 'hidden',
    background: 'var(--color-bg)',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <div style={{ padding: 'var(--spacing-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-surface-raised)' }}>
      <div style={{ fontWeight: 'var(--font-weight-bold)' }}>9:41</div>
      <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>🔋📶</div>
    </div>

    <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <header>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)' }}>VibeFeed</h1>
      </header>

      {[1,2,3,4,5].map(i => (
        <Card key={i} style={{ padding: 'var(--spacing-4)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-3)' }}>
            <Avatar label="C" />
            <div>
              <div style={{ fontWeight: 'var(--font-weight-bold)', fontSize: '0.875rem' }}>Hovercat_{i}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Właśnie teraz w Sektorze 7G</div>
            </div>
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: '1.4' }}>
            Właśnie widziałem kolaps kwantowego ziemniaka w czasie rzeczywistym. Poziomy entropii osiągają krytyczną tostowość! 🍞🥔 #VibeCheck
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-4)', marginTop: 'var(--spacing-3)' }}>
            <span style={{ fontSize: '0.75rem' }}>❤️ 42</span>
            <span style={{ fontSize: '0.75rem' }}>💬 12</span>
            <span style={{ fontSize: '0.75rem' }}>🚀 7</span>
          </div>
        </Card>
      ))}
    </div>

    <footer style={{
      padding: 'var(--spacing-4)',
      display: 'flex',
      justifyContent: 'space-around',
      borderTop: '1px solid var(--color-surface-raised)',
      background: 'var(--color-surface)'
    }}>
      {['🏠', '🔍', '➕', '🔔', '👤'].map(icon => (
        <div key={icon} style={{ fontSize: '1.25rem', cursor: 'pointer' }}>{icon}</div>
      ))}
    </footer>
  </div>
);
