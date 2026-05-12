import React from 'react';

export const Grid = ({ children, cols = 3, className = "" }: { children: React.ReactNode, cols?: number, className?: string }) => {
    const gridCols: Record<number, string> = {
        1: 'lg:grid-cols-1',
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4'
    };

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols[cols] || 'lg:grid-cols-3'} gap-[var(--section-gap)] ${className}`}>
            {children}
        </div>
    );
};
