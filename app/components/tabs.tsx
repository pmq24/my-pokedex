import { useState, type ReactNode } from 'react';

type TabProps = {
  label?: string;
  content: ReactNode;
};

type Props = {
  tabs: Record<string, TabProps>;
};

export default function Tabs({ tabs }: Props) {
  const [currentTab, setCurrentTab] = useState(Object.keys(tabs)[0]);

  return (
    <div className="w-full">
      <div className="tabs tabs-boxed flex justify-center">
        {Object.entries(tabs).map(([tabKey, tabProps]) => (
          <span
            key={tabKey}
            className={`tab ${currentTab === tabKey ? 'tab-active' : ''}`}
            onClick={() => setCurrentTab(tabKey)}
          >
            {tabProps.label || tabKey}
          </span>
        ))}
      </div>
      <div className="flex justify-center">{tabs[currentTab].content}</div>
    </div>
  );
}
