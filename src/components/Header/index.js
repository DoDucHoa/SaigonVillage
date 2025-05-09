import { Link, useLocation } from "react-router-dom";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import hori_logo from "../../assets/images/horizon-logo.svg";
import verti_logo from "../../assets/images/vertical-logo.svg";
import { restaurantInfo, navigationConfig } from "../../constant";
import RestaurantHeadingInfo from "./RestaurantHeadingInfo";
import ReservationButton from "./ReservationButton";
import OpeningHours from "./OpeningHours";
import LanguageSwitcher from "./LanguageSwitcher";
import useDeviceType from "../../hooks/useDeviceType";

function Header({ scrolled, isNavVisible }) {
  const { pathname } = useLocation();
  const isMobile = useDeviceType() === "mobile";
  const { t } = useTranslation();
  const [active, setActive] = useState(false);

  const currentClass = (page) => pathname === page.url && "current";

  return (
    <>
      {active && (
        <div
          className="menu-backdrop"
          style={{ opacity: "1", visibility: "visible" }}
          onClick={() => setActive(false)}
        />
      )}

      <section className={`hidden-bar ${active && "visible-sidebar"}`}>
        <div className="inner-box">
          <div
            className="cross-icon hidden-bar-closer"
            onClick={() => setActive(false)}
          >
            <span className="far fa-close"></span>
          </div>
          <div className="logo-box">
            <Link to="/" title="Saigon Village">
              <img
                src={verti_logo}
                alt="Saigon Village logo"
                title="Saigon Village"
              />
            </Link>
          </div>

          <div className="side-menu">
            <ul className="navigation clearfix">
              {navigationConfig.map((page, index) => (
                <li className={currentClass(page)} key={index}>
                  <Link to={page.url}>{t(page.name)}</Link>
                </li>
              ))}
              <LanguageSwitcher isMobile={true} />
            </ul>
          </div>

          <h2>{t("navbar.visit")}</h2>
          <OpeningHours />
          <div className="separator">
            <span></span>
          </div>
          <div className="booking-info">
            <div className="bk-title">{t("navbar.bookingRequest")}</div>
            <div className="bk-no">
              <Link to={"tel:" + restaurantInfo.phone}>{restaurantInfo.phone}</Link>
            </div>
          </div>
        </div>
      </section>

      {isNavVisible && (
        <header
          className={`main-header ${scrolled && "fixed-header"} header-down`}
        >
          <RestaurantHeadingInfo />

          <div className="header-upper">
            <div className="auto-container">
              <div className="main-box">
                <div className="logo-boxtwo">
                  <div className="logo">
                    <Link to="/" title={restaurantInfo.name}>
                      <img
                        src={hori_logo}
                        alt=""
                        title={restaurantInfo.name}
                        style={{ width: 300, height: 130 }}
                      />
                    </Link>
                  </div>

                  {isMobile && (
                    <div className="nav-toggler">
                      <button onClick={() => setActive(true)}>
                        <span className="hamburger">
                          <span className="top-bun"></span>
                          <span className="meat"></span>
                          <span className="bottom-bun"></span>
                        </span>
                      </button>
                    </div>
                  )}
                </div>

                {!isMobile && (
                  <div className="nav-boxtwo clearfix">
                    <div className="nav-outertwo clearfix">
                      <nav className="main-menu">
                        <ul className="navigation clearfix">
                          {navigationConfig.map((page, index) => (
                            <li className={currentClass(page)} key={index}>
                              <Link to={page.url}>{t(page.name)}</Link>
                            </li>
                          ))}
                          <LanguageSwitcher />
                        </ul>
                      </nav>
                    </div>

                    <ReservationButton />
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default memo(Header);
