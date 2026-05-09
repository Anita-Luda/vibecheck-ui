import React from 'react';

export const Input = ({ label }: { label: string }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium">{label}</label>
    <input type="text" className="px-3 py-2 border rounded-[var(--radius-base)]" />
  </div>
);
