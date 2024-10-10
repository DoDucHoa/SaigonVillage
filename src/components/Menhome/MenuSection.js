import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgone from "../../assets/images/background/bg-5.png";
import Bgtwo from "../../assets/images/background/bg-6.png";
import five from "../../assets/images/resource/menu-image-5.png";
import six from "../../assets/images/resource/menu-image-6.png";
import seven from "../../assets/images/resource/menu-image-7.png";
import eight from "../../assets/images/resource/menu-image-8.png";
import nine from "../../assets/images/resource/menu-image-9.png";
import ten from "../../assets/images/resource/menu-image-10.png";

function MenuSection() {
  const [tabMenu, tabActive] = useState({ a: true });

  return (
    <>
      <section className="menu-section">
        <div className="left-bg">
          <img src={bgone} alt="" title="" />
        </div>

        <div className="right-bg">
          <img src={Bgtwo} alt="" title="" />
        </div>

        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">
              <span>Special selection</span>
            </div>

            <div className="pattern-image">
              <img
                src={require("../../assets/images/icons/separator.svg").default}
                alt="mySvgImage"
              />
            </div>

            <h2>Delicious Menu</h2>
          </div>

          <div className="tabs-box menu-tabs">
            <div className="buttons">
              <ul className="tab-buttons clearfix">
                <li
                  className={`tab-btn ${tabMenu.a && "active-btn"}`}
                  onClick={() => tabActive({ a: true })}
                  data-tab="#tab-1"
                >
                  <span>MORNING</span>
                </li>
                <li
                  className={`tab-btn ${tabMenu.b && "active-btn"}`}
                  onClick={() => tabActive({ b: true })}
                  data-tab="#tab-2"
                >
                  <span>WEEKDAY LUNCH</span>
                </li>
                <li
                  className={`tab-btn ${tabMenu.c && "active-btn"}`}
                  onClick={() => tabActive({ c: true })}
                  data-tab="#tab-3"
                >
                  <span>DINNER</span>
                </li>
                <li
                  className={`tab-btn ${tabMenu.d && "active-btn"}`}
                  onClick={() => tabActive({ d: true })}
                  data-tab="#tab-4"
                >
                  <span>WINES</span>
                </li>
              </ul>
            </div>
            <div className="tabs-content">
              <div className={`tab ${tabMenu.a && "active-tab"}`} id="tab-1">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={five} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Greek Salad</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={six} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Lasagne{" "}
                                  <span className="s-info">SEASONAL</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$40.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Butternut Pumpkin</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Typesetting industry lorem Lorem Ipsum is simply
                              dummy text of the priand.
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={eight} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Tokusen Wagyu{" "}
                                  <span className="s-info">NEW</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$39.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices.
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={nine} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Olivas Rellenas</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Avocados with crab meat, red onion, crab salad
                              stuffed red bell pepper and green bell pepper.
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={ten} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Opu Fish</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$49.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab ${tabMenu.b && "active-tab"}`} id="tab-2">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={five} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Greek Salad</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={six} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Lasagne{" "}
                                  <span className="s-info">SEASONAL</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$40.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Butternut Pumpkin</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Typesetting industry lorem Lorem Ipsum is simply
                              dummy text of the priand.
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={eight} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Tokusen Wagyu{" "}
                                  <span className="s-info">NEW</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$39.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices.
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={nine} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Olivas Rellenas</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Avocados with crab meat, red onion, crab salad
                              stuffed red bell pepper and green bell pepper.
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={ten} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Opu Fish</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$49.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab ${tabMenu.c && "active-tab"}`} id="tab-3">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={five} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Greek Salad</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={six} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Lasagne{" "}
                                  <span className="s-info">SEASONAL</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$40.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Butternut Pumpkin</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Typesetting industry lorem Lorem Ipsum is simply
                              dummy text of the priand.
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={eight} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Tokusen Wagyu{" "}
                                  <span className="s-info">NEW</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$39.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices.
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={nine} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Olivas Rellenas</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Avocados with crab meat, red onion, crab salad
                              stuffed red bell pepper and green bell pepper.
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={ten} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Opu Fish</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$49.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab ${tabMenu.d && "active-tab"}`} id="tab-4">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={five} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Greek Salad</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={six} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Lasagne{" "}
                                  <span className="s-info">SEASONAL</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$40.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={seven} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Butternut Pumpkin</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$10.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Typesetting industry lorem Lorem Ipsum is simply
                              dummy text of the priand.
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={eight} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">
                                  Tokusen Wagyu{" "}
                                  <span className="s-info">NEW</span>
                                </Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$39.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices.
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={nine} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Olivas Rellenas</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$25.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Avocados with crab meat, red onion, crab salad
                              stuffed red bell pepper and green bell pepper.
                              Cucumber
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <Link to="#">
                              <img src={ten} alt="" />
                            </Link>
                          </div>
                          <div className="title clearfix">
                            <div className="ttl clearfix">
                              <h5>
                                <Link to="#">Opu Fish</Link>
                              </h5>
                            </div>
                            <div className="price">
                              <span>$49.00</span>
                            </div>
                          </div>
                          <div className="text desc">
                            <Link to="#">
                              Vegetables, cheeses, ground meats, tomato sauce,
                              seasonings and spices
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="open-timing">
            <div className="hours">
              During winter daily from{" "}
              <span className="theme_color">7:00 pm</span> to{" "}
              <span className="theme_color">9:00 pm</span>
            </div>
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
      </section>
    </>
  );
}

export default MenuSection;
