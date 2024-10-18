import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/horizon-logo.svg";
import { PAGE_URL, restaurantInfo } from "../../constant";
import RestaurantHeadingInfo from "./RestaurantHeadingInfo";
import ReservationButton from "./ReservationButton";
import { memo } from "react";
import useDeviceType from "../../hooks/useDeviceType";

function Header({ scrolled, isNavVisible }) {
  const { pathname } = useLocation();
  const isMobile = useDeviceType() === "mobile";

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
