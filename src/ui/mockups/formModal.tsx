import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { TextInput, TextArea } from '../components/Input';

interface FormModalMockProps {
  onClose?: () => void;
}

export const FormModalMock: React.FC<FormModalMockProps> = ({ onClose }) => (
  <div style={{
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: 'var(--spacing-4)'
  }}>
    <Card style={{
      maxWidth: '500px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-6)',
      boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
      animation: 'slide-up 0.3s ease-out'
    }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'var(--font-weight-bold)' }}>Create New Entity</h2>
        <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--color-text-muted)' }}>×</button>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <TextInput label="Entity Name" placeholder="e.g. Flying Potato" id={0} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)' }}>
          <TextInput label="Entropy Level" type="number" placeholder="42" id={0} />
          <TextInput label="Vibe Frequency" type="text" placeholder="528Hz" id={0} />
        </div>
        <TextArea label="Bio / Manifest" placeholder="Describe the soul of this entity..." id={0} />
      </div>

      <footer style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--item-gap)', borderTop: '1px solid var(--color-surface-raised)', paddingTop: 'var(--spacing-6)' }}>
        <Button role="neutral" onClick={onClose}>Discard</Button>
        <Button role="primary" onClick={onClose}>Manifest Entity</Button>
      </footer>
    </Card>
  </div>
);
