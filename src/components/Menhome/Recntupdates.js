import React from 'react'
import { Link } from 'react-router-dom'
import new1 from '../../assets/images/resource/news-1.jpg'
import new2 from '../../assets/images/resource/news-2.jpg'
import new3 from '../../assets/images/resource/news-3.jpg'


function Recntupdates() {
  return (
    <>
      <section className="news-section">
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle"><span>recent updates</span></div>

            <div className="pattern-image">
              <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
            </div>

            <h2> Upcoming Event </h2>
          </div>

          <div className="row justify-content-center clearfix">

            <div className="news-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <div className="image-box">
                  <div className="date"><span>15/09/2022</span></div>
                  <div className="image"><Link to="#"><img src={new2} alt="" /></Link></div>
                  <div className="over-content">
                    <div className="cat">Food, flavour</div>
                    <h4><Link to="#">Flavour so good you’ll try to eat with your eyes.</Link></h4>
                  </div>
                </div>
              </div>
            </div>


            <div className="news-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                <div className="image-box">
                  <div className="date"><span>08/09/2022</span></div>
                  <div className="image"><Link to="#"><img src={new1} alt="" /></Link></div>
                  <div className="over-content">
                    <div className="cat">healthy food</div>
                    <h4><Link to="#">Flavour so good you’ll try to eat with your eyes.</Link></h4>
                  </div>
                </div>
              </div>
            </div>


            <div className="news-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                <div className="image-box">
                  <div className="date"><span>03/09/2022</span></div>
                  <div className="image"><Link to="#"><img src={new3} alt="" /></Link></div>
                  <div className="over-content">
                    <div className="cat">recipie</div>
                    <h4><Link to="#">Flavour so good you’ll try to eat with your eyes.</Link></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lower-link-box text-center">
            <Link to="#" className="theme-btn btn-style-two clearfix">
              <span className="btn-wrap">
                <span className="text-one">view our blog</span>
                <span className="text-two">view our blog</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Recntupdates