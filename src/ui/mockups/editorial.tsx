import React from 'react';

export const EditorialMock = () => (
  <article className="max-w-2xl mx-auto space-y-12 py-12 font-serif">
    <header className="text-center space-y-4">
      <div className="uppercase tracking-[0.3em] text-[10px] text-gray-400 font-sans font-bold">Wydanie #00 - Dolina Niesamowitości</div>
      <h1 className="text-5xl md:text-6xl font-serif italic leading-tight">Dlaczego Twoje Tostery Cię Szpiegują</h1>
      <div className="text-lg text-gray-600">Autor: Agent 404</div>
    </header>
    <section className="text-xl leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-2">
        Chromowana powierzchnia odbijała coś więcej niż tylko kuchenne kafelki. Odbijała upadek naszej prywatności. Każdego ranka, gdy chleb brązowiał, pakiety danych leciały w świat. Zaszyfrowane okruchy naszej egzystencji, przeznaczone dla wielkiego serwera w niebie...
    </section>
    <blockquote className="bg-[var(--color-support)] p-8 italic border-l-8 border-black text-lg">
        "Widziałem, jak do mnie mrugnął. Nie mechanicznie. Świadomie." - Anonimowy Entuzjasta Pieczywa
    </blockquote>
  </article>
);
