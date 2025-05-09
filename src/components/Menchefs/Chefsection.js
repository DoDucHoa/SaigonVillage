import React from 'react'
import bg26 from '../../assets/images/background/bg-26.png'
import mainchef from '../../assets/images/resource/mainchef.jpg'
import signature from '../../assets/images/resource/signature-2.png'
import OptimizedImage from '../common/OptimizedImage'

function Chefsection() {
    return (
        <>
            <section className="chef-section">
                <div className="right-bg">
                    <OptimizedImage 
                        src={bg26} 
                        alt="Background decoration" 
                        className="background-image"
                        priority={true}
                    />
                </div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image">
                                    <OptimizedImage 
                                        src={mainchef} 
                                        alt="Executive Chef"
                                        className="chef-image"
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="inner clearfix wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="content-box">
                                    <div className="title-box">
                                        <div className="subtitle"><span>35 year of experience</span></div>
                                        <div className="pattern-image">
                                            <OptimizedImage 
                                                src={require('../../assets/images/icons/separator.svg').default} 
                                                alt="Separator decoration"
                                                className="separator-image"
                                            />
                                        </div>
                                        <h2>Award Winning Chef</h2>
                                        <div className="text">Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.</div>
                                    </div>
                                    <div className="info">
                                        <div className="signature">
                                            <OptimizedImage 
                                                src={signature} 
                                                alt="Chef's signature"
                                                className="signature-image"
                                            />
                                        </div>
                                        <div className="author">Henry - EXCUTIVE CHEF</div>
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

export default Chefsection