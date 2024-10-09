import React from 'react';
import Backgroundimage from '../../assets/images/background/image-7.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation } from 'swiper/core';
import quotesone from '../../assets/images/icons/quotes-1.png';
import authorthumb from '../../assets/images/resource/author-thumb-4.jpg';
import authorthumbone from '../../assets/images/resource/author-thumb-5.jpg';
import authorthumbtwo from '../../assets/images/resource/author-thumb-6.jpg';

SwiperCore.use([Navigation]);

function Testimonialsabout() {
  const show = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className="testimonials-two">
      <div className="image-layer" style={{ backgroundImage: `url(${Backgroundimage})` }}></div>
      <div className="auto-container">
        <div className="title-box centered">
          <div className="subtitle">
            <span>testimonials</span>
          </div>
          <div className="pattern-image">
            <img src={require('../../assets/images/icons/separator.svg').default} alt="mySvgImage" />
          </div>
          <h2>What People Are Saying</h2>
        </div>

        <div className="carousel-box">
          <Swiper className="testimonial-slider" {...show}>
            <SwiperSlide className="testi-block item">
              <div className="inner-box">
                <div className="quote-icon">
                  <img src={quotesone} alt="" title="" />
                </div>
                <div className="rating">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <div className="text">
                  The taste of food was really amazing, Wow! outstanding dinner made by Master chef John Rute, I never
                  forget this delicious food experience.
                </div>
                <div className="auth-info">
                  <div className="image">
                    <img src={authorthumb} alt="" />
                  </div>
                  <div className="auth-title">William Joe</div>
                  <div className="location">New York</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="testi-block item">
              <div className="inner-box">
                <div className="quote-icon">
                  <img src={quotesone} alt="" title="" />
                </div>
                <div className="rating">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <div className="text">
                  Hygienic food & fresh environment, everyone had a wonderful delight experience. It was FABULOUS! great
                  experience at The Italian gourmet.
                </div>
                <div className="auth-info">
                  <div className="image">
                    <img src={authorthumbone} alt="" />
                  </div>
                  <div className="auth-title">Theresa Tin</div>
                  <div className="location">Chicago</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="testi-block item">
              <div className="inner-box">
                <div className="quote-icon">
                  <img src={quotesone} alt="" title="" />
                </div>
                <div className="rating">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <div className="text">
                  Special treat to dine, It was a wow experience food was really delicious! outstanding dinner made by
                  Master chef, food experience was unforgettable!
                </div>
                <div className="auth-info">
                  <div className="image">
                    <img src={authorthumbtwo} alt="" />
                  </div>
                  <div className="auth-title">Michel Byrd</div>
                  <div className="location">Denmark</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-button-prev">
              <span className="fal fa-angle-left"></span>
            </div>
            <div className="swiper-button-next">
              <span className="fal fa-angle-right"></span>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonialsabout;
