import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/horizon-logo.svg";
import { restaurantInfo } from "../../constant";
import RestaurantHeadingInfo from "./RestaurantHeadingInfo";
import ReservationButton from "./ReservationButton";
import { memo } from "react";
import useDeviceType from "../../hooks/useDeviceType";
import { useTranslation } from "react-i18next";

function Header({ scrolled, isNavVisible }) {
  const { pathname } = useLocation();
  const isMobile = useDeviceType() === "mobile";
  const { t, i18n } = useTranslation();

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
                        src={logo}
                        alt=""
                        title={restaurantInfo.name}
                        style={{ width: 300, height: 130 }}
                      />
                    </Link>
                  </div>

                  {isMobile && (
                    <div className="nav-toggler">
                      <button>
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
                            <li
                              className={pathname === page.url && "current"}
                              key={index}
                            >
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
