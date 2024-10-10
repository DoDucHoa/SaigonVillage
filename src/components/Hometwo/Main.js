import React from "react";
import Banner from "../Menhome/Banner";
import Offer from "../Menhome/Offer";
import Story from "../Menhome/Story";
import Specialdish from "../Menhome/Specialdish";
import MenuSection from "../Menhome/MenuSection";
import Whyus from "../Menhome/Whyus";
import ChefSection from "../Menhome/ChefSection";
import NewsSection from "../Menhome/NewsSection";
import Special from "../Menhome/Special";
import Contact from "../Menhome/Contact";
import Videosection from "../Menhome/Videosection";
import Feature from "../Menhome/Feature";
import { Link } from "react-router-dom";
import sidebarlogo from "../../assets/images/resource/sidebar-logo.png";

function Main() {
  return (
    <>
      <div className="menu-backdrop"> </div>

      <section className="hidden-bar">
        <div className="inner-box">
          <div className="cross-icon hidden-bar-closer">
            <span className="far fa-close"></span>
          </div>
          <div className="logo-box">
            <Link to="/" title="Delici - Restaurants React Template">
              <img
                src={sidebarlogo}
                alt=""
                title="Delici - Restaurants HTML Template"
              />
            </Link>
          </div>

          <div className="side-menu">
            <ul className="navigation clearfix">
              <li className="current dropdown">
                <Link to="/">Home</Link>
                <ul>
                  <li>
                    <Link to="/hometwo">Home 1 Left Header</Link>
                  </li>
                  <li>
                    <Link to="/">Home 1 Center Header</Link>
                  </li>
                  <li>
                    <Link to="/">Home 3 Video Hero</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/ourchefs">Our chefs</Link>
              </li>
              <li className="dropdown">
                <Link to="#">Pages</Link>
                <ul>
                  <li>
                    <Link to="#">Dropdown Menu 1</Link>
                  </li>
                  <li>
                    <Link to="#">Dropdown Menu 2</Link>
                  </li>
                  <li>
                    <Link to="#">Dropdown Menu 3</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="#">Dropdown Menu 4</Link>
                    <ul>
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
                    <Link to="#">Dropdown Lorem 5</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <h2>Visit Us</h2>
          <ul className="info">
            <li>
              Auf dem Kreuz 19, <br /> 86152 Augsburg, DE
            </li>
            <li>Open: 11:30 – 14:30 und 17:00 – 22:00</li>
            <li>
              <Link to="mailto:info@saigonvillage.de">
                info@saigonvillage.de
              </Link>
            </li>
          </ul>
          <div className="separator">
            <span></span>
          </div>
          <div className="booking-info">
            <div className="bk-title">Booking request</div>
            <div className="bk-no">
              <Link to="tel:+4982150476359">+49 821 504 763 59</Link>
            </div>
          </div>
        </div>
      </section>

      <Banner />
      <Offer />
      <Story />
      <Specialdish />
      <MenuSection />
      <Special />
      <Contact />
      <Whyus />
      <Feature />
      {/* <ChefSection /> */}
      {/* <Videosection /> */}
      {/* <NewsSection /> */}
    </>
  );
}

export default Main;
