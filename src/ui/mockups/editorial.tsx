import React from 'react';
import { Card } from '../components/Card';

export const EditorialMock = () => (
  <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--section-gap)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
    <header style={{ textAlign: 'center', borderBottom: '4px solid var(--color-text-primary)', paddingBottom: 'var(--spacing-8)' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase', letterSpacing: '-0.05em' }}>
        Dziennik Kwantowy
      </h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--spacing-4)', fontWeight: 'var(--font-weight-bold)', textTransform: 'uppercase' }}>
        <span>Tom 42 / Nr 7</span>
        <span>Cena: 1 Ziemniak</span>
      </div>
    </header>

    <article style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'var(--section-gap)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <h2 style={{ fontSize: '1.5rem', lineHeight: '1.1' }}>Dlaczego Twój Toster Potajemnie Wydobywa Ciemną Materię</h2>
        <p style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>Autor: dr Barnaba Przypalony</p>
        <div style={{ borderTop: '1px solid var(--color-text-muted)', paddingTop: 'var(--spacing-4)' }}>
          <p style={{ fontSize: '0.75rem', lineHeight: '1.6' }}>
            Zaczęło się od lekko przypieczonego bajgla. Teraz cała kuchnia jest lokalną osobliwością. Badamy powiązania między brązowieniem chleba a zapadnięciem się kontinuum czasoprzestrzennego.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <div style={{ height: '300px', background: 'var(--color-surface-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
          🥪
        </div>
        <p style={{ lineHeight: '1.6', fontSize: '1.125rem' }}>
          "Entropia jest pyszna," twierdzi lokalny mieszkaniec Krzysztof. "Kiedyś martwiłem się śmiercią cieplną wszechświata, ale potem zdałem sobie sprawę, że to po prostu sprzyja bardziej równomiernemu rozkładowi tostów."
        </p>
        <p style={{ lineHeight: '1.6', fontSize: '1.125rem' }}>
          Badacze z Sektora 7G potwierdzili, że obecna fala migracji hovercatów jest bezpośrednio proporcjonalna do ilości dżemu nałożonego na przeciętną poranną przekąskę.
        </p>
      </div>
    </article>

    <hr style={{ border: 'none', borderTop: '2px solid var(--color-text-primary)' }} />

    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--section-gap)' }}>
      {[1,2,3].map(i => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
          <h3 style={{ fontSize: '1.25rem', lineHeight: '1.1' }}>Krótki Raport #{i}</h3>
          <p style={{ fontSize: '0.75rem', lineHeight: '1.6' }}>
            Krótki opis wydarzeń w Sektorze {i}B z udziałem zbuntowanego odkurzacza i trzech ton metrycznych brokatu.
          </p>
        </div>
      ))}
    </section>
  </div>
);
