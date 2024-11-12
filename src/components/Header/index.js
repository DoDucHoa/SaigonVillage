import { Link, useLocation } from "react-router-dom";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import hori_logo from "../../assets/images/horizon-logo.svg";
import verti_logo from "../../assets/images/vertical-logo.svg";
import { restaurantInfo } from "../../constant";
import RestaurantHeadingInfo from "./RestaurantHeadingInfo";
import ReservationButton from "./ReservationButton";
import useDeviceType from "../../hooks/useDeviceType";

const PAGE_URL = [
  {
    name: "navbar.home",
    url: "/",
  },
  {
    name: "navbar.menu",
    url: "/menu",
  },
  {
    name: "navbar.about",
    url: "/about",
  },
  {
    name: "navbar.contact",
    url: "/contact",
  },
];

function Header({ scrolled, isNavVisible }) {
  const { pathname } = useLocation();
  const isMobile = useDeviceType() === "mobile";
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const currentClass = (page) => pathname === page.url && "current";

  const languages = [
    { code: "en", label: "English" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "de", label: "Deutsch" },
  ];

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
          onClick={() => setActive(false)} // Close sidebar when clicking on backdrop
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
              {PAGE_URL.map((page, index) => (
                <li className={currentClass(page)} key={index}>
                  <Link to={page.url}>{t(page.name)}</Link>
                </li>
              ))}
              <li className="dropdown">
                <Link to="#" onClick={() => setShow(!show)}>
                  {t("navbar.language")}
                  <button type="button" className="btn-expander">
                    <i className="far fa-angle-down"></i>
                  </button>
                </Link>

                <ul style={{ display: show ? "block" : "none" }}>
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      onClick={() => i18n.changeLanguage(lang.code)}
                    >
                      <Link>{lang.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
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
                          {PAGE_URL.map((page, index) => (
                            <li className={currentClass(page)} key={index}>
                              <Link to={page.url}>{page.name}</Link>
                            </li>
                          ))}
                          <li>
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
