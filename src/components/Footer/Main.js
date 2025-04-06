import React from "react";
import Backgroundimage from "../../assets/images/background/FooterBackground1.jpg";
import { Link } from "react-router-dom";
import logo from "../../assets/images/vertical-logo.svg";
import { restaurantInfo } from "../../constant";
import { useTranslation } from "react-i18next";

function Main() {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <>
      <footer className="main-footer">
        <div
          className="image-layer"
          style={{ backgroundImage: `url(${Backgroundimage})` }}
        >
          {" "}
        </div>
        <div className="upper-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="foote r-col info-col col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner wow fadeInUp"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="logo">
                      <Link to="/" title="Saigon Village">
                        <img
                          style={{ width: 256, height: 256 }}
                          src={logo}
                          alt=""
                          title="Saigon Village Logo"
                        />
                      </Link>
                    </div>
                    <div className="info">
                      <ul>
                        <li>{restaurantInfo.address}</li>
                        <li>
                          <Link to="mailto:info@saigonvillage.de">
                            {restaurantInfo.email}
                          </Link>
                        </li>
                        <li>
                          <Link to="tel:+4982150476359">
                            {t("navbar.bookingRequest")} :{" "}
                            {restaurantInfo.phone}
                          </Link>
                        </li>
                        <li>{t("openTime")}</li>
                        <li>
                          {t("shortDays.monday") +
                            "-" +
                            t("shortDays.thursday") +
                            ": 11:30 - 14:30 / 17:30 - 22:00"}
                        </li>
                        <li>
                          {t("shortDays.friday") +
                            ": 11:30 - 14:30 / 17:30 - 23:00"}
                        </li>
                        <li>
                          {t("shortDays.saturday") +
                            ": 12:00 - 15:00 / 17:30 - 23:00"}
                        </li>
                        <li>
                          {t("shortDays.sunday") +
                            " & " +
                            t("shortDays.holiday") +
                            ": 12:00 - 15:00 / 17:30 - 22:00"}
                        </li>
                      </ul>
                    </div>
                    {/* <div className="separator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="newsletter">
                      <h3>Get News & Offers</h3>
                      <div className="text">
                        Subscribe us & Get <span>25% Off.</span>
                      </div>
                      <div className="newsletter-form">
                        <form method="post" action="/">
                          <div className="form-group">
                            <span className="alt-icon far fa-envelope"></span>
                            <input
                              type="email"
                              name="email"
                              placeholder="Your email"
                              required
                            />
                            <button
                              type="submit"
                              className="theme-btn btn-style-one clearfix"
                            >
                              <span className="btn-wrap">
                                <span className="text-one">subscribe</span>
                                <span className="text-two">subscribe</span>
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="footer-col links-col col-lg-3 col-md-6 col-sm-12">
                <div
                  className="inner wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <ul className="links">
                    <li>
                      {" "}
                      <Link to="/">{t("navbar.home")}</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/menu">{t("navbar.menu")}</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/contact">{t("navbar.contact")}</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-col links-col last col-lg-3 col-md-6 col-sm-12">
                <div
                  className="inner wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <ul className="links">
                    <li>
                      {" "}
                      <Link
                        target="_blank"
                        to="https://www.facebook.com/profile.php?id=100070449729371"
                      >
                        facebook
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        target="_blank"
                        to="https://www.instagram.com/saigonvillage_restaurant/profilecard/?igsh=MWNtZmhkY3duOHB0ag=="
                      >
                        instagram
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        target="_blank"
                        to="https://maps.app.goo.gl/RQkgNXPPHNxUTepc8"
                      >
                        Google map
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="auto-container">
            <div className="copyright">
              &copy; {year} {t("copyright")}
            </div>
          </div>
        </div>
      </footer>
      <div className="scroll-to-top scroll-to-target" data-target="html">
        <span className="icon fa fa-angle-up"></span>
      </div>
    </>
  );
}

export default Main;
