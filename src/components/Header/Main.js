import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/resource/sidebar-logo.png'
import logonew from '../../assets/images/logo.png'
import imgone from '../../assets/images/resource/menu-image-1.jpg'
import imgtwo from '../../assets/images/resource/menu-image-2.jpg'
import Imgthree from '../../assets/images/resource/menu-image-3.jpg'
import Imgfour from '../../assets/images/resource/menu-image-4.jpg'

function Main() {

    const [active, setActive] = useState();
    const [show, setShow] = useState();
    const [menu, setMenu] = useState();
    const [page, setPage] = useState();
    const [drop, setDrop] = useState();
    const [lastscrool, setlastscrool] = useState(0);

    const [scrolled, setScrolled] = useState(false);
    const [Nav, setNav] = useState(true);

    const handleScroll = () => {

        const offset = window.scrollY;
        setlastscrool(offset);

        if (offset > 1000 && offset < lastscrool) {
            setNav(true);
            setScrolled(true);
        }

        else if (offset > 1000) {
            setNav(false)
        }

        else if (offset > 200) {
            setNav(true);
            setScrolled(true);
        }

        else {
            setScrolled(false);
            setNav(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <>
            {active &&
                <div className="menu-backdrop" style={{ opacity: "1", visibility: "visible" }}></div>
            }
            <section className={`hidden-bar ${active && "visible-sidebar"}`} >
                <div className="inner-box">
                    <div className="cross-icon hidden-bar-closer" onClick={() => setActive(false)} ><span className="far fa-close" onClick={() => setActive(false)} > </span></div>
                    <div className="logo-box"><Link to="/" title="Delici - Restaurants HTML Template"><img src={logo} alt="" title="Delici - Restaurants HTML Template" />
                    </Link></div>

                    <div className="side-menu">
                        <ul className="navigation clearfix">
                            <li className="current dropdown"><Link to="#" onClick={() => setShow(show === true ? false : true)}>Home<button type="button" className="btn-expander"><i className="far fa-angle-down"></i></button></Link>
                                <ul style={{ display: show ? "block" : "none" }}>
                                    <li><Link to="/" onClick={() => setActive(false)}>Home 1 Left Header</Link></li>
                                    <li><Link to="/hometwo" onClick={() => setActive(false)}>Home 1 Center Header</Link></li>
                                    <li><Link to="/homethree" onClick={() => setActive(false)}>Home 3 Video Hero</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown"><Link to="#" onClick={() => setMenu(menu === true ? false : true)} >Menus<button type="button" className="btn-expander"><i className="far fa-angle-down"></i></button></Link>
                                <ul style={{ display: menu ? "block" : "none" }}>
                                    <li><Link to="/menuone" onClick={() => setActive(false)}>Menu List 1</Link></li>
                                    <li><Link to="/menutwo" onClick={() => setActive(false)}>Menu List 2</Link></li>
                                    <li><Link to="/menuthree" onClick={() => setActive(false)}>Menu List 3</Link></li>
                                    <li><Link to="/menufour" onClick={() => setActive(false)}>Menu List 4</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/about" onClick={() => setActive(false)}>About Us</Link></li>
                            <li><Link to="/ourchefs" onClick={() => setActive(false)}>Our chefs</Link></li>
                            <li className="dropdown"><Link to="/" onClick={() => setPage(page === true ? false : true)}>Pages<button type="button" className="btn-expander"><i className="far fa-angle-down"></i></button></Link>
                                <ul style={{ display: page ? "block" : "none" }}>
                                    <li><Link to="/menuone" onClick={() => setActive(false)}>Dropdown Menu 1</Link></li>
                                    <li><Link to="/menutwo" onClick={() => setActive(false)}>Dropdown Menu 2</Link></li>
                                    <li><Link to="/menuthree" onClick={() => setActive(false)}>Dropdown Menu 3</Link></li>
                                    <li className="dropdown">
                                        <Link to="#" onClick={() => setDrop(drop === true ? false : true)}>Dropdown Menu 4<button type="button" className="btn-expander">
                                            <i className="far fa-angle-down"></i>
                                        </button>
                                        </Link>
                                        <ul style={{ display: drop ? "block" : "none" }}>
                                            <li><Link to="#" onClick={() => setActive(false)}>Dropdown Menu level 2</Link></li>
                                            <li><Link to="#" onClick={() => setActive(false)}>Dropdown Menu level 2</Link></li>
                                            <li><Link to="#" onClick={() => setActive(false)}>Dropdown Menu Level 3</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#" onClick={() => setActive(false)}> Dropdown Lorem 5 </Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact" onClick={() => setActive(false)}> Contact </Link></li>
                        </ul>
                    </div>

                    <h2>Visit Us</h2>
                    <ul className="info">
                        <li>Restaurant St, Delicious City, <br /> London 9578, UK </li>
                        <li>Open: 9.30 am - 2.30pm</li>
                        <li><Link to="mailto:booking@domainame.com">booking@domainame.com</Link></li>
                    </ul>
                    <div className="separator"><span></span></div>
                    <div className="booking-info">
                        <div className="bk-title">Booking request</div>
                        <div className="bk-no"><Link to="tel:+88-123-123456">+88-123-123456</Link></div>
                    </div>

                </div>
            </section>
            {Nav &&
                <header className={`main-header ${scrolled && "fixed-header"} header-down`}>
                    <div className="header-top">
                        <div className="auto-container">
                            <div className="inner clearfix">
                                <div className="top-left clearfix">
                                    <ul className="top-info clearfix">
                                        <li><i className="icon far fa-map-marker-alt"></i> Restaurant St, Delicious City, London 9578, UK</li>
                                        <li><i className="icon far fa-clock"></i> Daily : 8.00 am to 10.00 pm</li>
                                    </ul>
                                </div>
                                <div className="top-right clearfix">
                                    <ul className="top-info clearfix">
                                        <li><Link to="tel:+11234567890"><i className="icon far fa-phone"></i> +1 123 456 7890 </Link> </li>
                                        <li><Link to="mailto:booking@restaurant.com"><i className="icon far fa-envelope"></i> booking@restaurant.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-upper header-fixed" >
                        <div className="auto-container">
                            <div className="main-box d-flex justify-content-between align-items-center flex-wrap">

                                <div className="links-box clearfix">
                                    <div className="nav-toggler">
                                        <button className="hidden-bar-opener">
                                            <span className="hamburger" onClick={() => setActive(true)}>
                                                <span className="top-bun"></span>
                                                <span className="meat"></span>
                                                <span className="bottom-bun"></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div className="logo-box">
                                    <div className="logo"><Link to="/" title="Delici - Restaurants React Template"><img src={logonew} alt="" title="Delici - Restaurants HTML Template" /></Link></div>
                                </div>

                                <div className="nav-box clearfix">

                                    <div className="nav-outer clearfix">
                                        <nav className="main-menu">
                                            <ul className="navigation clearfix">
                                                <li className="current dropdown"><Link to="/">Home</Link>
                                                    <ul>
                                                        <li> <Link to="/hometwo">Home 1 Left Header</Link></li>
                                                        <li> <Link to="/">Home 1 Center Header</Link></li>
                                                        <li> <Link to="/homethree">Home 3 Video Hero</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown has-mega-menu"><Link to="/menu">Menus</Link>
                                                    <ul>
                                                        <li>
                                                            <div className="mega-menu">
                                                                <div className="menu-inner">
                                                                    <div className="auto-container">
                                                                        <div className="row clearfix">
                                                                            <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                                <div className="image"><Link to="/menuone"><img src={imgone} alt="" /></Link></div>
                                                                                <div className="title"><Link to="/menuone">Menu list 1</Link></div>
                                                                            </div>
                                                                            <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                                <div className="image"><Link to="/menutwo"><img src={imgtwo} alt="" /></Link></div>
                                                                                <div className="title"><Link to="menutwo">Menu list 2</Link></div>
                                                                            </div>
                                                                            <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                                <div className="image"><Link to="/menuthree"><img src={Imgthree} alt="" /></Link></div>
                                                                                <div className="title"><Link to="menuthree">Menu list 3</Link></div>
                                                                            </div>
                                                                            <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                                <div className="image"><Link to="/menufour"><img src={Imgfour} alt="" /></Link></div>
                                                                                <div className="title"><Link to="/menufour">Menu list 4</Link></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/about">About Us</Link></li>
                                                <li><Link to="/ourchefs">Our chefs</Link></li>
                                                <li className="dropdown"><Link to="/">Pages</Link>
                                                    <ul>
                                                        <li> <Link to="#">Dropdown Menu 1</Link></li>
                                                        <li> <Link to="#">Dropdown Menu 2</Link></li>
                                                        <li> <Link to="#">Dropdown Menu 3</Link></li>
                                                        <li className="dropdown"><Link to="#">Dropdown Menu 4</Link>
                                                            <ul>
                                                                <li> <Link to="#">Dropdown Menu level 2</Link></li>
                                                                <li> <Link to="#">Dropdown Menu level 2</Link></li>
                                                                <li> <Link to="#">Dropdown Menu Level 3</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link to="#">Dropdown Lorem 5</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="#">Blog</Link></li>
                                                <li><Link to="/contact">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>

                                </div>

                                <div className="link link-btn">
                                    <Link to="/reservation" className="theme-btn btn-style-one clearfix">
                                        <span className="btn-wrap">
                                            <span className="text-one">find a table</span>
                                            <span className="text-two">find a table</span>
                                        </span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
            }
        </>
    )
}

export default Main