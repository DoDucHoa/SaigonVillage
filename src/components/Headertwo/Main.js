import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/resource/sidebar-logo.png";
import logonew from "../../assets/images/logo.png";
import Banner from "../Menhome/Banner";
import Offer from "../Menhome/Offer";
import Story from "../Menhome/Story";
import Specialdish from "../Menhome/Specialdish";
import MenuSection from "../Menhome/MenuSection";
import Whyus from "../Menhome/Whyus";
import Special from "../Menhome/Special";
import Contact from "../Menhome/Contact";

function Main() {
  const [active, setActive] = useState();
  const [show, setShow] = useState();
  const [menu, setMenu] = useState();
  const [page, setPage] = useState();
  const [drop, setDrop] = useState();

  const [scrolled, setScrolled] = useState(false);
  const [Nav, setNav] = useState(true);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1000) {
      setNav(false);
    } else if (offset > 200) {
      setNav(true);
      setScrolled(true);
    } else {
      setScrolled(false);
      setNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      {active && (
        <div
          className="menu-backdrop"
          style={{ opacity: "1", visibility: "visible" }}
          onClick={() => setActive(false)}
        ></div>
      )}
      <section
        className={`hidden-bar ${active && "visible-sidebar"}`}
        onClick={() => setActive(false)}
      >
        <div className="inner-box">
          <div
            className="cross-icon hidden-bar-closer"
            onClick={() => setActive(false)}
          >
            <span className="far fa-close"> </span>
          </div>
          <div className="logo-box">
            <Link to="/" title="Delici - Restaurants HTML Template">
              <img
                src={logo}
                alt=""
                title="Delici - Restaurants HTML Template"
              />
            </Link>
          </div>

          <div className="side-menu">
            <ul className="navigation clearfix">
              <li className="current dropdown">
                <Link
                  to="/"
                  onClick={() => setShow(show === true ? false : true)}
                >
                  Home
                  <button type="button" className="btn-expander">
                    <i className="far fa-angle-down"></i>
                  </button>
                </Link>
                <ul style={{ display: show ? "block" : "none" }}>
                  <li>
                    <Link to="/hometwo">Home 1 Left Header</Link>
                  </li>
                  <li>
                    <Link to="/">Home 1 Center Header</Link>
                  </li>
                  <li>
                    <Link to="/homethree">Home 3 Video Hero</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link
                  to="/menu"
                  onClick={() => setMenu(menu === true ? false : true)}
                >
                  Menu
                  <button type="button" className="btn-expander">
                    <i className="far fa-angle-down"></i>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/ourchefs">Our chefs</Link>
              </li>
              <li className="dropdown">
                <Link
                  to="/"
                  onClick={() => setPage(page === true ? false : true)}
                >
                  Pages
                  <button type="button" className="btn-expander">
                    <i className="far fa-angle-down"></i>
                  </button>
                </Link>
                <ul style={{ display: page ? "block" : "none" }}>
                  <li>
                    <Link to="/menuone">Dropdown Menu 1</Link>
                  </li>
                  <li>
                    <Link to="/menutwo">Dropdown Menu 2</Link>
                  </li>
                  <li>
                    <Link to="/menuthree">Dropdown Menu 3</Link>
                  </li>
                  <li className="dropdown">
                    <Link
                      to="/menufour"
                      onClick={() => setDrop(drop === true ? false : true)}
                    >
                      Dropdown Menu 4
                      <button type="button" className="btn-expander">
                        <i className="far fa-angle-down"></i>
                      </button>
                    </Link>
                    <ul style={{ display: drop ? "block" : "none" }}>
                      <li>
                        <Link to="#">Dropdown Menu level 2</Link>
                      </li>
                      <li>
                        <Link to="#">Dropdown Menu level 2</Link>
                      </li>
                      <li>
                        <Link to="#">Dropdown Menu Level 3</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#"> Dropdown Lorem 5 </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
            </ul>
          </div>

          <h2>Visit Us</h2>
          <ul className="info">
            <li>
              Auf dem Kreuz 19, <br /> 86152 Augsburg, DE{" "}
            </li>
            <li>Open: 9.30 am - 2.30pm</li>
            <li>
              <Link to="mailto:booking@domainame.com">
                booking@domainame.com
              </Link>
            </li>
          </ul>
          <div className="separator">
            <span></span>
          </div>
          <div className="booking-info">
            <div className="bk-title">Booking request</div>
            <div className="bk-no">
              <Link to="tel:+88-123-123456">+88-123-123456</Link>
            </div>
          </div>
        </div>
      </section>

      {Nav && (
        <header
          className={`main-header ${scrolled && "fixed-header"} header-down`}
        >
          <div className="header-top">
            <div className="auto-container">
              <div className="inner clearfix">
                <div className="top-left clearfix">
                  <ul className="top-info clearfix">
                    <li>
                      <i className="icon far fa-map-marker-alt"></i> Restaurant
                      St, Delicious City, London 9578, UK
                    </li>
                    <li>
                      <i className="icon far fa-clock"></i> Daily : 11:30 –
                      14:30 und 17:00 – 22:00
                    </li>
                  </ul>
                </div>
                <div className="top-right clearfix">
                  <ul className="top-info clearfix">
                    <li>
                      <Link to="tel:+4982150476359">
                        <i className="icon far fa-phone"></i> +49 821 504 763 59
                      </Link>
                    </li>
                    <li>
                      <Link to="mailto:info@saigonvillage.de">
                        <i className="icon far fa-envelope"></i>{" "}
                        info@saigonvillage.de
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="header-upper">
            <div className="auto-container">
              <div className="main-box clearfix">
                <div className="logo-boxtwo">
                  <div className="logo">
                    <Link
                      to="/hometwo"
                      title="Delici - Restaurants React Template"
                    >
                      <img
                        src={logonew}
                        alt=""
                        title="Delici - Restaurants React Template"
                      />
                    </Link>
                  </div>
                </div>

                <div className="nav-boxtwo clearfix">
                  {/* Navbar */}
                  <div className="nav-outertwo clearfix">
                    <nav className="main-menu">
                      <ul className="navigation clearfix">
                        <li className="current">
                          <Link to="/hometwo">Home</Link>
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

                  <div className="links-boxtwo clearfix">
                    <div className="link link-btn">
                      <Link
                        to="/reservation"
                        className="theme-btn btn-style-one clearfix"
                      >
                        <span className="btn-wrap">
                          <span className="text-one">find a table</span>
                          <span className="text-two">find a table</span>
                        </span>
                      </Link>
                    </div>
                    <div className="link info-toggler">
                      <button className="info-btn">
                        <span className="hamburger">
                          <span className="top-bun"></span>
                          <span className="meat"></span>
                          <span className="bottom-bun"></span>
                        </span>
                      </button>
                    </div>
                  </div>

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

      <Banner />
      <Offer />
      <Story />
      <Specialdish />
      <MenuSection />
      <Special />
      <Contact />
      <Whyus />
      {/* <ChefSection />
      <Videosection />
      <NewsSection /> */}
    </>
  );
}

export default Main;
