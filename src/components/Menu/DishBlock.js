import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const DishBlock = ({ dish }) => {
  const { t } = useTranslation();

  return (
    <div className="dish-block">
      <div className="inner-box">
        <div className="dish-image">
          <Link to="#">
            <img src={dish.image} alt={t(dish.title)} />
          </Link>
        </div>
        <div className="title clearfix">
          <div className="ttl clearfix">
            <h5>
              <Link to="#">{t(dish.title)}</Link>
            </h5>
          </div>
          <div className="price">
            <span>{dish.price} €</span>
          </div>
        </div>
        <div className="text desc">
          <Link to="#">{t(dish.description)}</Link>
        </div>
      </div>
    </div>
  );
};

export default DishBlock;
