import React, { useState } from "react";
// import { Link } from "react-router-dom";
import bgone from "../../assets/images/background/bg-5.png";
import bgtwo from "../../assets/images/background/bg-6.png";
import { TabsBox } from "../Menu/TabsBox";
import { DEFAULT_TAB } from "../../constant/MenuData";
import OptimizedImage from "../common/OptimizedImage";

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);

  return (
    <section className="menu-section">
      <BackgroundImage leftImage={bgone} rightImage={bgtwo} />

      <div className="auto-container">
        <TabsBox activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* <ViewAllButton /> */}
      </div>
    </section>
  );
};

const BackgroundImage = ({ leftImage, rightImage }) => (
  <>
    <div className="left-bg">
      <OptimizedImage 
        src={leftImage} 
        alt="Background decoration" 
        className="background-image"
        priority={true}
      />
    </div>
    <div className="right-bg">
      <OptimizedImage 
        src={rightImage} 
        alt="Background decoration" 
        className="background-image"
        priority={true}
      />
    </div>
  </>
);

// const ViewAllButton = () => (
//   <div className="open-timing">
//     <div className="link-box">
//       <Link to="#" className="theme-btn btn-style-two clearfix">
//         <span className="btn-wrap">
//           <span className="text-one">view all menu</span>
//           <span className="text-two">view all menu</span>
//         </span>
//       </Link>
//     </div>
//   </div>
// );

export default MenuSection;
