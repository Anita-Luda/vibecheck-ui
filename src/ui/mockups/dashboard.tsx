import React from 'react';
import { Card } from '../components/Card';
import { Grid } from '../layout/Grid';

export const DashboardMock = () => (
  <section className="space-y-6">
    <header>
      <h1 className="text-2xl font-bold">Analityka Kwantowego Ziemniaka</h1>
      <p className="text-gray-500">Monitoring bulw w czasie rzeczywistym</p>
    </header>
    <Grid cols={3}>
      <Card>
        <div className="text-sm text-gray-500 uppercase">Poziom Entropii</div>
        <div className="text-3xl font-mono">42.069%</div>
      </Card>
      <Card>
        <div className="text-sm text-gray-500 uppercase">Gęstość Hovercatów</div>
        <div className="text-3xl font-mono">Wysoka</div>
      </Card>
      <Card>
        <div className="text-sm text-gray-500 uppercase">Iloraz Wajbu</div>
        <div className="text-3xl font-mono">∞</div>
      </Card>
    </Grid>
    <article className="p-6 bg-[var(--color-support)] rounded-[var(--radius-base)]">
        <h3 className="font-bold mb-2">Ostatni Alert: Nadkrytyczne Smażenie</h3>
        <p className="text-sm">Wykryto próbę frytkowania w sektorze 7G. Prosimy o zachowanie spokoju i nie używanie keczupu.</p>
    </article>
  </section>
);
