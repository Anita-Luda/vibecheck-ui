import React from 'react';

export const Card = ({ id, children }: { id?: number, children: React.ReactNode }) => {
  const bgStyle = id !== undefined ? `var(--color-role-${id})` : 'var(--color-surface)';
  return (
    <div
        className="p-6 rounded-[var(--radius-base)] border border-gray-100 shadow-[var(--shadow-style)] transition-all duration-300"
        style={{ backgroundColor: bgStyle }}
    >
        {children}
    </div>
  );
};
