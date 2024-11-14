// Banner.js
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Slideone from "../../assets/images/background/HomePageFood1.jpg";
import Slidetwo from "../../assets/images/background/HomePageFood2.jpg";
import Slidethree from "../../assets/images/background/HomePageFood3.jpg";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";
import { useTranslation } from "react-i18next";
import ReservationButton from "../Header/ReservationButton";
import useDeviceType from "../../hooks/useDeviceType";

SwiperCore.use([Navigation]);

function Banner() {
  const { t } = useTranslation();
  const isMobile = useDeviceType() === "mobile";

  const translationKeys = [
    {
      line1: "banner.flavorSection.index_0.line1",
      line2: "banner.flavorSection.index_0.line2",
    },
    {
      line1: "banner.flavorSection.index_1.line1",
      line2: "banner.flavorSection.index_1.line2",
    },
    {
      line1: "banner.flavorSection.index_2.line1",
      line2: "banner.flavorSection.index_2.line2",
    },
  ];

  return (
    <Swiper
      className="banner-section banner-section-coustm"
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      <div className="banner-container">
        <div className="banner-slider">
          <div className="swiper-wrapper">
            {[Slideone, Slidetwo, Slidethree].map((image, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide slide-item"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="auto-container">
                  <div className="content-box">
                    <div className="content">
                      <div className="clearfix">
                        <div className="inner">
                          <div className="subtitle">
                            <span>{t("banner.delight")}</span>
                          </div>
                          <div className="pattern-image">
                            <img
                              src={
                                require("../../assets/images/icons/separator.svg")
                                  .default
                              }
                              alt="Separator"
                            />
                          </div>
                          <h1>
                            <span>
                              {t(translationKeys[index].line1)}
                              <br />
                              {t(translationKeys[index].line2)}
                            </span>
                          </h1>
                          <div className="text">
                            {t("banner.comeWithFamily")}
                          </div>
                          <div
                            className="links-box wow fadeInUp"
                            data-wow-delay="0ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="link">
                              <Link
                                to="/menu"
                                className="theme-btn btn-style-two clearfix"
                              >
                                <span className="btn-wrap">
                                  <span className="text-one">
                                    {t("banner.viewMenu")}
                                  </span>
                                  <span className="text-two">
                                    {t("banner.viewMenu")}
                                  </span>
                                </span>
                              </Link>
                            </div>
                            {isMobile && (
                              <div className="link" style={{ marginTop: 50 }}>
                                <Link
                                  target="_blank"
                                  to="https://www.quandoo.de/en/place/saigon-village-98291"
                                  className="theme-btn btn-style-two clearfix"
                                >
                                  <span className="btn-wrap">
                                    <span className="text-one">
                                      {t("navbar.booking")}
                                    </span>
                                    <span className="text-two">
                                      {t("navbar.booking")}
                                    </span>
                                  </span>
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </div>
      </div>
      <div className="swiper-button-prev">
        <span className="fal fa-angle-left"></span>
      </div>
      <div className="swiper-button-next">
        <span className="fal fa-angle-right"></span>
      </div>
    </Swiper>
  );
}

export default Banner;
