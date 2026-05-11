import React from 'react';

export const Tabs = ({ tabs, activeTab, onChange }: { tabs: string[], activeTab: string, onChange: (tab: string) => void }) => {
  return (
    <div className="flex gap-4 border-b border-[var(--color-role-neutral-border)] mb-6">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`pb-2 px-1 text-sm font-black uppercase tracking-tighter transition-all border-b-2 ${
            activeTab === tab
              ? 'border-[var(--color-role-accent)] text-[var(--color-text-primary)]'
              : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border border-[var(--color-role-neutral-border)] rounded-[var(--radius-base)] overflow-hidden bg-[var(--color-surface)] mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex justify-between items-center hover:bg-[var(--color-surface-raised)] transition-colors"
      >
        <span className="font-bold text-[var(--color-text-primary)]">{title}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {isOpen && <div className="p-4 border-t border-[var(--color-role-neutral-border)] text-sm text-[var(--color-text-secondary)]">{children}</div>}
    </div>
  );
};
