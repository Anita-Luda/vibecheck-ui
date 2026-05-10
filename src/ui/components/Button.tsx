import React from 'react';

export const Button = ({ id, children, className = "" }: { id?: number, children: React.ReactNode, className?: string }) => {
  const roleId = id !== undefined ? id : 'accent';
  const baseColor = `var(--color-role-${roleId})`;
  const hoverColor = `var(--color-role-${roleId}-hover)`;
  const activeColor = `var(--color-role-${roleId}-active)`;
  const borderColor = `var(--color-role-${roleId}-border)`;

  return (
    <button
        className={`px-4 py-2 rounded-[var(--radius-base)] transition-all font-black border-[var(--border-width)] cursor-pointer text-sm tracking-tight ${className}`}
        style={{
            backgroundColor: baseColor,
            borderColor: borderColor,
            color: 'white',
            '--hover-bg': hoverColor,
            '--active-bg': activeColor,
        } as any}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = baseColor}
        onMouseDown={(e) => e.currentTarget.style.backgroundColor = activeColor}
        onMouseUp={(e) => e.currentTarget.style.backgroundColor = hoverColor}
    >
        {children}
    </button>
  );
};
