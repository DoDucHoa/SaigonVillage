import React from 'react'
import twoBg from '../../assets/images/background/image-5.jpg';
import threebg from '../../assets/images/background/image-6.jpg';
import { Link } from 'react-router-dom'
import bgfive from '../../assets/images/background/image-5.jpg'
import bg12 from '../../assets/images/background/bg-12.png'
import signaturetwo from '../../assets/images/resource/signature-2.png'
import bg13 from '../../assets/images/background/bg-13.png'

function Winningchef() {
    return (
        <>
            <section className="fluid-section">
                <div className="outer-container">
                    <div className="row clearfix">
                        <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image-layer" style={{ backgroundImage: `url(${twoBg})` }}></div>

                                <div className="image"><img src={bgfive} alt="" /></div>
                            </div>
                        </div>

                        <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="right-bg"><img src={bg12} alt="" title="" /></div>
                            <div className="inner clearfix wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="content-box">
                                    <div className="title-box centered">
                                        <div className="subtitle"><span>35 year of experience</span></div>
                                        <div className="pattern-image">
                                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                        </div>
                                        <h2>Award Winning Chef</h2>
                                        <div className="text">Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.</div>
                                    </div>
                                    <div className="info">
                                        <div className="signature"><img src={signaturetwo} alt="" title="" /></div>
                                        <div className="author">Henry - EXCUTIVE CHEF</div>
                                    </div>
                                    <div className="link-box">
                                        <Link to="#" className="theme-btn btn-style-two clearfix">
                                            <span className="btn-wrap">
                                                <span className="text-one">meet our team</span>
                                                <span className="text-two">meet our team</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="fluid-section alternate">
                <div className="outer-container">
                    <div className="row clearfix">

                        <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image-layer" style={{ backgroundImage: `url(${threebg})` }}></div>
                                <div className="image"><img src={threebg} alt="" /></div>
                            </div>
                        </div>

                        <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="left-bg"><img src={bg13} alt="" title="" /></div>
                            <div className="inner clearfix wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="content-box">
                                    <div className="title-box centered">
                                        <div className="subtitle"><span>Delightful Experience</span></div>

                                        <div className="pattern-image">
                                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                        </div>

                                        <h2>Dinner, Event or Party?</h2>
                                        <div className="text">Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.</div>
                                    </div>
                                    <div className="link-box">
                                        <Link to="#" className="theme-btn btn-style-two clearfix">
                                            <span className="btn-wrap">
                                                <span className="text-one">Discover Now</span>
                                                <span className="text-two">Discover Now</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Winningchef