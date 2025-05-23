import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../../assets/images/background/bg-1.png";
import bg2 from "../../assets/images/background/bg-2.png";
import offerimg1 from "../../assets/images/offer/SaigonStarterMain.jpg";
import offerimg2 from "../../assets/images/offer/CrispyDuckMain.jpg";
import offerimg3 from "../../assets/images/offer/PhoMain.jpg";
import { useTranslation } from "react-i18next";

function Offer() {
  const { t } = useTranslation();

  const offers = [
    {
      image: offerimg1,
      title: "Saigon Starter",
      link: "#",
    },
    {
      image: offerimg3,
      title: "Pho",
      link: "#",
    },
    {
      image: offerimg2,
      title: "Crispy Duck",
      link: "#",
    },
  ];

  return (
    <>
      <section className="we-offer-section">
        <div className="left-bot-bg">
          <img src={bg1} alt="" title="" />
        </div>
        <div className="right-top-bg">
          <img src={bg2} alt="" title="" />
        </div>
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">
              <span>{t("offer.subtitle")}</span>
            </div>
            <div className="pattern-image">
              <img
                src={require("../../assets/images/icons/separator.svg").default}
                alt="mySvgImage"
              />
            </div>
            <h2>{t("offer.title")}</h2>
            <div className="text">{t("offer.description")}</div>
          </div>
          <div className="row justify-content-center clearfix">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12"
              >
                <div
                  className="inner-box wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay={`${index * 300}ms`}
                >
                  <div className="image">
                    <Link to="#">
                      <img src={offer.image} alt="" />
                    </Link>
                  </div>
                  <h3>
                    <Link to="#">{offer.title}</Link>
                  </h3>
                  {/* <div className="more-link">
                    <Link to="#">view menu</Link>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Offer;
