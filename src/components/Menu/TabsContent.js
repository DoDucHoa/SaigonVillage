import { dishData, tabLabels } from "../../constant/MenuData";
import DishColumns from "./DishColumns";

export const TabsContent = ({ activeTab }) => (
  <div className="tabs-content">
    {tabLabels.map(
      (label) =>
        activeTab === label.id && (
          <div key={label.id} className="tab active-tab" id={label.id}>
            <DishColumns dishes={dishData[label.id]} />
          </div>
        )
    )}
  </div>
);
