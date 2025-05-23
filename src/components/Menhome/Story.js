import React from 'react'
import { Link } from 'react-router-dom'
import bg3 from '../../assets/images/background/bg-3.png'
import badge1 from '../../assets/images/resource/badge-1.png'
import img1 from '../../assets/images/resource/image-1.jpg'
import img2 from '../../assets/images/resource/image-2.jpg'
import OptimizedImage from '../common/OptimizedImage'

function Story() {
    return (
        <>
            <section className="story-section">
                <div className="left-bg">
                    <OptimizedImage 
                        src={bg3} 
                        alt="Background decoration" 
                        className="background-image"
                        priority={true}
                    />
                </div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="text-col col-xl-5 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="title-box centered">
                                    <div className="subtitle">
                                        <span> Our story </span>
                                    </div>
                                    <div className="pattern-image">
                                        <OptimizedImage 
                                            src={require('../../assets/images/icons/separator.svg').default} 
                                            alt="Separator decoration"
                                            className="separator-image"
                                        />
                                    </div>
                                    <h2>Every Flavor Tells a Story</h2>
                                    <div className="text">Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into.</div>
                                </div>
                                <div className="booking-info">
                                    <div className="bk-title">Book Through Call</div>
                                    <div className="bk-no"><Link to="tel:+80-400-123456">+80 (400) 123 4567</Link></div>
                                    <div className="link-box">
                                        <Link to="/about" className="theme-btn btn-style-two clearfix">
                                            <span className="btn-wrap">
                                                <span className="text-one">Read More</span>
                                                <span className="text-two">Read More</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="image-col col-xl-7 col-lg-7 col-md-12 col-sm-12">
                            <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="round-stamp">
                                    <OptimizedImage 
                                        src={badge1} 
                                        alt="Award badge"
                                        className="badge-image"
                                    />
                                </div>
                                <div className="images parallax-scene-1">
                                    <div className="image" data-depth="0.15">
                                        <OptimizedImage 
                                            src={img1} 
                                            alt="Story image 1"
                                            className="story-image"
                                        />
                                    </div>
                                    <div className="image" data-depth="0.30">
                                        <OptimizedImage 
                                            src={img2} 
                                            alt="Story image 2"
                                            className="story-image"
                                        />
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

export default Story