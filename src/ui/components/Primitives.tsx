import React from 'react';

export const Badge = ({ children, id }: { children: React.ReactNode, id?: number }) => {
  const roleId = id !== undefined ? id : 'accent';
  const bgColor = `var(--color-role-${roleId}-bg)`;
  const borderColor = `var(--color-role-${roleId}-border)`;
  const textColor = `var(--color-role-${roleId})`;

  return (
    <span
      className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter border-[var(--border-width)]"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: textColor,
        fontWeight: 'var(--font-weight-bold)'
      }}
    >
      {children}
    </span>
  );
};

export const Avatar = ({ src, alt, size = "md", id }: { src?: string, alt?: string, size?: "sm" | "md" | "lg", id?: number }) => {
  const sizeClass = size === "sm" ? "w-8 h-8" : size === "lg" ? "w-16 h-16" : "w-12 h-12";
  const roleId = id !== undefined ? id : 'neutral';
  const borderColor = `var(--color-role-${roleId}-border)`;

  return (
    <div className={`${sizeClass} rounded-full overflow-hidden border-[var(--border-width)] bg-[var(--color-surface-raised)]`} style={{ borderColor }}>
      {src ? <img src={src} alt={alt} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-[var(--color-text-muted)] font-black uppercase">{alt?.[0] || '?'}</div>}
    </div>
  );
};

export const Progress = ({ value, max = 100, id }: { value: number, max?: number, id?: number }) => {
  const roleId = id !== undefined ? id : 'accent';
  const barColor = `var(--color-role-${roleId})`;
  const bgColor = `var(--color-role-${roleId}-bg)`;

  return (
    <div className="w-full h-[var(--spacing-2)] rounded-full overflow-hidden" style={{ backgroundColor: bgColor }}>
      <div
        className="h-full transition-all duration-500"
        style={{ width: `${(value / max) * 100}%`, backgroundColor: barColor }}
      />
    </div>
  );
};

export const Spinner = ({ id }: { id?: number }) => {
  const roleId = id !== undefined ? id : 'accent';
  const color = `var(--color-role-${roleId})`;
  return (
    <div
      className="w-[var(--spacing-6)] h-[var(--spacing-6)] border-2 border-transparent border-t-[var(--color-role-accent)] rounded-full animate-spin"
      style={{ borderTopColor: color }}
    />
  );
};
