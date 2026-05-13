import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Primitives';

export const OnboardingMock = () => {
  const [step, setStep] = React.useState(1);

  return (
    <div style={{ maxWidth: '600px', margin: '100px auto', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-2)' }}>
        {[1,2,3].map(i => (
          <div key={i} style={{
            width: '40px',
            height: '4px',
            borderRadius: '2px',
            background: i <= step ? 'var(--color-role-primary)' : 'var(--color-surface-raised)'
          }} />
        ))}
      </div>

      <Card style={{ padding: 'var(--spacing-10)', textAlign: 'center' }}>
        {step === 1 && (
          <>
            <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-6)' }}>🥔</div>
            <h1 style={{ fontSize: '2rem', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Welcome to Sector 7G</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-8)' }}>
              You have been selected to monitor the Quantum Potato. Please ensure your vibe is correctly synchronized before proceeding.
            </p>
            <Button role="primary" onClick={() => setStep(2)}>Calibrate Vibe</Button>
          </>
        )}

        {step === 2 && (
          <>
            <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-6)' }}>🐈</div>
            <h1 style={{ fontSize: '2rem', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>Stabilize Hovercats</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-8)' }}>
              A stable hovercat is a happy hovercat. Use the dark matter injector to maintain a constant altitude.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--item-gap)' }}>
              <Button role="neutral" onClick={() => setStep(1)}>Back</Button>
              <Button role="primary" onClick={() => setStep(3)}>Inject Dark Matter</Button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-6)' }}>🌌</div>
            <h1 style={{ fontSize: '2rem', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--spacing-4)' }}>You are Ready</h1>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-8)' }}>
              The universe is now at your fingertips. Remember: the jam must flow.
            </p>
            <Badge role="primary" style={{ marginBottom: 'var(--spacing-8)', display: 'inline-block' }}>ACCESS GRANTED</Badge>
            <br />
            <Button role="primary">Enter the Void</Button>
          </>
        )}
      </Card>
    </div>
  );
};
