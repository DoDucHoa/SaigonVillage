import React from 'react'
import { Link } from 'react-router-dom'
import bg21 from '../../assets/images/background/bg-21.png'
import bg9 from '../../assets/images/background/bg-9.png'
import teamone from '../../assets/images/resource/team-1.jpg'
import teamtwo from '../../assets/images/resource/team-2.jpg'
import teamthree from '../../assets/images/resource/team-3.jpg'

function Teem() {
    return (
        <>
            <section className="team-section">
                <div className="left-bg"><img src={bg21} alt="" title="" /></div>
                <div className="right-bg"><img src={bg9} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>experienced team</span></div>

                        <div className="pattern-image">
                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Meet Our Chef</h2>
                    </div>
                    <div className="row justify-content-center clearfix">

                        <div className="team-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                                <div className="image">
                                    <img src={teamone} alt="" />
                                    <div className="overlay-box">
                                        <div className="overlay-inner">

                                            <ul className="social-box">
                                                <li><Link to="https://www.facebook.com/" className="fab fa-facebook-f"></Link></li>
                                                <li><Link to="https://www.twitter.com/" className="fab fa-twitter"></Link></li>
                                                <li><Link to="https://dribbble.com/" className="fab fa-dribbble"></Link></li>
                                                <li><Link to="https://www.linkedin.com/" className="fab fa-linkedin"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h3><Link to="#">Willium Joe</Link></h3>
                                <div className="designation">Master chef</div>
                                <div className="text desc">Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.</div>
                            </div>
                        </div>


                        <div className="team-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                <div className="image">
                                    <img src={teamtwo} alt="" />
                                    <div className="overlay-box">
                                        <div className="overlay-inner">

                                            <ul className="social-box">
                                                <li><Link to="https://www.facebook.com/" className="fab fa-facebook-f"></Link></li>
                                                <li><Link to="https://www.twitter.com/" className="fab fa-twitter"></Link></li>
                                                <li><Link to="https://dribbble.com/" className="fab fa-dribbble"></Link></li>
                                                <li><Link to="https://www.linkedin.com/" className="fab fa-linkedin"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h3><Link to="#">Steave Den</Link></h3>
                                <div className="designation">Master chef</div>
                                <div className="text desc">Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.</div>
                            </div>
                        </div>

                        <div className="team-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                <div className="image">
                                    <img src={teamthree} alt="" />
                                    <div className="overlay-box">
                                        <div className="overlay-inner">
                                            <ul className="social-box">
                                                <li><Link to="https://www.facebook.com/" className="fab fa-facebook-f"></Link></li>
                                                <li><Link to="https://www.twitter.com/" className="fab fa-twitter"></Link></li>
                                                <li><Link to="https://dribbble.com/" className="fab fa-dribbble"></Link></li>
                                                <li><Link to="https://www.linkedin.com/" className="fab fa-linkedin"></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h3><Link to="#">Lily Sopy</Link></h3>
                                <div className="designation">Master chef</div>
                                <div className="text desc">Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Teem