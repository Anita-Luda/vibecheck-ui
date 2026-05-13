import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Primitives';

export const DevToolsMock = () => (
  <div style={{ display: 'flex', height: '100%', background: '#0a0a0a', color: '#00ff00', fontFamily: 'monospace' }}>
    <aside style={{ width: '200px', borderRight: '1px solid #333', padding: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <div style={{ fontWeight: 'bold', color: 'white' }}>TERMINAL_v8.0</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', fontSize: '0.75rem' }}>
        {['src/', 'heap/', 'kernel/', 'render/', 'contracts/'].map(dir => (
          <div key={dir} style={{ cursor: 'pointer' }}>📁 {dir}</div>
        ))}
      </div>
    </aside>

    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: 'var(--spacing-2) var(--spacing-4)', background: '#1a1a1a', display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
        <Badge role="primary">main.tsx</Badge>
        <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>mapper.ts</div>
        <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>colorCompiler.ts</div>
      </header>

      <div style={{ flex: 1, padding: 'var(--spacing-6)', overflowY: 'auto' }}>
        <pre style={{ margin: 0, lineHeight: '1.6' }}>
          {`1  import { Pipeline } from './runtime';
2
3  const vibe = new Pipeline({
4    entropy: 42,
5    potatoSync: true,
6    hovercatDensity: 'CRITICAL'
7  });
8
9  // TODO: Fix the jam-overflow in sector 7G
10 vibe.on('overflow', (err) => {
11   manifestToast(err.magnitude);
12 });
13
14 vibe.ignite();`}
        </pre>
      </div>

      <footer style={{ height: '200px', borderTop: '1px solid #333', background: '#000', padding: 'var(--spacing-4)', fontSize: '0.875rem' }}>
        <div style={{ color: '#aaa', marginBottom: 'var(--spacing-2)' }}>OUTPUT</div>
        <div>[SYSTEM] Initializing Quantum Core...</div>
        <div>[SYSTEM] Sector 7G: OK</div>
        <div>[WARN] Hovercat density exceeding safety limits!</div>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)', marginTop: 'var(--spacing-4)' }}>
          <span style={{ color: 'white' }}>$</span>
          <input type="text" style={{ flex: 1, background: 'transparent', border: 'none', color: '#00ff00', outline: 'none' }} placeholder="run manifest --vibe=max" />
        </div>
      </footer>
    </main>

    <aside style={{ width: '300px', borderLeft: '1px solid #333', padding: 'var(--spacing-4)' }}>
      <div style={{ fontWeight: 'bold', color: 'white', marginBottom: 'var(--spacing-4)' }}>INSPECTOR</div>
      <Card style={{ background: '#111', borderColor: '#333', color: '#00ff00', padding: 'var(--spacing-3)' }}>
        <div style={{ marginBottom: 'var(--spacing-2)' }}>Selected Entity: <span style={{ color: 'white' }}>Pipeline</span></div>
        <div style={{ fontSize: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>entropy:</span> <span>42</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>status:</span> <span style={{ color: 'yellow' }}>IGNITED</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>heap_ptr:</span> <span>0x00A1F2</span></div>
        </div>
      </Card>
    </aside>
  </div>
);
