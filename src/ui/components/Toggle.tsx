import React from 'react';

export const Toggle = ({ id, initial = false, onChange, label }: { id?: number, initial?: boolean, onChange?: (val: boolean) => void, label?: string }) => {
  const [enabled, setEnabled] = React.useState(initial);
  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    onChange?.(next);
  };

  const roleName = id !== undefined ? ['primary', 'secondary', 'accent', 'support', 'muted', 'destructive', 'neutral'][id % 7] : 'accent';
  const activeColor = `var(--color-role-${roleName})`;
  const bgColor = enabled ? activeColor : 'var(--color-surface-raised)';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
        {label && <span style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>{label}</span>}
        <div
            onClick={toggle}
            style={{
                width: '44px',
                height: '24px',
                borderRadius: '9999px',
                backgroundColor: bgColor,
                position: 'relative',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                borderWidth: 'var(--border-width)',
                borderStyle: 'solid',
                borderColor: enabled ? activeColor : 'var(--color-role-neutral-border)'
            }}
        >
            <div style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: 'white',
                position: 'absolute',
                top: '2px',
                left: enabled ? '22px' : '2px',
                transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }} />
        </div>
    </div>
  );
};
