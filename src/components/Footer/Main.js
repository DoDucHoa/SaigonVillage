import React from "react";
import Backgroundimage from "../../assets/images/background/FooterFoot1.jpg";
import { Link } from "react-router-dom";
import logo from "../../assets/images/vertical-logo.svg";
import { restaurantInfo } from "../../constant";

function Main() {
  const year = new Date().getFullYear();

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
                            Booking Request : {restaurantInfo.phone}
                          </Link>
                        </li>
                        <li>{restaurantInfo.openTime}</li>
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
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/contact">Contact</Link>
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
                      <Link to="https://www.facebook.com">facebook</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="https://www.instagram.com">instagram</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="https://www.google.com/maps">Google map</Link>
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
              &copy; {year} Saigon Village Restaurant. All Rights Reserved.
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
