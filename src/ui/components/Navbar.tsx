import React from 'react';

export const Navbar = () => (
  <nav className="h-16 border-b flex items-center px-6 justify-between bg-[var(--color-bg)]">
    <div className="font-bold text-xl">VibeCheck UI</div>
    <div className="flex gap-4">
      <span className="text-gray-600">O Nas</span>
      <span className="text-gray-600">Eksploruj</span>
    </div>
  </nav>
);
