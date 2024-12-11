import PropTypes from "prop-types";
import { tabLabels } from "../../constant/MenuData";
import EmbeddedCanvaDesign from "./EmbeddedCanvaDesign";

export const TabsContent = ({ activeTab }) => {
  const activeLabel = tabLabels.find((label) => label.id === activeTab);

  if (!activeLabel) return null;

  return (
    <div className="tabs-content">
      <EmbeddedCanvaDesign key={activeLabel.id} embedLink={activeLabel.link} />
    </div>
  );
};

TabsContent.propTypes = {
  activeTab: PropTypes.string.isRequired,
};
