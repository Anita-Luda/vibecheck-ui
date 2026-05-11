import React from 'react';
import { Card } from '../components/Card';
import { Badge, Spinner } from '../components/Primitives';
import { Button } from '../components/Button';
import { List } from '../components/DataDisplay';

export const DevToolsMock = () => (
    <div className="flex flex-col h-[800px] bg-[#0d1117] text-[#c9d1d9] font-mono border border-[var(--color-role-neutral-border)] rounded-[var(--radius-lg)] overflow-hidden">
        {/* Topbar / Tabs */}
        <header className="flex items-center bg-[#161b22] border-b border-[#30363d] px-4 h-12 gap-4">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex gap-px h-full">
                {['main.ts', 'vibe_engine.py', 'potato_db.sql'].map((file, i) => (
                    <div key={file} className={`flex items-center px-4 gap-2 text-xs border-r border-[#30363d] ${i === 0 ? 'bg-[#0d1117] border-t-2 border-[var(--color-role-accent)]' : ''}`}>
                        <span>{file}</span>
                        <span className="opacity-50 hover:opacity-100 cursor-pointer text-[10px]">✕</span>
                    </div>
                ))}
            </div>
            <div className="flex-1" />
            <Button id={0} className="py-1 px-3 text-[10px] bg-[#238636] border-none">DEPLOY 🚀</Button>
        </header>

        <div className="flex flex-1 overflow-hidden">
            {/* Sidebar / File Explorer */}
            <aside className="w-64 bg-[#161b22] border-r border-[#30363d] p-4 text-[13px] space-y-4">
                <div className="font-bold text-xs uppercase opacity-50 tracking-widest">Projekt: VibeEngine</div>
                <div className="space-y-1">
                    {['src', 'tests', 'docs', 'config', 'README.md', 'package.json'].map(f => (
                        <div key={f} className={`flex items-center gap-2 p-1 hover:bg-[#21262d] rounded cursor-pointer ${f === 'src' ? 'text-blue-400' : ''}`}>
                            {f.includes('.') ? '📄' : '📁'} {f}
                        </div>
                    ))}
                </div>
                <div className="pt-6">
                    <div className="font-bold text-xs uppercase opacity-50 tracking-widest mb-2">Deployment Status</div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center bg-[#0d1117] p-2 rounded border border-[#30363d]">
                            <span className="text-[10px]">PROD-7G</span>
                            <Badge id={0}>LIVE</Badge>
                        </div>
                        <div className="flex justify-between items-center bg-[#0d1117] p-2 rounded border-[#30363d]">
                            <span className="text-[10px]">STAGING</span>
                            <Spinner id={1} />
                        </div>
                    </div>
                </div>
            </aside>

            {/* Code Editor Area */}
            <main className="flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 p-6 text-sm overflow-y-auto leading-relaxed">
                    <div className="flex gap-4">
                        <div className="opacity-30 select-none text-right w-8">
                            {Array.from({length: 20}).map((_, i) => <div key={i}>{i+1}</div>)}
                        </div>
                        <div className="flex-1">
                            <span className="text-purple-400">import</span> {'{ QuantumFryer }'} <span className="text-purple-400">from</span> <span className="text-green-400">'@vibecheck/core'</span>;<br/>
                            <br/>
                            <span className="text-blue-400">const</span> engine = <span className="text-blue-400">new</span> <span className="text-yellow-400">QuantumFryer</span>({'{'}<br/>
                            &nbsp;&nbsp;sector: <span className="text-green-400">'7G'</span>,<br/>
                            &nbsp;&nbsp;entropy: <span className="text-orange-400">0.42069</span>,<br/>
                            &nbsp;&nbsp;hovercatDetection: <span className="text-blue-400">true</span><br/>
                            {'}'});<br/>
                            <br/>
                            <span className="text-blue-400">async function</span> <span className="text-yellow-400">smażBulwę</span>(id: <span className="text-blue-400">string</span>) {'{'}<br/>
                            &nbsp;&nbsp;<span className="text-purple-400">try</span> {'{'}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">await</span> engine.<span className="text-yellow-400">ignite</span>(id);<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;console.<span className="text-yellow-400">log</span>(<span className="text-green-400">`Bulwa ${'id'} usmażona pomyślnie!`</span>);<br/>
                            &nbsp;&nbsp;{'}'} <span className="text-purple-400">catch</span> (wajbError) {'{'}<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;engine.<span className="text-yellow-400">panic</span>();<br/>
                            &nbsp;&nbsp;{'}'}<br/>
                            {'}'}
                        </div>
                    </div>
                </div>

                {/* Terminal */}
                <footer className="h-48 bg-[#0d1117] border-t border-[#30363d] p-4 font-mono">
                    <div className="flex gap-4 mb-2 text-xs border-b border-[#30363d] pb-2">
                        <span className="border-b-2 border-[var(--color-role-accent)] text-white">TERMINAL</span>
                        <span className="opacity-50">DEBUG CONSOLE</span>
                        <span className="opacity-50">OUTPUT</span>
                        <span className="opacity-50">PROBLEMS (0)</span>
                    </div>
                    <div className="text-xs space-y-1 overflow-y-auto h-32 scrollbar-hide">
                        <div className="text-[var(--color-text-muted)]">[14:20:01] Compiled successfully.</div>
                        <div className="text-blue-400">➜ vbc deploy --cluster potato-alpha</div>
                        <div className="text-green-400">✔ Cluster response received: 200 OK</div>
                        <div className="text-white animate-pulse">_</div>
                    </div>
                </footer>
            </main>

            {/* Right Panel / DB Explorer */}
            <aside className="w-64 bg-[#161b22] border-l border-[#30363d] p-4 text-[13px] space-y-4">
                <div className="font-bold text-xs uppercase opacity-50 tracking-widest">Baza Bulw (SQL)</div>
                <div className="bg-[#0d1117] border border-[#30363d] rounded">
                    <div className="p-2 border-b border-[#30363d] bg-[#21262d] font-bold">tabela: bulwy_aktywne</div>
                    <div className="p-2 space-y-2 text-[10px]">
                        <div className="flex justify-between border-b border-[#30363d] pb-1 italic">
                            <span>id (UUID)</span>
                            <span className="opacity-50">wajb (INT)</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-green-400">f420-b666</span>
                            <span>99</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-green-400">e123-c789</span>
                            <span>42</span>
                        </div>
                    </div>
                </div>
                <Button id={1} className="w-full text-[10px] bg-transparent border-[#30363d]">REFRESH DB</Button>
            </aside>
        </div>
    </div>
);
