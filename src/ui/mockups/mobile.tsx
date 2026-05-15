import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge, Avatar } from '../components/Primitives';

export const MobileMock = () => (
  <div id="mock-mobile" style={{
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
    <div id="mob-status-bar" style={{ padding: 'var(--spacing-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-surface-raised)' }}>
      <div id="mob-time" style={{ fontWeight: 'var(--font-weight-bold)' }}>9:41</div>
      <div id="mob-icons" style={{ display: 'flex', gap: 'var(--spacing-2)' }}>🔋📶</div>
    </div>

    <div id="mob-scroll-area" style={{ flex: 1, overflowY: 'auto', padding: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <header id="mob-header">
        <h1 id="mob-title" style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)' }}>VibeFeed</h1>
      </header>

      {[1,2,3,4,5].map(i => (
        <Card key={i} id={`mob-post-${i}`} style={{ padding: 'var(--spacing-4)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-3)' }}>
            <Avatar id={`mob-avatar-${i}`} label="C" />
            <div>
              <div id={`mob-user-${i}`} style={{ fontWeight: 'var(--font-weight-bold)', fontSize: '0.875rem' }}>Hovercat_{i}</div>
              <div id={`mob-loc-${i}`} style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Właśnie teraz w Sektorze 7G</div>
            </div>
          </div>
          <p id={`mob-content-${i}`} style={{ fontSize: '0.875rem', lineHeight: '1.4' }}>
            Właśnie widziałem kolaps kwantowego ziemniaka w czasie rzeczywistym. Poziomy entropii osiągają krytyczną tostowość! 🍞🥔 #VibeCheck
          </p>
          <div id={`mob-actions-${i}`} style={{ display: 'flex', gap: 'var(--spacing-4)', marginTop: 'var(--spacing-3)' }}>
            <span id={`mob-like-${i}`} style={{ fontSize: '0.75rem' }}>❤️ 42</span>
            <span id={`mob-comment-${i}`} style={{ fontSize: '0.75rem' }}>💬 12</span>
            <span id={`mob-share-${i}`} style={{ fontSize: '0.75rem' }}>🚀 7</span>
          </div>
        </Card>
      ))}
    </div>

    <footer id="mob-nav-bar" style={{
      padding: 'var(--spacing-4)',
      display: 'flex',
      justifyContent: 'space-around',
      borderTop: '1px solid var(--color-surface-raised)',
      background: 'var(--color-surface)'
    }}>
      {['🏠', '🔍', '➕', '🔔', '👤'].map((icon, i) => (
        <div key={icon} id={`mob-nav-item-${i}`} style={{ fontSize: '1.25rem', cursor: 'pointer' }}>{icon}</div>
      ))}
    </footer>
  </div>
);
