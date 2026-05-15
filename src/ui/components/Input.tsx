import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  forceState?: 'focus' | 'error';
  id?: string | number;
  style?: React.CSSProperties;
}

const inputBase: React.CSSProperties = {
    width: '100%',
    padding: 'var(--spacing-2) var(--spacing-4)',
    borderRadius: 'var(--radius-sm)',
    border: 'var(--border-width) solid var(--color-surface-raised)',
    backgroundColor: 'var(--color-bg)',
    color: 'var(--color-text-primary)',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'all var(--motion-duration) ease'
};

export const TextInput = ({ label, id, placeholder, type = "text", disabled, forceState, style }: InputProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)', ...style }}>
    {label && <label style={{ fontSize: '0.75rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-muted)' }}>{label}</label>}
    <input
      id={id?.toString()}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      style={{
          ...inputBase,
          opacity: disabled ? 0.5 : 1,
          borderColor: forceState === 'error' ? 'var(--color-role-destructive)' : 'var(--color-surface-raised)',
          boxShadow: forceState === 'focus' ? '0 0 0 2px var(--color-role-primary-bg)' : 'none'
      }}
    />
  </div>
);

export const Select = ({ label, options, id, style }: { label?: string, options: string[], id?: string | number, style?: React.CSSProperties }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)', ...style }}>
    {label && <label style={{ fontSize: '0.75rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-muted)' }}>{label}</label>}
    <select id={id?.toString()} style={inputBase}>
      {options.map(opt => <option key={opt}>{opt}</option>)}
    </select>
  </div>
);

export const TextArea = ({ label, id, placeholder, style }: InputProps) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)', ...style }}>
      {label && <label style={{ fontSize: '0.75rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-muted)' }}>{label}</label>}
      <textarea
        id={id?.toString()}
        placeholder={placeholder}
        style={{ ...inputBase, minHeight: '100px', resize: 'vertical' }}
      />
    </div>
);
