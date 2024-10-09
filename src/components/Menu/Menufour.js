import React from "react";
import Reservation from "../Allmenus/FirstMenu/Reservation";
import Bredcrumb from "../Bredcrumb/Main";
import Img from "../../assets/images/background/banner-image-2.jpg";
import MenuSection from "../Menhome/MenuSection";

function Menufour() {
  return (
    <>
      <Bredcrumb subtitle="Our Menu 4" title="DELICIOUS & AMAZING" Img={Img} />
      <MenuSection />
      <Reservation />
    </>
  );
}

export default Menufour;
