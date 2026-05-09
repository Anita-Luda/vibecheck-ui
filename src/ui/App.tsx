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
import { ControlPanel } from './controls/ControlPanel';

export const App = () => {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [showModal, setShowModal] = React.useState(false);

  const tabs = [
    'dashboard', 'ecommerce', 'mobile', 'saas', 'editorial',
    'social', 'settings', 'charts', 'onboarding'
  ];

  return (
    <div className="relative min-h-screen">
      <ControlPanel />
      <Shell>
        <div className="max-w-6xl mx-auto space-y-8 pb-32">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 border-b overflow-x-auto whitespace-nowrap">
              {tabs.map(tab => (
                <button
                  key={tab}
                  className={`pb-2 px-4 capitalize transition-all ${activeTab === tab ? 'border-b-2 border-black font-bold' : 'text-gray-400 hover:text-gray-600'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button
                onClick={() => setShowModal(true)}
                className="text-xs bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
                Otwórz Modal
            </button>
          </div>

          <div className="bg-white p-12 rounded-[var(--radius-base)] shadow-[var(--shadow-style)] min-h-[700px] border border-gray-100 transition-all duration-500 overflow-hidden">
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
      </Shell>
      {showModal && <div onClick={() => setShowModal(false)}><FormModalMock /></div>}
    </div>
  );
};
