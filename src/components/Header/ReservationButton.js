import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ReservationButton() {
  const { t } = useTranslation();
  return (
    <>
      <div className="links-boxtwo clearfix">
        <div className="link link-btn">
          <Link
            target="_blank"
            to="https://eat.allo.restaurant/restaurant/saigon-village?booking=true"
            className="theme-btn btn-style-one clearfix"
          >
            <span className="btn-wrap">
              <span className="text-one">{t("navbar.booking")}</span>
              <span className="text-two">{t("navbar.booking")}</span>
            </span>
          </Link>
        </div>
        <div className="link info-toggler">
          <button className="info-btn">
            <span className="hamburger">
              <span className="top-bun"></span>
              <span className="meat"></span>
              <span className="bottom-bun"></span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
