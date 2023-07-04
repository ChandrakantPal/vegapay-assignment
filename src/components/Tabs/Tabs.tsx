import * as React from "react";
import TabCard, { TabCardProps } from "./TabCard";

export type TabsType = Omit<TabCardProps, "active" | "onClick">[];

interface TabsProps {
  tabs: TabsType;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className={`grid items-center grid-flow-col auto-cols-auto gap-4`}>
      {tabs.map((item) => (
        <TabCard
          key={item.id}
          title={item.title}
          active={item.id === activeTab}
          onClick={setActiveTab}
          icon={item.icon}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Tabs;
