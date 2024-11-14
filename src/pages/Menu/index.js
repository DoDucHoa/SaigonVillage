import React from "react";
// import Reservation from "../../components/Reservation";
import Bredcrumb from "../../components/Bredcrumb/Main";
import Img from "../../assets/images/background/banner-image-2.jpg";
import MenuSection from "../../components/Menhome/MenuSection";
import { withHeader } from "../../hoc/withHeader";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation();
  return (
    <>
      <Bredcrumb subtitle={t("menu.menu")} title={t("menu.title")} Img={Img} />
      <MenuSection />
      {/* <Reservation /> */}
    </>
  );
}

export default withHeader(Menu);
