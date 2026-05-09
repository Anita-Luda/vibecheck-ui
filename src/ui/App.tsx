import React from 'react';
import { Shell } from './layout/Shell';
import { DashboardMock } from './mockups/dashboard';
import { EcommerceMock } from './mockups/ecommerce';
import { MobileMock } from './mockups/mobile';
import { SaasMock } from './mockups/saas';
import { EditorialMock } from './mockups/editorial';
import { SocialFeedMock } from './mockups/socialFeed';
import { SettingsMock } from './mockups/settings';
import { FormModalMock } from './mockups/formModal';
import { ChartMock } from './mockups/charts';
import { OnboardingMock } from './mockups/onboarding';

export const App = () => {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [showModal, setShowModal] = React.useState(false);

  const tabs = [
    'dashboard', 'ecommerce', 'mobile', 'saas', 'editorial',
    'social', 'settings', 'charts', 'onboarding'
  ];

  return (
    <Shell>
      <div className="max-w-7xl mx-auto space-y-8 pb-32">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 border-b border-gray-200/20 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`pb-2 px-4 capitalize transition-all ${activeTab === tab ? 'border-b-2 border-[var(--color-text)] font-bold text-[var(--color-text)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <button
              onClick={() => setShowModal(true)}
              className="text-xs bg-[var(--color-accent)] text-white px-4 py-2 rounded-full hover:opacity-90 transition-all font-bold shadow-md"
          >
              Otwórz Modal
          </button>
        </div>

        <div className="min-h-[700px] transition-all duration-500">
          {activeTab === 'dashboard' && <DashboardMock />}
          {activeTab === 'ecommerce' && <EcommerceMock />}
          {activeTab === 'mobile' && <MobileMock />}
          {activeTab === 'saas' && <SaasMock />}
          {activeTab === 'editorial' && <EditorialMock />}
          {activeTab === 'social' && <SocialFeedMock />}
          {activeTab === 'settings' && <SettingsMock />}
          {activeTab === 'charts' && <ChartMock />}
          {activeTab === 'onboarding' && <OnboardingMock />}
        </div>
      </div>
      {showModal && <div className="fixed inset-0 z-[200]" onClick={() => setShowModal(false)}><FormModalMock /></div>}
    </Shell>
  );
};
