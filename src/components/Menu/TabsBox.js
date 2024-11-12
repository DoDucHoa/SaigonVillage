import { TabButtons } from "./TabButtons";
import { TabsContent } from "./TabsContent";

export const TabsBox = ({ activeTab, setActiveTab }) => (
  <div className="tabs-box menu-tabs">
    <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
    <TabsContent activeTab={activeTab} />
  </div>
);
