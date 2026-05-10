import React from 'react';
import { Card } from '../components/Card';
import { Grid } from '../layout/Grid';
import { Button } from '../components/Button';

export const DashboardMock = () => (
  <div className="space-y-8 max-w-7xl mx-auto">
    {/* Header Section */}
    <header className="flex justify-between items-end border-b border-gray-200/20 pb-6">
      <div>
        <h1 className="text-4xl font-black tracking-tight text-[var(--color-text)]">Analityka Kwantowego Ziemniaka</h1>
        <p className="text-[var(--color-text-muted)] mt-2 text-lg">System monitorowania bulw klasy enterprise v8.4</p>
      </div>
      <div className="flex gap-3">
        <Button id={4}>Pobierz Raport PDF</Button>
        <Button id={5} >Ustawienia Systemowe</Button>
      </div>
    </header>

    {/* Stats Grid */}
    <Grid cols={4}>
      <Card id={0}>
        <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Poziom Entropii</span>
            <span className="text-green-500 font-bold text-xs">↑ 12%</span>
        </div>
        <div className="text-4xl font-black mt-4 text-[var(--color-text)]">42.069%</div>
        <div className="w-full bg-black/5 h-1.5 mt-4 rounded-full overflow-hidden">
            <div className="bg-[var(--color-accent)] h-full w-[42%]" />
        </div>
      </Card>
      <Card id={1}>
        <span className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Gęstość Hovercatów</span>
        <div className="text-4xl font-black mt-4 text-[var(--color-text)]">Wysoka</div>
        <p className="text-[var(--color-text-muted)] text-xs mt-2">Wykryto 156 jednostek w sektorze C</p>
      </Card>
      <Card id={2}>
        <span className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Iloraz Wajbu</span>
        <div className="text-4xl font-black mt-4 text-[var(--color-text)]">∞</div>
        <p className="text-[var(--color-text-muted)] text-xs mt-2">Stabilność powyżej krytycznej</p>
      </Card>
      <Card id={3}>
        <span className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Aktywne Procesy</span>
        <div className="text-4xl font-black mt-4 text-[var(--color-text)]">1,248</div>
        <div className="flex -space-x-2 mt-4">
            {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />)}
        </div>
      </Card>
    </Grid>

    {/* Main Content Area */}
    <div className="grid grid-cols-3 gap-8">
        <section className="col-span-2 space-y-6">
            <Card id={0}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-[var(--color-text)]">Wykres Oscylacji Bulwy</h2>
                    <select className="bg-transparent border-none text-sm font-bold text-[var(--color-text-muted)]">
                        <option>Ostatnie 24h</option>
                        <option>7 dni</option>
                    </select>
                </div>
                <div className="h-64 w-full bg-black/5 rounded-lg flex items-end p-4 gap-2">
                    {[40, 70, 45, 90, 65, 80, 30, 55, 75, 50, 85, 60].map((h, i) => (
                        <div key={i} className="flex-1 bg-[var(--color-accent)] opacity-80 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                </div>
            </Card>

            <Card id={1}>
                <h2 className="text-xl font-bold mb-4 text-[var(--color-text)]">Ostatnie Logi Systemowe</h2>
                <div className="divide-y divide-gray-200/10">
                    {[
                        { time: '12:45', msg: 'Zainicjowano protokół "Chleb"', status: 'success' },
                        { time: '12:40', msg: 'Wykryto nadkrytyczne smażenie w sektorze 7G', status: 'error' },
                        { time: '12:35', msg: 'Hovercaty osiągnęły stan skupienia stały', status: 'warning' },
                        { time: '12:30', msg: 'Iloraz wajbu przekroczył skalę logarytmiczną', status: 'info' }
                    ].map((log, i) => (
                        <div key={i} className="py-3 flex justify-between items-center text-sm">
                            <div className="flex gap-4">
                                <span className="font-mono text-[var(--color-text-muted)]">{log.time}</span>
                                <span className="text-[var(--color-text)]">{log.msg}</span>
                            </div>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                log.status === 'error' ? 'bg-red-500/20 text-red-500' :
                                log.status === 'success' ? 'bg-green-500/20 text-green-500' : 'bg-blue-500/20 text-blue-500'
                            }`}>{log.status}</span>
                        </div>
                    ))}
                </div>
            </Card>
        </section>

        <aside className="space-y-6">
            <Card id={2}>
                <h2 className="text-lg font-bold mb-4 text-[var(--color-text)]">Szybkie Akcje</h2>
                <div className="grid grid-cols-2 gap-2">
                    {['Smaż', 'Gotuj', 'Piecz', 'Duś'].map(act => (
                        <button key={act} className="p-3 border border-gray-200/20 rounded-lg text-sm font-bold hover:bg-black/5 transition-colors text-[var(--color-text)]">
                            {act}
                        </button>
                    ))}
                </div>
            </Card>

            <article className="p-6 bg-[var(--color-accent)] text-white rounded-[var(--radius-lg)] shadow-[var(--shadow-style)]">
                <h3 className="font-black text-xl mb-2">Alert Krytyczny!</h3>
                <p className="text-sm opacity-90 mb-4">Wykryto próbę frytkowania w sektorze 7G. Prosimy o zachowanie spokoju i nie używanie keczupu.</p>
                <Button id={6} >Interweniuj</Button>
            </article>

            <Card id={3}>
                <h2 className="text-lg font-bold mb-4 text-[var(--color-text)]">Członkowie Zespołu</h2>
                <div className="space-y-3">
                    {['Janusz Kwantowy', 'Grażyna Wajb', 'Piotr Hovercat'].map(name => (
                        <div key={name} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[var(--color-support)]" />
                            <span className="text-sm font-medium text-[var(--color-text)]">{name}</span>
                        </div>
                    ))}
                </div>
            </Card>
        </aside>
    </div>
  </div>
);
