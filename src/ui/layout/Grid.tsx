import React from 'react';

export const Grid = ({ children, cols = 3 }: { children: React.ReactNode, cols?: number }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols} gap-6`}>
    {children}
  </div>
);
