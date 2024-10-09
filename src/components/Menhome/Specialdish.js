import React from 'react'
import { Link } from 'react-router-dom'
import Backgroundoffer from '../../assets/images/background/image-1.jpg';
import record3 from '../../assets/images/resource/image-3.png'
import recordbg1 from '../../assets/images/background/image-1.jpg'
import recordbg2 from '../../assets/images/background/bg-4.png'
import recordbg3 from '../../assets/images/resource/badge-2.png'

function Specialdish() {
    return (
        <>
            <section className="special-dish">
                <div className="bottom-image"><img src={record3} alt="" title="" /></div>
                <div className="outer-container">
                    <div className="row clearfix">
                        <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image-layer" style={{ backgroundImage: `url(${Backgroundoffer})` }}></div>
                                <div className="image"><img src={recordbg1} alt="" /></div>
                            </div>
                        </div>
                        <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="right-bg"><img src={recordbg2} alt="" title="" /></div>
                            <div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">

                                <div className="title-box">
                                    <span className="badge-icon"><img src={recordbg3} alt="" title="" /></span>
                                    <div className="subtitle"><span>Special dish</span></div>

                                    <div className="pattern-image">
                                        <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                    </div>

                                    <h2>Lobster Tortellini</h2>
                                    <div className="text">Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.</div>
                                </div>

                                <div className="price"><span className="old">$40.00</span> <span className="new">$20.00</span></div>
                                <div className="link-box">
                                    <Link to="#" className="theme-btn btn-style-two clearfix">
                                        <span className="btn-wrap">
                                            <span className="text-one">view all menu</span>
                                            <span className="text-two">view all menu</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Specialdish