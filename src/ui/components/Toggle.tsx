import React from 'react';

export const Toggle = ({ label }: { label: string }) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" className="sr-only peer" />
    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-color-accent"></div>
    <span className="text-sm font-medium">{label}</span>
  </label>
);
