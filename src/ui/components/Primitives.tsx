import React from 'react';

export const Badge = ({ children, id, role, style }: { children: React.ReactNode, id?: number, role?: string, style?: React.CSSProperties }) => {
  const roleName = role || (id !== undefined ? ['primary', 'secondary', 'accent', 'support', 'muted', 'destructive', 'neutral'][id] || 'accent' : 'accent');
  const bgColor = `var(--color-role-${roleName}-bg)`;
  const borderColor = `var(--color-role-${roleName}-border)`;
  const textColor = `var(--color-role-${roleName})`;

  return (
    <span
      className={`vibe-badge role-${roleName}`}
      style={{
        padding: '2px 8px',
        borderRadius: '9999px',
        fontSize: '10px',
        fontFamily: 'var(--vl-font-family)',
        fontWeight: 'var(--font-weight-bold)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        borderWidth: 'var(--border-width)',
        borderStyle: 'solid',
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: textColor,
        display: 'inline-block',
        ...style
      }}
    >
      {children}
    </span>
  );
};

export const Avatar = ({ src, alt, label, size = "md", id, role, style }: { src?: string, alt?: string, label?: string, size?: "sm" | "md" | "lg", id?: number, role?: string, style?: React.CSSProperties }) => {
  const sizeValue = size === "sm" ? "32px" : size === "lg" ? "64px" : "48px";
  const roleName = role || (id !== undefined ? ['primary', 'secondary', 'accent', 'support', 'muted', 'destructive', 'neutral'][id] || 'neutral' : 'neutral');
  const borderColor = `var(--color-role-${roleName}-border)`;
  const avatarLabel = label || alt || '?';

  return (
    <div
        className={`vibe-avatar role-${roleName}`}
        style={{
            width: sizeValue,
            height: sizeValue,
            borderRadius: '50%',
            overflow: 'hidden',
            borderWidth: 'var(--border-width)',
            borderStyle: 'solid',
            borderColor,
            backgroundColor: 'var(--color-surface-raised)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...style
        }}
    >
      {src ? (
          <img src={src} alt={avatarLabel} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
          <div style={{ fontSize: '14px', fontWeight: '900', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
              {avatarLabel[0]}
          </div>
      )}
    </div>
  );
};

export const Progress = ({ value, max = 100, id, role, style }: { value: number, max?: number, id?: number, role?: string, style?: React.CSSProperties }) => {
  const roleName = role || (id !== undefined ? ['primary', 'secondary', 'accent', 'support', 'muted', 'destructive', 'neutral'][id] || 'accent' : 'accent');
  const barColor = `var(--color-role-${roleName})`;
  const bgColor = `var(--color-role-${roleName}-bg)`;

  return (
    <div
        className={`vibe-progress-container role-${roleName}`}
        style={{
            width: '100%',
            height: '8px',
            borderRadius: '9999px',
            overflow: 'hidden',
            backgroundColor: bgColor,
            ...style
        }}
    >
      <div
        className="vibe-progress-bar"
        style={{
            height: '100%',
            width: `${(value / max) * 100}%`,
            backgroundColor: barColor,
            transition: 'width 0.5s ease'
        }}
      />
    </div>
  );
};

export const Spinner = ({ id, role, style }: { id?: number, role?: string, style?: React.CSSProperties }) => {
  const roleName = role || (id !== undefined ? ['primary', 'secondary', 'accent', 'support', 'muted', 'destructive', 'neutral'][id] || 'accent' : 'accent');
  const color = `var(--color-role-${roleName})`;

  return (
    <div
      className={`vibe-spinner role-${roleName}`}
      style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderTopColor: color,
          animation: 'vibe-spin 1s linear infinite',
          ...style
      }}
    />
  );
};
