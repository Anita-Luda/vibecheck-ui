import React from 'react';

export const TextInput = ({ label, placeholder, type = "text", id }: { label?: string, placeholder?: string, type?: string, id?: number }) => {
  const roleId = id !== undefined ? id : 'neutral';
  const borderColor = `var(--color-role-${roleId}-border)`;
  const focusColor = `var(--color-role-accent)`;

  return (
    <div className="space-y-1.5 mb-4">
      {label && <label className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-[var(--color-surface)] border-[var(--border-width)] rounded-[var(--radius-base)] text-sm text-[var(--color-text-primary)] transition-all outline-none"
        style={{ borderColor: borderColor }}
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
      <div className="space-y-1.5 mb-4">
        {label && <label className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest">{label}</label>}
        <textarea
          placeholder={placeholder}
          className="w-full px-4 py-2 h-24 bg-[var(--color-surface)] border-[var(--border-width)] rounded-[var(--radius-base)] text-sm text-[var(--color-text-primary)] transition-all outline-none resize-none"
          style={{ borderColor }}
        />
      </div>
    );
};

export const Select = ({ label, options, id }: { label?: string, options: string[], id?: number }) => {
    const roleId = id !== undefined ? id : 'neutral';
    const borderColor = `var(--color-role-${roleId}-border)`;
    return (
      <div className="space-y-1.5 mb-4">
        {label && <label className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest">{label}</label>}
        <select
          className="w-full px-4 py-2 bg-[var(--color-surface)] border-[var(--border-width)] rounded-[var(--radius-base)] text-sm text-[var(--color-text-primary)] transition-all outline-none appearance-none"
          style={{ borderColor }}
        >
          {options.map(o => <option key={o}>{o}</option>)}
        </select>
      </div>
    );
};
