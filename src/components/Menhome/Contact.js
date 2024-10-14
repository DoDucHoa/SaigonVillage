import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Bgtwo from "../../assets/images/background/image-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import author1 from "../../assets/images/resource/author-thumb-1.jpg";
import author2 from "../../assets/images/resource/author-thumb-2.jpg";
import author3 from "../../assets/images/resource/author-thumb-3.jpg";
import SwiperCore, { Controller } from "swiper";
import { restaurantInfo } from "../../constant";

SwiperCore.use([Controller]);
function Contact() {
  const swiper1 = useRef(null);
  const swiper2 = useRef(null);

  const [flag, setflag] = useState(false);

  const slider2 = useRef();
  const duration = 500;
  const syncPosition = (e) => {
    if (!flag) {
      setflag(false);
      if (slider2.current) {
        slider2.current.to(e.item.index, duration);
      }
      setflag(false);
    }
  };

  return (
    <>
      <div className="testimonials-section">
        <div
          className="image-layer"
          style={{ backgroundImage: `url(${Bgtwo})` }}
        ></div>
        <div className="auto-container">
          <div className="carousel-box owl-theme">
            <Swiper
              className="testi-top"
              ref={swiper1}
              controller={{ control: swiper2.current }}
              items={1}
              loop
              margin={10}
              autoplay
              onChange={(e) => syncPosition(e)}
            >
              <SwiperSlide className="slide-item">
                <div className="slide-content">
                  <div className="quotes">”</div>
                  <div className="text quote-text">
                    I wanted to thank you for inviting me down for that amazing
                    dinner the other night. The food was extraordinary.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-item">
                <div className="slide-content">
                  <div className="quotes">”</div>
                  <div className="text quote-text">
                    I wanted to thank you for inviting me down for that amazing
                    dinner the other night. The food was extraordinary.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-item">
                <div className="slide-content">
                  <div className="quotes">”</div>
                  <div className="text quote-text">
                    I wanted to thank you for inviting me down for that amazing
                    dinner the other night. The food was extraordinary.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-item">
                <div className="slide-content">
                  <div className="quotes">”</div>
                  <div className="text quote-text">
                    I wanted to thank you for inviting me down for that amazing
                    dinner the other night. The food was extraordinary.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-item">
                <div className="slide-content">
                  <div className="quotes">”</div>
                  <div className="text quote-text">
                    I wanted to thank you for inviting me down for that amazing
                    dinner the other night. The food was extraordinary.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-item">
                <div className="slide-content">
                  <div className="quotes">”</div>
                  <div className="text quote-text">
                    I wanted to thank you for inviting me down for that amazing
                    dinner the other night. The food was extraordinary.
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="separator">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="thumbs-carousel-box">
              <Swiper className="testi-thumbs" loop={true} autoplay={true}>
                <SwiperSlide className="slide-item">
                  <div className="image">
                    <img src={author1} alt="" />
                  </div>
                  <div className="auth-title">Sam Jhonson</div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="image">
                    <img src={author2} alt="" />
                  </div>
                  <div className="auth-title">Ian Botham</div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="image">
                    <img src={author3} alt="" />
                  </div>
                  <div className="auth-title">Dan Bitson</div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="image">
                    <img src={author1} alt="" />
                  </div>
                  <div className="auth-title">Sam Jhonson</div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="image">
                    <img src={author2} alt="" />
                  </div>
                  <div className="auth-title">Ian Botham</div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                  <div className="image">
                    <img src={author3} alt="" />
                  </div>
                  <div className="auth-title">Dan Bitson</div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <section className="reserve-section">
        <div className="auto-container">
          <div className="outer-box">
            <div className="row clearfix">
              <div className="reserv-col col-lg-8 col-md-12 col-sm-12">
                <div className="inner">
                  <div className="title">
                    <h2>Online Reservation</h2>
                    <div className="request-info">
                      Booking request <Link to="#">+88-123-123456</Link> or fill
                      out the order form
                    </div>
                  </div>
                  <div className="default-form reservation-form">
                    <form method="post" action="/">
                      <div className="row clearfix">
                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <div className="field-inner">
                            <input
                              type="text"
                              name="fieldname"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <div className="field-inner">
                            <input
                              type="text"
                              name="fieldname"
                              placeholder="Phone Number"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-sm-12">
                          <div className="field-inner">
                            <span className="alt-icon far fa-user"></span>
                            <select className="l-icon">
                              <option>1 Person</option>
                              <option>2 Person</option>
                              <option>3 Person</option>
                              <option>4 Person</option>
                              <option>5 Person</option>
                              <option>6 Person</option>
                              <option>7 Person</option>
                            </select>
                            <span className="arrow-icon far fa-angle-down"></span>
                          </div>
                        </div>
                        <div className="form-group col-lg-4 col-md-6 col-sm-12">
                          <div className="field-inner">
                            <span className="alt-icon far fa-calendar"></span>
                            <input
                              className="l-icon datepicker"
                              type="text"
                              name="fieldname"
                              placeholder="DD-MM-YYYY"
                              required
                              readOnly
                            />
                            <span className="arrow-icon far fa-angle-down"></span>
                          </div>
                        </div>
                        <div className="form-group col-lg-4 col-md-12 col-sm-12">
                          <div className="field-inner">
                            <span className="alt-icon far fa-clock"></span>
                            <select className="l-icon">
                              <option>08 : 00 am</option>
                              <option>09 : 00 am</option>
                              <option>10 : 00 am</option>
                              <option>11 : 00 am</option>
                              <option>12 : 00 pm</option>
                              <option>01 : 00 pm</option>
                              <option>02 : 00 pm</option>
                              <option>03 : 00 pm</option>
                              <option>04 : 00 pm</option>
                              <option>05 : 00 pm</option>
                              <option>06 : 00 pm</option>
                              <option>07 : 00 pm</option>
                              <option>08 : 00 pm</option>
                              <option>09 : 00 pm</option>
                              <option>10 : 00 pm</option>
                            </select>
                            <span className="arrow-icon far fa-angle-down"></span>
                          </div>
                        </div>
                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                          <div className="field-inner">
                            <textarea
                              name="fieldname"
                              placeholder="Message"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                          <div className="field-inner">
                            <button
                              type="submit"
                              className="theme-btn btn-style-one clearfix"
                            >
                              <span className="btn-wrap">
                                <span className="text-one">book a table</span>
                                <span className="text-two">book a table</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="info-col col-lg-4 col-md-12 col-sm-12">
                <div className="inner">
                  <div className="title">
                    <h2>Contact Us</h2>
                  </div>
                  <div className="data">
                    <div className="booking-info">
                      <div className="bk-title">Booking request</div>
                      <div className="bk-no">
                        <Link to={"tel:" + restaurantInfo.phone}>
                          {restaurantInfo.phone}
                        </Link>
                      </div>
                    </div>
                    <div className="separator">
                      <span></span>
                    </div>
                    <ul className="info">
                      <li>
                        <strong>Location</strong>
                        <br />
                        {restaurantInfo.address}
                      </li>
                      <li>
                        <strong>Lunch Time</strong>
                        <br />
                        Monday to Sunday <br />
                        11.00 am - 2.30pm
                      </li>
                      <li>
                        <strong>Dinner Time</strong>
                        <br />
                        Monday to Sunday <br />
                        05.00 pm - 10.00pm
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
