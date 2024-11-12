import { tabLabels } from "../../constant/MenuData";
import TabButton from "./TabButton";

export const TabButtons = ({ activeTab, setActiveTab }) => (
  <div className="buttons">
    <ul className="tab-buttons clearfix">
      {tabLabels.map((label) => (
        <TabButton
          key={label.id}
          label={label}
          isActive={activeTab === label.id}
          onClick={() => setActiveTab(label.id)}
        />
      ))}
    </ul>
  </div>
);
