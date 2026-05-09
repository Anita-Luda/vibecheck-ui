import React from 'react';

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 bg-[var(--color-surface)] rounded-[var(--radius-base)] border border-gray-200 shadow-[var(--shadow-style)]">
    {children}
  </div>
);
