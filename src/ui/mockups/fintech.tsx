import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge, Avatar } from '../components/Primitives';
import { Table } from '../components/DataDisplay';

export const FintechMock = () => (
  <div style={{ padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)' }}>VibeBank Pro</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontWeight: 'var(--font-weight-bold)' }}>Krzysztof Potato</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Premium Member</div>
        </div>
        <Avatar label="KP" role="primary" />
      </div>
    </header>

    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'var(--section-gap)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        <Card style={{ background: 'linear-gradient(135deg, var(--color-role-primary) 0%, var(--color-role-secondary) 100%)', color: 'white', border: 'none' }}>
          <div style={{ height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '1.25rem' }}>Quantum Card</div>
              <div style={{ fontSize: '1.5rem' }}>VISA</div>
            </div>
            <div style={{ fontSize: '1.5rem', letterSpacing: '0.2em' }}>**** **** **** 4242</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>BALANCE</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 'var(--font-weight-bold)' }}>$ 42,000.00</div>
              </div>
              <div style={{ fontSize: '0.875rem' }}>12/29</div>
            </div>
          </div>
        </Card>

        <section>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Recent Transactions</h2>
          <Table
            headers={['Description', 'Category', 'Date', 'Amount']}
            rows={[
              ['Galaxy S24 Toast Edition', <Badge role="primary">Tech</Badge>, 'Jan 12', '- $ 1,200.00'],
              ['Hovercat Insurance', <Badge role="support">Safety</Badge>, 'Jan 10', '- $ 45.00'],
              ['Quantum Potato Seeds', <Badge role="accent">Investment</Badge>, 'Jan 08', '- $ 500.00'],
              ['Salary Manifestation', <Badge role="primary">Income</Badge>, 'Jan 01', '+ $ 5,000.00'],
            ]}
          />
        </section>
      </div>

      <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        <Card>
          <h3 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Quick Transfer</h3>
          <div style={{ display: 'flex', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-6)' }}>
            {[1,2,3,4].map(i => <Avatar key={i} label={String.fromCharCode(64+i)} />)}
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px dashed var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>+</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <div style={{ position: 'relative' }}>
              <input type="text" placeholder="Amount" style={{ width: '100%', padding: 'var(--spacing-3)', background: 'var(--color-surface-raised)', border: 'none', borderRadius: 'var(--radius-sm)' }} />
              <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>USD</span>
            </div>
            <Button role="primary" style={{ width: '100%' }}>Send Money</Button>
          </div>
        </Card>

        <Card>
          <h3 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Asset Allocation</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            {[
              { name: 'Dark Matter', value: 45, role: 'primary' },
              { name: 'Potatocoin', value: 30, role: 'accent' },
              { name: 'Toast Futures', value: 25, role: 'support' },
            ].map((asset, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: 'var(--spacing-1)' }}>
                  <span>{asset.name}</span>
                  <span>{asset.value}%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'var(--color-surface-raised)', borderRadius: '3px' }}>
                  <div style={{ width: `${asset.value}%`, height: '100%', background: `var(--color-role-${asset.role})`, borderRadius: '3px' }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </aside>
    </div>
  </div>
);
