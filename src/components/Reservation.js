import React from "react";
import { Link } from "react-router-dom";
import Bgone from "../assets/images/background/Restaurant1.jpg";
import Bgtwo from "../assets/images/background/image-11.jpg";
import { restaurantInfo } from "../constant";
import ContactForm from "./ContactForm";

function Reservation() {
  return (
    <>
      <section className="reserve-section style-two">
        <div
          className="image-layer"
          style={{ backgroundImage: `url(${Bgone})` }}
        ></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row clearfix">
              <div className="reserv-col col-lg-8 col-md-12 col-sm-12 mx-auto">
                <div className="inner">
                  <div className="title">
                    <h2>Online Reservation</h2>
                    <div className="request-info">
                      Booking request{" "}
                      <Link to={"tel:" + restaurantInfo.phone}>
                        {restaurantInfo.phone}
                      </Link>{" "}
                      or fill out the order form
                    </div>
                  </div>
                  <div className="default-form reservation-form">
                    <ContactForm />
                  </div>
                </div>
              </div>
              {/* <div className="info-col col-lg-4 col-md-12 col-sm-12">
                <div className="inner">
                  <div
                    className="img-layer"
                    style={{ backgroundImage: `url(${Bgtwo})` }}
                  ></div>

                  <div className="title">
                    <div className="subtitle">hot deal</div>
                    <h5>Lunch & Dinner Specials</h5>
                  </div>

                  <div className="data">
                    <div className="discount-info">
                      <div className="s-ttl">up to</div>
                      <div className="num">45%</div>
                      <div className="s-ttl">discount</div>
                    </div>
                    <div className="instruction">
                      • Not valid for online order <br />
                      • Non-refundable <br />
                      • Offer end on 25 Jan <br />
                    </div>
                    <div className="link-box">
                      <Link to="#" className="theme-btn btn-style-one clearfix">
                        <span className="btn-wrap">
                          <span className="text-one">book now</span>
                          <span className="text-two">book now</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reservation;
