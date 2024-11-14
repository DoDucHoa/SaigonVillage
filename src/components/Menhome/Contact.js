import { Link } from "react-router-dom";
import Bgtwo from "../../assets/images/background/Restaurant2.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import author1 from "../../assets/images/resource/author-thumb-1.jpg";
// import author2 from "../../assets/images/resource/author-thumb-2.jpg";
// import author3 from "../../assets/images/resource/author-thumb-3.jpg";
import SwiperCore, { Controller } from "swiper";
import { restaurantInfo } from "../../constant";
import { useTranslation } from "react-i18next";
import ContactForm from "../ContactForm";

SwiperCore.use([Controller]);
function Contact() {
  const { t } = useTranslation();
  // const swiper1 = useRef(null);
  // const swiper2 = useRef(null);

  // const [flag, setflag] = useState(false);

  // const slider2 = useRef();
  // const duration = 500;
  // const syncPosition = (e) => {
  //   if (!flag) {
  //     setflag(false);
  //     if (slider2.current) {
  //       slider2.current.to(e.item.index, duration);
  //     }
  //     setflag(false);
  //   }
  // };

  return (
    <>
      <div className="testimonials-section">
        <div
          className="image-layer"
          style={{ backgroundImage: `url(${Bgtwo})` }}
        ></div>
        {/* <div className="auto-container">
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
        </div> */}
      </div>

      <section className="reserve-section">
        <div className="auto-container">
          <div className="outer-box">
            <div className="row clearfix">
              <div className="reserv-col col-lg-8 col-md-12 col-sm-12 mx-auto">
                <div className="inner">
                  <div className="title">
                    <h2>Online Reservation</h2>
                    <div className="request-info">
                      {t("contact.description1")}{" "}
                      <Link to={"tel:" + restaurantInfo.phone}>
                        {restaurantInfo.phone}
                      </Link>{" "}
                      {t("contact.description2")}
                    </div>
                  </div>
                  <div className="default-form reservation-form">
                    <ContactForm />
                  </div>
                </div>
              </div>
              {/* <div className="info-col col-lg-4 col-md-12 col-sm-12">
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
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
