import React from 'react';

export const ChartMock = () => (
  <section className="space-y-10">
    <header className="flex justify-between items-end">
      <div className="space-y-1">
        <h3 className="text-gray-400 text-[10px] uppercase font-black tracking-[0.2em]">Indeks Korelacji</h3>
        <div className="text-3xl font-mono tracking-tighter">Kawa vs. Produktywność</div>
      </div>
      <div className="text-right">
        <div className="text-green-500 font-bold text-xl">↑ 420%</div>
        <div className="text-[10px] text-gray-400 font-mono">Ostatnie 24h Trzęsawki</div>
      </div>
    </header>

    <div className="h-80 flex items-end gap-1 px-4 border-b-2 border-l-2 border-gray-100 relative group">
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pr-4 opacity-10">
          {[1,2,3,4].map(i => <div key={i} className="border-t border-gray-400 w-full" />)}
      </div>
      {[40, 70, 45, 90, 65, 80, 95, 30, 55, 85, 100, 75].map((h, i) => (
        <div
          key={i}
          className="flex-1 bg-[var(--color-accent)] rounded-t-sm transition-all hover:bg-[var(--color-interaction)] cursor-help relative group/bar"
          style={{ height: `${h}%` }}
        >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 whitespace-nowrap z-10 transition-all font-mono">
                {h} Ziaren
            </div>
        </div>
      ))}
    </div>

    <footer className="flex justify-between text-[10px] text-gray-400 font-mono font-bold tracking-widest px-4">
      <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>23:59</span>
    </footer>
  </section>
);
