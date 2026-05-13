import React from 'react';
import { Card } from '../components/Card';
import { Toggle } from '../components/Toggle';
import { Button } from '../components/Button';
import { TextInput, Select } from '../components/Input';

export const SettingsMock = () => (
  <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header>
      <h1 style={{ fontSize: '2rem', fontWeight: 'var(--font-weight-bold)' }}>System Settings</h1>
      <p style={{ color: 'var(--color-text-muted)' }}>Configure your local reality and vibe parameters.</p>
    </header>

    <div style={{ display: 'grid', gap: 'var(--spacing-8)' }}>
      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)' }}>Vibe Core</h2>
        <Card style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <TextInput label="Display Name" placeholder="Quantum Potato" id={1} />
          <Select label="Reality Anchor" options={['Sector 7G', 'Hive Mind', 'Void', 'Localhost']} id={1} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 'var(--font-weight-bold)' }}>Enable Dark Matter Sync</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Required for hovercat stabilization.</div>
            </div>
            <Toggle id={1} initial={true} />
          </div>
        </Card>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)' }}>Notification Frequency</h2>
        <Card style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          {[
            { label: 'Entropy Alerts', desc: 'Notify when potato levels drop.' },
            { label: 'Hovercat Proximity', desc: 'Beep when a cat is hovering nearby.' },
            { label: 'Toast Ready', desc: 'Crucial for morning routines.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 'var(--font-weight-bold)' }}>{item.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{item.desc}</div>
              </div>
              <Toggle id={i + 10} initial={i < 2} />
            </div>
          ))}
        </Card>
      </section>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--item-gap)' }}>
        <Button role="neutral">Cancel</Button>
        <Button role="primary">Save Reality</Button>
      </div>
    </div>
  </div>
);
