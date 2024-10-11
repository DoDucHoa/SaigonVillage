import { Link } from "react-router-dom";
import logonew from "../../assets/images/logo.png";
import { restaurantInfo } from "../../constant";
import RestaurantHeadingInfo from "./RestaurantHeadingInfo";
import ReservationButton from "./ReservationButton";
import { memo } from "react";

function Header({ scrolled, isNavVisible }) {
  return (
    <>
      {isNavVisible && (
        <header
          className={`main-header ${scrolled && "fixed-header"} header-down`}
        >
          <RestaurantHeadingInfo />

          <div className="header-upper">
            <div className="auto-container">
              <div className="main-box clearfix">
                <div className="logo-boxtwo">
                  <div className="logo">
                    <Link to="/" title={restaurantInfo.name}>
                      <img src={logonew} alt="" title={restaurantInfo.name} />
                    </Link>
                  </div>
                </div>

                <div className="nav-boxtwo clearfix">
                  <div className="nav-outertwo clearfix">
                    <nav className="main-menu">
                      <ul className="navigation clearfix">
                        <li className="current">
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>

                  <ReservationButton />

                  <div className="nav-togglertwo">
                    <button className="hidden-bar-opener">
                      <span className="hamburger">
                        <span className="top-bun"></span>
                        <span className="meat"></span>
                        <span className="bottom-bun"></span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default memo(Header);
