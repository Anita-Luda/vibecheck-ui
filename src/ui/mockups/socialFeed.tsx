import React from 'react';
import { Card } from '../components/Card';
import { Avatar, Badge } from '../components/Primitives';
import { Button } from '../components/Button';

export const SocialFeedMock = () => (
  <div style={{ maxWidth: '600px', margin: '0 auto', padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <Card style={{ padding: 'var(--spacing-4)' }}>
      <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
        <Avatar label="K" size="md" />
        <textarea
          placeholder="What's your current vibe?"
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            resize: 'none',
            padding: 'var(--spacing-2)',
            color: 'var(--color-text-primary)',
            fontSize: '1.125rem'
          }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--spacing-4)', borderTop: '1px solid var(--color-surface-raised)', paddingTop: 'var(--spacing-3)' }}>
        <div style={{ display: 'flex', gap: 'var(--spacing-4)', fontSize: '1.25rem' }}>
          🖼️ 📊 😺 📍
        </div>
        <Button role="primary">Post Vibe</Button>
      </div>
    </Card>

    {[1,2,3].map(i => (
      <Card key={i} style={{ padding: 'var(--spacing-4)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-4)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
            <Avatar label={i % 2 === 0 ? "H" : "P"} role={i % 2 === 0 ? "accent" : "primary"} />
            <div>
              <div style={{ fontWeight: 'var(--font-weight-bold)' }}>{i % 2 === 0 ? "Hovercat_Alpha" : "Potato_Lord"}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>@vibe_master • {i * 10}m</div>
            </div>
          </div>
          <Badge role="neutral">Following</Badge>
        </div>
        <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: 'var(--spacing-4)' }}>
          Entropy levels in Sector 7G are currently at a perfect {40 + i * 2}%.
          {i === 2 ? " Also, the new quantum jam tastes like purple. Highly recommend." : " Who knew cats could hover so high without using dark matter?"}
        </p>
        <div style={{ height: '300px', background: 'var(--color-surface-raised)', borderRadius: 'var(--radius-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', marginBottom: 'var(--spacing-4)' }}>
          {i === 2 ? "🍇" : "🐈"}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
          <span>💬 {i * 15}</span>
          <span>🔄 {i * 7}</span>
          <span>❤️ {i * 123}</span>
          <span>📊 {i * 10}k</span>
        </div>
      </Card>
    ))}
  </div>
);
