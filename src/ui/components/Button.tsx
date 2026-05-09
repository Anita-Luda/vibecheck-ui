import React from 'react';

export const Button = ({ children, variant = 'primary' }: { children: React.ReactNode, variant?: string }) => (
  <button className={`px-4 py-2 rounded-md bg-color-accent text-white hover:opacity-90 transition-opacity font-[inherit] shadow-[var(--shadow-style)]`}>
    {children}
  </button>
);
