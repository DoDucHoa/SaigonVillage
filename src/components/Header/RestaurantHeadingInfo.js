import { Link } from "react-router-dom";
import { restaurantInfo } from "../../constant";
import { memo } from "react";

const RestaurantHeadingInfo = () => {
  return (
    <div className="header-top">
      <div className="auto-container">
        <div className="inner clearfix">
          <div className="top-left clearfix">
            <ul className="top-info clearfix">
              <li>
                <i className="icon far fa-map-marker-alt"></i>{" "}
                {restaurantInfo.address}
              </li>
              {/* <li>
                <i className="icon far fa-clock"></i> {restaurantInfo.openTime}
              </li> */}
            </ul>
          </div>
          <div className="top-right clearfix">
            <ul className="top-info clearfix">
              <li>
                <Link to="tel:+4982150476359">
                  <i className="icon far fa-phone"></i> {restaurantInfo.phone}
                </Link>
              </li>
              <li>
                <Link to="mailto:info@saigonvillage.de">
                  <i className="icon far fa-envelope"></i>{" "}
                  {restaurantInfo.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(RestaurantHeadingInfo);
