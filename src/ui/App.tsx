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
import { AIAppMock } from './mockups/ai_llm';
import { ProductivityMock } from './mockups/productivity';
import { FintechMock } from './mockups/fintech';
import { HealthcareMock } from './mockups/healthcare';
import { EducationMock } from './mockups/education';
import { DevToolsMock } from './mockups/devtools';
import { MarketingMock } from './mockups/marketing';
import { EnterpriseMock } from './mockups/enterprise';
import { ComponentLibraryMock } from './mockups/componentLibrary';

export const App = () => {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [showModal, setShowModal] = React.useState(false);

  const tabs = [
    'dashboard', 'Library', 'ecommerce', 'mobile', 'saas', 'editorial',
    'social', 'settings', 'charts', 'onboarding',
    'AI', 'productivity', 'fintech', 'healthcare', 'education', 'devtools', 'marketing', 'enterprise'
  ];

  return (
    <Shell>
      <div className="max-w-7xl mx-auto space-y-8 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex gap-2 sm:gap-4 border-b border-gray-200/20 overflow-x-auto whitespace-nowrap scrollbar-hide w-full sm:w-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`pb-2 px-3 sm:px-4 text-xs sm:text-sm capitalize transition-all ${activeTab === tab ? 'border-b-2 border-[var(--color-text-primary)] font-bold text-[var(--color-text-primary)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <button
              onClick={() => setShowModal(true)}
              className="text-[10px] sm:text-xs bg-[var(--color-role-accent)] text-white px-4 py-2 rounded-full hover:opacity-90 transition-all font-bold shadow-md whitespace-nowrap"
          >
              Otwórz Modal
          </button>
        </div>

        <div className="min-h-[700px] transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
          {activeTab === 'dashboard' && <DashboardMock />}
          {activeTab === 'ecommerce' && <EcommerceMock />}
          {activeTab === 'mobile' && <MobileMock />}
          {activeTab === 'saas' && <SaasMock />}
          {activeTab === 'editorial' && <EditorialMock />}
          {activeTab === 'social' && <SocialFeedMock />}
          {activeTab === 'settings' && <SettingsMock />}
          {activeTab === 'charts' && <ChartMock />}
          {activeTab === 'onboarding' && <OnboardingMock />}
          {activeTab === 'AI' && <AIAppMock />}
          {activeTab === 'productivity' && <ProductivityMock />}
          {activeTab === 'fintech' && <FintechMock />}
          {activeTab === 'healthcare' && <HealthcareMock />}
          {activeTab === 'education' && <EducationMock />}
          {activeTab === 'devtools' && <DevToolsMock />}
          {activeTab === 'marketing' && <MarketingMock />}
          {activeTab === 'enterprise' && <EnterpriseMock />}
          {activeTab === 'Library' && <ComponentLibraryMock />}
        </div>
      </div>
      {showModal && <FormModalMock onClose={() => setShowModal(false)} />}
    </Shell>
  );
};
