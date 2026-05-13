import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Avatar, Badge } from '../components/Primitives';

export const AIAppMock = () => (
  <div style={{ display: 'flex', height: '100vh', background: 'var(--color-bg)' }}>
    <aside style={{ width: '280px', borderRight: '1px solid var(--color-surface-raised)', display: 'flex', flexDirection: 'column', padding: 'var(--spacing-4)' }}>
      <Button role="neutral" style={{ marginBottom: 'var(--spacing-6)', justifyContent: 'flex-start' }}>+ New Conversation</Button>

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)' }}>
        {['Quantum Potato Physics', 'Hovercat Philosophy', 'Toast Singularity', 'Why Purple?', 'Sektor 7G Error Logs'].map((chat, i) => (
          <div key={i} style={{ padding: 'var(--spacing-3)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontSize: '0.875rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', background: i === 0 ? 'var(--color-surface-raised)' : 'transparent' }}>
            💬 {chat}
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--color-surface-raised)', paddingTop: 'var(--spacing-4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
          <Avatar label="AI" role="accent" />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 'var(--font-weight-bold)', fontSize: '0.875rem' }}>VibeCheck AI</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Pro Mode Active</div>
          </div>
        </div>
      </div>
    </aside>

    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: 'var(--spacing-4)', borderBottom: '1px solid var(--color-surface-raised)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'var(--font-weight-bold)' }}>Quantum Potato Physics</div>
        <Badge role="primary">v8.4.2</Badge>
      </header>

      <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
        <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
          <Avatar label="U" />
          <div style={{ flex: 1, lineHeight: '1.6' }}>
            Explain the relationship between the entropy of a potato and the hover-height of a cat in Sector 7G.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 'var(--spacing-4)', background: 'var(--color-surface)', padding: 'var(--spacing-6)', borderRadius: 'var(--radius-base)' }}>
          <Avatar label="AI" role="accent" />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <p style={{ lineHeight: '1.6' }}>
              The relationship is governed by the <strong>Hover-Tost Law</strong>. As the entropy ($E$) of a potato increases, the dark matter density within the Sector 7G manifold shifts toward the feline spectrum.
            </p>
            <Card style={{ background: 'var(--color-bg)', padding: 'var(--spacing-4)', fontFamily: 'monospace' }}>
              {"H = \\frac{\\int P_{entropy} dt}{\\text{Jam Factor} \\times \\text{Cat Mass}}"}
            </Card>
            <p style={{ lineHeight: '1.6' }}>
              In simple terms: the more "baked" the potato, the more "lift" the cat receives. However, excessive jam can cause a localized singularity.
            </p>
            <div style={{ display: 'flex', gap: 'var(--item-gap)' }}>
              <Button role="neutral">Copy</Button>
              <Button role="neutral">Regenerate</Button>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ padding: 'var(--spacing-8)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ maxWidth: '800px', width: '100%', position: 'relative' }}>
          <input
            type="text"
            placeholder="Ask anything about the void..."
            style={{
              width: '100%',
              padding: 'var(--spacing-4) var(--spacing-6)',
              paddingRight: '60px',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-surface-raised)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--color-text-primary)',
              boxShadow: 'var(--box-shadow)'
            }}
          />
          <button style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'var(--color-role-primary)',
            border: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer'
          }}>⬆️</button>
        </div>
      </footer>
    </main>
  </div>
);
