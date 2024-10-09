import React from 'react'
import { Link } from 'react-router-dom'
import bgone from '../../../assets/images/background/bg-16.png'
import bgtwo from '../../../assets/images/background/bg-17.png'
import bgthree from '../../../assets/images/background/bg-18.png'
import menuone from '../../../assets/images/resource/menus-1.jpg'
import menutwo from '../../../assets/images/resource/menus-2.jpg'

function Startermenu() {
    return (
        <>
            <section className="menu-one">
                <div className="right-bg"><img src={bgone} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>STARTER MENU</span></div>
                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Appetizers</h2>
                    </div>

                    <div className="row clearfix">
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image"><img src={menuone} alt="" /></div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Greek Salad</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                        <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                        <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                        <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                        <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="menu-one alternate">
                <div className="left-bg"><img src={bgtwo} alt="" title="" /></div>
                <div className="right-bg-2"><img src={bgthree} alt="" title="" /></div>
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>Delicious</span></div>

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Main Dishes</h2>

                    </div>

                    <div className="row clearfix">
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image"><img src={menutwo} alt="" /></div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner">

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Greek Salad</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                        <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                        <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                        <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                    </div>
                                </div>

                                <div className="dish-block">
                                    <div className="inner-box">
                                        <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                        <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
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

export default Startermenu