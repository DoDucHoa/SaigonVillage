import { Link, useLocation } from "react-router-dom";
import hori_logo from "../../assets/images/horizon-logo.svg";
import verti_logo from "../../assets/images/vertical-logo.svg";
import { restaurantInfo } from "../../constant";
import RestaurantHeadingInfo from "./RestaurantHeadingInfo";
import ReservationButton from "./ReservationButton";
import { memo, useState } from "react";
import useDeviceType from "../../hooks/useDeviceType";
import { useTranslation } from "react-i18next";

function Header({ scrolled, isNavVisible }) {
  const { pathname } = useLocation();
  const isMobile = useDeviceType() === "mobile";
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState();

  const currentClass = (page) => pathname === page.url && "current";

  const PAGE_URL = [
    {
      name: t("navbar.home"),
      url: "/",
    },
    {
      name: t("navbar.menu"),
      url: "/menu",
    },
    {
      name: t("navbar.about"),
      url: "/about",
    },
    {
      name: t("navbar.contact"),
      url: "/contact",
    },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "de", label: "Deutsch" },
  ];

  // Function to handle language change
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      {active && (
        <div
          className="menu-backdrop"
          style={{ opacity: "1", visibility: "visible" }}
        />
      )}

      <section className={`hidden-bar ${active && "visible-sidebar"}`}>
        <div className="inner-box">
          <div
            className="cross-icon hidden-bar-closer"
            onClick={() => setActive(false)}
          >
            <span className="far fa-close" onClick={() => setActive(false)}>
              {" "}
            </span>
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
              {PAGE_URL.map((page, index) => (
                <li className={currentClass(page)} key={index}>
                  <Link to={page.url}>{page.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <h2>Visit Us</h2>
          <ul className="info">
            <li>{restaurantInfo.address}</li>
            <li>{restaurantInfo.openTime}</li>
            <li>
              <Link to={"mailto:" + restaurantInfo.email}>
                {restaurantInfo.email}
              </Link>
            </li>
          </ul>
          <div className="separator">
            <span></span>
          </div>
          <div className="booking-info">
            <div className="bk-title">Booking request</div>
            <div className="bk-no">
              <Link to={"tel:" + restaurantInfo.phone}>
                {restaurantInfo.phone}
              </Link>
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
                      <button>
                        <span
                          className="hamburger"
                          onClick={() => setActive(true)}
                        >
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
                          {PAGE_URL.map((page, index) => (
                            <li className={currentClass(page)} key={index}>
                              <Link to={page.url}>{page.name}</Link>
                            </li>
                          ))}
                          <li>
                            {/* Language Switcher Dropdown */}
                            <div className="language-switcher">
                              <select
                                onChange={handleLanguageChange}
                                defaultValue={""}
                              >
                                <option value="" disabled hidden>
                                  {t("navbar.language")}
                                </option>
                                {languages.map((lang) => (
                                  <option key={lang.code} value={lang.code}>
                                    {lang.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </li>
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
