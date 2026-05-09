import React from 'react';

export const Button = ({ id, children, variant = 'primary' }: { id?: number, children: React.ReactNode, variant?: string }) => {
  const bgStyle = id !== undefined ? `var(--color-role-${id})` : 'var(--color-accent)';
  return (
    <button
        className={`px-4 py-2 rounded-[var(--radius-base)] text-white hover:opacity-90 transition-all font-bold shadow-[var(--shadow-style)] border-none cursor-pointer text-sm`}
        style={{ backgroundColor: bgStyle }}
    >
        {children}
    </button>
  );
};
