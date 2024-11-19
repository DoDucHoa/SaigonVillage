import { dishData, tabLabels } from "../../constant/MenuData";
import DishColumns from "./DishColumns";
import EmbeddedCanvaDesign from "./EmbeddedCanvaDesign";

export const TabsContent = ({ activeTab }) => (
  <div className="tabs-content">
    {tabLabels.map((label) => {
      if (activeTab !== label.id) return null; // Skip rendering for inactive tabs

      if (label.id === "lunch") {
        return <EmbeddedCanvaDesign key={label.id} embedLink={label.link} />;
      }

      if (label.id === "dinner") {
        return <EmbeddedCanvaDesign key={label.id} embedLink={label.link} />;
      }

      return (
        <div key={label.id} className="tab active-tab" id={label.id}>
          <DishColumns dishes={dishData[label.id]} />
        </div>
      );
    })}
  </div>
);
