import React from 'react';
import { Card } from '../components/Card';

export const EditorialMock = () => (
  <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header style={{ textAlign: 'center', borderBottom: '4px solid var(--color-text-primary)', paddingBottom: 'var(--spacing-8)' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', letterSpacing: '-0.05em' }}>
        The Quantum Daily
      </h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--spacing-4)', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase' }}>
        <span>Vol. 42 / No. 7</span>
        <span>Price: 1 Potato</span>
      </div>
    </header>

    <article style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--section-gap)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <h2 style={{ fontSize: '1.5rem', lineHeight: '1.1' }}>Why Your Toaster is Secretly Mining Dark Matter</h2>
        <p style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>By dr. Barnaby Burnt</p>
        <div style={{ borderTop: '1px solid var(--color-text-muted)', paddingTop: 'var(--spacing-4)' }}>
          <p style={{ fontSize: '0.75rem', lineHeight: '1.6' }}>
            It started with a slightly over-browned bagel. Now, the entire kitchen is a localized singularity. We investigate the links between bread-browning and the collapse of the space-time continuum.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <div style={{ height: '300px', background: 'var(--color-surface-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
          🥪
        </div>
        <p style={{ lineHeight: '1.6', fontSize: '1.125rem' }}>
          "The entropy is delicious," claims local resident Krzysztof. "I used to worry about the heat death of the universe, but then I realized it just makes for a more even toast distribution."
        </p>
        <p style={{ lineHeight: '1.6', fontSize: '1.125rem' }}>
          Researchers at Sektor 7G have confirmed that the current wave of hovercat migrations is directly proportional to the amount of jam applied to the average morning snack.
        </p>
      </div>
    </article>

    <hr style={{ border: 'none', borderTop: '2px solid var(--color-text-primary)' }} />

    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--section-gap)' }}>
      {[1,2,3].map(i => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
          <h3 style={{ fontSize: '1.25rem', lineHeight: '1.1' }}>Short Report #{i}</h3>
          <p style={{ fontSize: '0.75rem', lineHeight: '1.6' }}>
            A brief summary of events in Sektor {i}B involving a rogue vacuum cleaner and three metric tons of glitter.
          </p>
        </div>
      ))}
    </section>
  </div>
);
