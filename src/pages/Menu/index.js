import React from "react";
import Reservation from "../../components/Allmenus/FirstMenu/Reservation";
import Bredcrumb from "../../components/Bredcrumb/Main";
import Img from "../../assets/images/background/banner-image-2.jpg";
import MenuSection from "../../components/Menhome/MenuSection";
import { withHeader } from "../../hoc/withHeader";

function Menu() {
  return (
    <>
      <Bredcrumb subtitle="Our Menu 4" title="DELICIOUS & AMAZING" Img={Img} />
      <MenuSection />
      <Reservation />
    </>
  );
}

export default withHeader(Menu);
