import React from 'react';

export const TextInput = ({ label, placeholder, type = "text", id, className = "", forceState }: { label?: string, placeholder?: string, type?: string, id?: number, className?: string, forceState?: 'focus' }) => {
  const roleId = id !== undefined ? id : 'neutral';
  const borderColor = `var(--color-role-${roleId}-border)`;
  const focusColor = `var(--color-role-accent)`;

  const displayBorder = forceState === 'focus' ? focusColor : borderColor;

  return (
    <div className={`space-y-[var(--spacing-1_5)] mb-[var(--spacing-4)] ${className}`}>
      {label && <label className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-[var(--input-padding-x)] py-[var(--input-padding-y)] bg-[var(--color-surface)] border-[var(--border-width)] rounded-[var(--radius-base)] text-sm text-[var(--color-text-primary)] transition-all outline-none leading-[var(--line-height-base)]"
        style={{ borderColor: displayBorder }}
        onFocus={(e) => e.currentTarget.style.borderColor = focusColor}
        onBlur={(e) => e.currentTarget.style.borderColor = borderColor}
      />
    </div>
  );
};

export const TextArea = ({ label, placeholder, id }: { label?: string, placeholder?: string, id?: number }) => {
    const roleId = id !== undefined ? id : 'neutral';
    const borderColor = `var(--color-role-${roleId}-border)`;
    return (
      <div className="space-y-[var(--spacing-1_5)] mb-[var(--spacing-4)]">
        {label && <label className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest">{label}</label>}
        <textarea
          placeholder={placeholder}
          className="w-full px-[var(--input-padding-x)] py-[var(--input-padding-y)] h-[var(--spacing-24)] bg-[var(--color-surface)] border-[var(--border-width)] rounded-[var(--radius-base)] text-sm text-[var(--color-text-primary)] transition-all outline-none resize-none leading-[var(--line-height-base)]"
          style={{ borderColor }}
        />
      </div>
    );
};

export const Select = ({ label, options, id, className = "" }: { label?: string, options: string[], id?: number, className?: string }) => {
    const roleId = id !== undefined ? id : 'neutral';
    const borderColor = `var(--color-role-${roleId}-border)`;
    return (
      <div className={`space-y-[var(--spacing-1_5)] mb-[var(--spacing-4)] ${className}`}>
        {label && <label className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest">{label}</label>}
        <select
          className="w-full px-[var(--input-padding-x)] py-[var(--input-padding-y)] bg-[var(--color-surface)] border-[var(--border-width)] rounded-[var(--radius-base)] text-sm text-[var(--color-text-primary)] transition-all outline-none appearance-none leading-[var(--line-height-base)] font-[var(--font-weight-bold)]"
          style={{ borderColor }}
        >
          {options.map(o => <option key={o}>{o}</option>)}
        </select>
      </div>
    );
};
