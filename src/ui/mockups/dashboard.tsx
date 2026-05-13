import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Grid } from '../layout/Grid';
import { Badge, Avatar, Progress } from '../components/Primitives';
import { Table } from '../components/DataDisplay';
import { Tabs } from '../components/Navigation';

export const DashboardMock = () => {
  const [activeTab, setActiveTab] = React.useState('Przegląd');

  return (
    <div className="dashboard-root space-y-[var(--section-gap)]">
      <header className="dashboard-header flex flex-col md:flex-row justify-between items-start md:items-center gap-[var(--item-gap)] bg-[var(--color-surface)] p-[var(--container-padding)] rounded-[var(--radius-lg)] border-[var(--border-width)] border-[var(--color-tone-200)] shadow-[var(--shadow-base)]">
        <div className="space-y-[var(--spacing-1)]">
          <h1 className="text-2xl md:text-4xl font-[var(--font-weight-bold)] text-[var(--color-text-primary)] tracking-tighter leading-[var(--line-height-tight)]">
            Analityka Kwantowego Ziemniaka
          </h1>
          <p className="text-sm md:text-base text-[var(--color-text-muted)] font-[var(--font-weight-bold)]">System monitorowania bulw klasy enterprise v8.4</p>
        </div>
        <div className="flex items-center gap-[var(--item-gap)] w-full md:w-auto">
            <Avatar alt="Admin" />
            <Button id={0} className="flex-1 md:flex-none">Pobierz Raport PDF</Button>
        </div>
      </header>

      <div className="overflow-x-auto pb-2">
        <Tabs
          tabs={['Przegląd', 'Szczegóły Bulw', 'Logi Smażenia', 'Ustawienia Sektora']}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>

      <Grid cols={1} className="md:grid-cols-2 xl:grid-cols-4">
        <Card id={0} className="card-entropy">
          <div className="flex justify-between items-start mb-[var(--spacing-4)]">
            <span className="text-[10px] font-black uppercase text-[var(--color-tone-500)] tracking-widest">Poziom Entropii</span>
            <Badge id={0}>↑ 12%</Badge>
          </div>
          <div className="text-4xl font-black text-[var(--color-text-primary)] mb-[var(--spacing-2)]">42.069%</div>
          <Progress value={42} id={0} />
        </Card>

        <Card id={1}>
          <span className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest block mb-[var(--spacing-4)]">Gęstość Hovercatów</span>
          <div className="text-4xl font-black text-[var(--color-text-primary)] mb-[var(--spacing-1)]">Wysoka</div>
          <p className="text-xs text-[var(--color-text-muted)] font-[var(--font-weight-bold)]">Wykryto 156 jednostek w sektorze C</p>
        </Card>

        <Card id={2}>
          <span className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest block mb-[var(--spacing-4)]">Iloraz Wajbu</span>
          <div className="text-4xl font-black text-[var(--color-text-primary)] mb-[var(--spacing-1)]">∞</div>
          <p className="text-xs text-[var(--color-text-muted)] font-[var(--font-weight-bold)]">Stabilność powyżej krytycznej</p>
        </Card>

        <Card id={3}>
          <span className="text-[10px] font-black uppercase text-[var(--color-text-muted)] tracking-widest block mb-[var(--spacing-4)]">Aktywne Procesy</span>
          <div className="text-4xl font-black text-[var(--color-text-primary)] mb-[var(--spacing-4)]">1,248</div>
          <div className="flex -space-x-[var(--spacing-2)]">
              <Avatar size="sm" alt="U1" />
              <Avatar size="sm" alt="U2" />
              <Avatar size="sm" alt="U3" />
              <div className="w-[var(--spacing-8)] h-[var(--spacing-8)] rounded-[var(--radius-full)] bg-[var(--color-surface-raised)] border-[var(--border-width)] border-[var(--color-role-neutral-border)] flex items-center justify-center text-[10px] font-black text-[var(--color-text-muted)]">+4</div>
          </div>
        </Card>
      </Grid>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[var(--section-gap)]">
        <div className="lg:col-span-2 space-y-[var(--item-gap)] overflow-x-auto">
            <h3 className="text-xl font-black text-[var(--color-text-primary)]">Ostatnie Incydenty Bulwowe</h3>
            <Table
                headers={['ID Bulwy', 'Status', 'Gęstość Smażenia', 'Akcja']}
                rows={[
                    ['B-102', <Badge id={0}>Stabilna</Badge>, 'Low', <Button id={1} className="py-[var(--spacing-1)] px-[var(--spacing-3)] text-[10px]">Detale</Button>],
                    ['B-404', <Badge id={2}>Krytyczna</Badge>, 'Ultra', <Button id={2} className="py-[var(--spacing-1)] px-[var(--spacing-3)] text-[10px]">Interweniuj</Button>],
                    ['B-007', <Badge id={0}>Stabilna</Badge>, 'Medium', <Button id={1} className="py-[var(--spacing-1)] px-[var(--spacing-3)] text-[10px]">Detale</Button>],
                    ['B-666', <Badge id={3}>Piekielna</Badge>, 'Extreme', <Button id={3} className="py-[var(--spacing-1)] px-[var(--spacing-3)] text-[10px]">Egzorcyzm</Button>],
                ]}
            />
        </div>

        <Card id={4}>
          <h3 className="text-lg font-black text-[var(--color-text-primary)] mb-[var(--spacing-6)]">Szybkie Akcje</h3>
          <div className="space-y-[var(--item-gap)]">
              <Button id={0} className="w-full">Smaż Wszystko</Button>
              <Button id={1} className="w-full">Gotuj Bulwy</Button>
              <Button id={2} className="w-full">Resetuj Entropię</Button>
              <div className="pt-[var(--spacing-4)] border-t border-[var(--color-role-neutral-border)]">
                  <Button id={3} className="w-full bg-[var(--color-role-destructive)] border-none">AWARYJNY STOP</Button>
              </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
