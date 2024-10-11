import { Link } from "react-router-dom";

export default function ReservationButton() {
  return (
    <>
      <div className="links-boxtwo clearfix">
        <div className="link link-btn">
          <Link to="/reservation" className="theme-btn btn-style-one clearfix">
            <span className="btn-wrap">
              <span className="text-one">find a table</span>
              <span className="text-two">find a table</span>
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
