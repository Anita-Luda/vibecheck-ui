import React from 'react';

export const TextInput = ({ label, placeholder, type = "text", id, role, className = "", forceState, disabled, style }: {
    label?: string,
    placeholder?: string,
    type?: string,
    id?: number,
    role?: 'primary' | 'secondary' | 'accent' | 'support' | 'muted' | 'destructive' | 'neutral',
    className?: string,
    forceState?: 'focus',
    disabled?: boolean,
    style?: React.CSSProperties
}) => {
  const roleName = role || (id !== undefined ? ['primary', 'secondary', 'accent', 'support', 'muted', 'destructive', 'neutral'][id] || 'neutral' : 'neutral');
  const borderColor = `var(--color-role-${roleName}-border)`;
  const focusColor = `var(--color-role-accent)`;

  const displayBorder = forceState === 'focus' ? focusColor : borderColor;

  return (
    <div className={`vibe-input-wrapper role-${roleName} ${className}`} style={{ marginBottom: 'var(--spacing-4)', opacity: disabled ? '0.4' : 'var(--vl-opacity)', filter: disabled ? 'grayscale(1)' : 'none', ...style }}>
      {label && <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.1em', marginBottom: 'var(--spacing-1_5)' }}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className="vibe-text-input"
        style={{
            width: '100%',
            backgroundColor: 'var(--color-surface)',
            borderWidth: 'var(--border-width)',
            borderRadius: 'var(--radius-base)',
            borderStyle: 'var(--vl-border-style)',
            borderColor: displayBorder,
            padding: 'var(--vl-padding)',
            fontFamily: 'var(--vl-font-family)',
            fontSize: 'var(--vl-font-size)',
            letterSpacing: 'var(--vl-letter-spacing)',
            color: 'var(--color-text-primary)',
            cursor: disabled ? 'not-allowed' : 'text',
            outline: 'none',
            transition: 'all var(--vl-transition-duration) var(--vl-transition-timing-function)'
        }}
        onFocus={(e) => { if(!disabled) e.currentTarget.style.borderColor = focusColor }}
        onBlur={(e) => { if(!disabled) e.currentTarget.style.borderColor = borderColor }}
      />
    </div>
  );
};

export const TextArea = ({ label, placeholder, id, role, style }: {
    label?: string,
    placeholder?: string,
    id?: number,
    role?: 'primary' | 'secondary' | 'accent' | 'support' | 'muted' | 'destructive' | 'neutral',
    style?: React.CSSProperties
}) => {
    const roleName = role || (id !== undefined ? ['primary', 'secondary', 'accent', 'support', 'muted', 'destructive', 'neutral'][id] || 'neutral' : 'neutral');
    const borderColor = `var(--color-role-${roleName}-border)`;
    return (
      <div className={`vibe-input-wrapper role-${roleName}`} style={{ marginBottom: 'var(--spacing-4)', ...style }}>
        {label && <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.1em', marginBottom: 'var(--spacing-1_5)' }}>{label}</label>}
        <textarea
          placeholder={placeholder}
          className="vibe-textarea"
          style={{
              width: '100%',
              backgroundColor: 'var(--color-surface)',
              borderWidth: 'var(--border-width)',
              borderRadius: 'var(--radius-base)',
              borderStyle: 'var(--vl-border-style)',
              borderColor,
              padding: 'var(--vl-padding)',
              fontFamily: 'var(--vl-font-family)',
              fontSize: 'var(--vl-font-size)',
              color: 'var(--color-text-primary)',
              minHeight: '100px',
              outline: 'none',
              resize: 'none'
          }}
        />
      </div>
    );
};

export const Select = ({ label, options, id, role, className = "", style }: {
    label?: string,
    options: string[],
    id?: number,
    role?: 'primary' | 'secondary' | 'accent' | 'support' | 'muted' | 'destructive' | 'neutral',
    className?: string,
    style?: React.CSSProperties
}) => {
    const roleName = role || (id !== undefined ? ['primary', 'secondary', 'accent', 'support', 'muted', 'destructive', 'neutral'][id] || 'neutral' : 'neutral');
    const borderColor = `var(--color-role-${roleName}-border)`;
    return (
      <div className={`vibe-input-wrapper role-${roleName} ${className}`} style={{ marginBottom: 'var(--spacing-4)', ...style }}>
        {label && <label style={{ display: 'block', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.1em', marginBottom: 'var(--spacing-1_5)' }}>{label}</label>}
        <select
          className="vibe-select"
          style={{
              width: '100%',
              backgroundColor: 'var(--color-surface)',
              borderWidth: 'var(--border-width)',
              borderRadius: 'var(--radius-base)',
              borderStyle: 'var(--vl-border-style)',
              borderColor,
              padding: 'var(--vl-padding)',
              fontFamily: 'var(--vl-font-family)',
              fontSize: 'var(--vl-font-size)',
              color: 'var(--color-text-primary)',
              outline: 'none',
              appearance: 'none',
              fontWeight: 'var(--font-weight-bold)'
          }}
        >
          {options.map(o => <option key={o}>{o}</option>)}
        </select>
      </div>
    );
};

export const Checkbox = ({ label, checked, style }: { label: string, checked?: boolean, style?: React.CSSProperties }) => (
    <label className="vibe-checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', cursor: 'pointer', ...style }}>
        <div
            className="vibe-checkbox-box"
            style={{
                width: '20px',
                height: '20px',
                borderWidth: 'var(--border-width)',
                borderStyle: 'solid',
                borderRadius: 'var(--radius-xs)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                backgroundColor: checked ? 'var(--color-role-accent)' : 'var(--color-surface)',
                borderColor: checked ? 'var(--color-role-accent)' : 'var(--color-role-neutral-border)'
            }}
        >
            {checked && <span style={{ color: 'white', fontSize: '10px' }}>✓</span>}
        </div>
        <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>{label}</span>
    </label>
);

export const Radio = ({ label, name, checked, style }: { label: string, name: string, checked?: boolean, style?: React.CSSProperties }) => (
    <label className="vibe-radio-label" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', cursor: 'pointer', ...style }}>
        <div
            className="vibe-radio-box"
            style={{
                width: '20px',
                height: '20px',
                borderWidth: 'var(--border-width)',
                borderStyle: 'solid',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                borderColor: checked ? 'var(--color-role-accent)' : 'var(--color-role-neutral-border)'
            }}
        >
            {checked && <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--color-role-accent)', borderRadius: '50%' }} />}
        </div>
        <span style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>{label}</span>
    </label>
);

export const Slider = ({ label, value, style }: { label: string, value: number, style?: React.CSSProperties }) => (
    <div className="vibe-slider-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', ...style }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}>{label}</label>
            <span style={{ fontSize: '12px', fontWeight: 'bold', fontFamily: 'monospace' }}>{value}%</span>
        </div>
        <div style={{ height: '6px', width: '100%', backgroundColor: 'var(--color-role-neutral-bg)', borderRadius: '999px', position: 'relative' }}>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    backgroundColor: 'var(--color-role-accent)',
                    borderRadius: '999px',
                    width: `${value}%`
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '16px',
                    height: '16px',
                    backgroundColor: 'white',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: 'var(--color-role-accent)',
                    borderRadius: '50%',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    left: `calc(${value}% - 8px)`
                }}
            />
        </div>
    </div>
);
