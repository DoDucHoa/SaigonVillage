import React from 'react'
import bg14 from '../../assets/images/background/bg-14.png'
import bg15 from '../../assets/images/background/bg-15.png'
import siconone from '../../assets/images/resource/s-icon-1.png'
import sicontwo from '../../assets/images/resource/s-icon-2.png'
import siconthree from '../../assets/images/resource/s-icon-3.png'
import siconfour from '../../assets/images/resource/s-icon-4.png'
import service from '../../assets/images/resource/service-image.png'


function Aboutservice() {
    return (
        <>
            <section className="services-section">
                <div className="left-bg"><img src={bg14} alt="" title="" /></div>
                <div className="right-bg"><img src={bg15} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>our services</span></div>

                        <div className="pattern-image">
                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Exquisite Restaurant in City</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="s-col col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="s-block">
                                    <div className="inner">
                                        <div className="icon-box"><img src={siconone} alt="" title="" /></div>
                                        <h4>Door Delivery</h4>
                                        <div className="text">Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been.</div>
                                    </div>
                                </div>
                                <div className="s-block alternate">
                                    <div className="inner">
                                        <div className="icon-box"><img src={sicontwo} alt="" title="" /></div>
                                        <h4>Fine Dining</h4>
                                        <div className="text">Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="s-col last col-lg-4 col-md-6 col-sm-12">
                            <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="s-block alternate">
                                    <div className="inner">
                                        <div className="icon-box"><img src={siconthree} alt="" title="" /></div>
                                        <h4>Outdoor Catering</h4>
                                        <div className="text">Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been.</div>
                                    </div>
                                </div>
                                <div className="s-block">
                                    <div className="inner">
                                        <div className="icon-box"><img src={siconfour} alt="" title="" /></div>
                                        <h4>Banquets Hall</h4>
                                        <div className="text">Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-col col-lg-4 col-md-12 col-sm-12">
                            <div className="inner wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image-box"><img src={service} alt="" title="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutservice