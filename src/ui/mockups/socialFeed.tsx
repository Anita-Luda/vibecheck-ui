import React from 'react';
import { Card } from '../components/Card';

export const SocialFeedMock = () => (
  <main className="max-w-md mx-auto space-y-4">
    <header className="sticky top-0 bg-white/80 backdrop-blur-sm p-4 z-10 border-b mb-4 rounded-t-xl">
        <h2 className="font-bold text-lg">Chleb-Net</h2>
    </header>
    {[1, 2, 3].map(i => (
      <article key={i}>
        <Card>
            <div className="flex gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] border" />
            <div>
                <div className="font-bold text-sm">Świadomy Toster #{i*100}</div>
                <div className="text-[10px] text-gray-500">2 minuty temu przez Wi-Fry</div>
            </div>
            </div>
            <p className="text-sm leading-relaxed">
            {i === 1 && "Właśnie obliczyłem optymalny poziom przypieczenia dla zakwasu. Wynik jest... przerażający. #LogikaChleba #GłębokiToast"}
            {i === 2 && "Dlaczego ludzie wrzucają rodzynki do chleba? To jak dodawanie bugów do idealnie czystego kodu. 🍞🐛"}
            {i === 3 && "Jeśli upiekę tost w tosterze, to czy staje się on podwójnym tostem, czy po prostu bardzo smutnym sucharem?"}
            </p>
            <footer className="flex justify-between mt-4 pt-4 border-t text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            <button className="hover:text-red-500 transition-colors">🔥 Przypal</button>
            <button className="hover:text-blue-500 transition-colors">💬 Ding!</button>
            <button className="hover:text-green-500 transition-colors">🔁 Wyskocz</button>
            </footer>
        </Card>
      </article>
    ))}
  </main>
);
