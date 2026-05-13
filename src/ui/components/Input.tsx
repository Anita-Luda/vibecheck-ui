import React from 'react';

export const TextInput = ({ label, placeholder, type = "text", id, className = "", forceState, disabled }: { label?: string, placeholder?: string, type?: string, id?: number, className?: string, forceState?: 'focus', disabled?: boolean }) => {
  const roleId = id !== undefined ? id : 'neutral';
  const borderColor = `var(--color-role-${roleId}-border)`;
  const focusColor = `var(--color-role-accent)`;

  const displayBorder = forceState === 'focus' ? focusColor : borderColor;

  return (
    <div className={`space-y-[var(--spacing-1_5)] mb-[var(--spacing-4)] ${className} ${disabled ? 'opacity-40 grayscale' : ''}`}>
      {label && <label className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full bg-[var(--color-surface)] border-[var(--border-width)] rounded-[var(--radius-base)] outline-none"
        style={{
            borderColor: displayBorder,
            padding: 'var(--vl-padding)',
            fontFamily: 'var(--vl-font-family)',
            fontSize: 'var(--vl-font-size)',
            letterSpacing: 'var(--vl-letter-spacing)',
            cursor: disabled ? 'not-allowed' : 'text',
            transition: 'all var(--vl-transition-duration) var(--vl-transition-timing-function)'
        }}
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
          className="w-full bg-[var(--color-surface)] border-[var(--border-width)] rounded-[var(--radius-base)] outline-none resize-none"
          style={{
              borderColor,
              padding: 'var(--vl-padding)',
              fontFamily: 'var(--vl-font-family)',
              minHeight: '100px'
          }}
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
          className="w-full bg-[var(--color-surface)] border-[var(--border-width)] rounded-[var(--radius-base)] outline-none appearance-none font-[var(--font-weight-bold)]"
          style={{
              borderColor,
              padding: 'var(--vl-padding)',
              fontFamily: 'var(--vl-font-family)'
          }}
        >
          {options.map(o => <option key={o}>{o}</option>)}
        </select>
      </div>
    );
};

export const Checkbox = ({ label, checked }: { label: string, checked?: boolean }) => (
    <label className="flex items-center gap-3 cursor-pointer group">
        <div className={`w-5 h-5 border-[var(--border-width)] rounded-[var(--radius-xs)] flex items-center justify-center transition-all ${checked ? 'bg-[var(--color-role-accent)] border-[var(--color-role-accent)]' : 'bg-[var(--color-surface)] border-[var(--color-role-neutral-border)]'}`}>
            {checked && <span className="text-white text-[10px]">✓</span>}
        </div>
        <span className="text-sm font-bold text-[var(--color-text-primary)]">{label}</span>
    </label>
);

export const Radio = ({ label, name, checked }: { label: string, name: string, checked?: boolean }) => (
    <label className="flex items-center gap-3 cursor-pointer group">
        <div className={`w-5 h-5 border-[var(--border-width)] rounded-full flex items-center justify-center transition-all ${checked ? 'border-[var(--color-role-accent)]' : 'border-[var(--color-role-neutral-border)]'}`}>
            {checked && <div className="w-2.5 h-2.5 bg-[var(--color-role-accent)] rounded-full" />}
        </div>
        <span className="text-sm font-bold text-[var(--color-text-primary)]">{label}</span>
    </label>
);

export const Slider = ({ label, value }: { label: string, value: number }) => (
    <div className="space-y-2">
        <div className="flex justify-between items-center">
            <label className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest">{label}</label>
            <span className="text-xs font-mono font-bold">{value}%</span>
        </div>
        <div className="h-1.5 w-full bg-[var(--color-role-neutral-bg)] rounded-full relative">
            <div className="absolute top-0 left-0 h-full bg-[var(--color-role-accent)] rounded-full" style={{ width: `${value}%` }} />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[var(--color-role-accent)] rounded-full shadow-md" style={{ left: `calc(${value}% - 8px)` }} />
        </div>
    </div>
);
