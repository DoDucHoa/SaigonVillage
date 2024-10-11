import React from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import bg25 from "../../assets/images/background/bg-25.png";
import bg6 from "../../assets/images/background/bg-6.png";
import restro from "../../assets/images/resource/restaurant.png";

function Contactbanner() {
  return (
    <>
      <div className="contact-map">
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d936.9984969512739!2d10.893062599706012!3d48.37528012661153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ebd4531e61a03%3A0xab5292923e02589!2sSaigon%20Village!5e0!3m2!1sen!2sde!4v1728678570561!5m2!1sen!2sde"
          width="100%"
          height="500"
          style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Iframe>
      </div>

      <section className="contact-page">
        <div className="left-bg">
          <img src={bg25} alt="" title="" />
        </div>
        <div className="right-bg">
          <img src={bg6} alt="" title="" />
        </div>

        <div className="location-center">
          <div className="auto-container">
            <div className="cinfo-box">
              <div className="row clearfix">
                <div className="contactinfo-block col-lg-4 col-md-4 col-sm-12">
                  <div
                    className="inner-box wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <h4>Lunch Time</h4>
                    <div className="text">
                      {" "}
                      Monday to Sunday <br /> 11.00 am - 2.30pm
                    </div>
                  </div>
                </div>

                <div className="contactinfo-block col-lg-4 col-md-4 col-sm-12">
                  <div
                    className="inner-box cp-seprator wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                  >
                    <h4>Contact Info</h4>
                    <div className="text">
                      Auf dem Kreuz 19, 86152 Augsburg, DE
                      <br />
                      Email : info@saigonvillage.de
                    </div>
                    <div className="more-link">
                      <Link to="#">Booking : +49 821 504 763 59</Link>
                    </div>
                  </div>
                </div>

                <div className="contactinfo-block col-lg-4 col-md-4 col-sm-12">
                  <div
                    className="inner-box wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="600ms"
                  >
                    <h4>Dinner Time</h4>
                    <div className="text">
                      Monday to Sunday
                      <br />
                      5.30 pm - 11.30 pm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="auto-container">
          <div className="c-page-form-box">
            <div className="row clearfix">
              <div className="loc-block col-lg-6 col-md-12 col-sm-12">
                <div className="title-box centered">
                  <h2>Message us</h2>
                  <div className="text desc">
                    Have a question about the our service? We're here to help,
                    contact us today
                  </div>
                </div>
                <div className="default-form reservation-form">
                  <form method="post" action="/">
                    <div className="clearfix">
                      <div className="form-group">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="fieldname"
                            placeholder="Your Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="fieldname"
                            placeholder="Your Email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="fieldname"
                            placeholder="Phone Number"
                            required=""
                          />
                        </div>
                      </div>

                      <div className="form-group ">
                        <div className="field-inner">
                          <textarea
                            name="fieldname"
                            placeholder="Special Request"
                            required=""
                          ></textarea>
                        </div>
                      </div>

                      <div className="form-group">
                        <button
                          type="submit"
                          className="theme-btn btn-style-one clearfix"
                        >
                          <span className="btn-wrap">
                            <span className="text-one">send your message</span>
                            <span className="text-two">send your message</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="loc-block col-lg-6 col-md-12 col-sm-12">
                <img src={restro} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactbanner;
