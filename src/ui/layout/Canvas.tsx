import React from 'react';

export const Canvas = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-full h-[600px] bg-white border-2 border-dashed border-gray-300 rounded-xl overflow-hidden">
    {children}
  </div>
);
