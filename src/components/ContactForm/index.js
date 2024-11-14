import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <form method="post" action="/">
      <div className="row clearfix">
        <div className="form-group col-lg-6 col-md-6 col-sm-12">
          <div className="field-inner">
            <input
              type="text"
              name="fieldname"
              placeholder={t("contact.name")}
              required
            />
          </div>
        </div>
        <div className="form-group col-lg-6 col-md-6 col-sm-12">
          <div className="field-inner">
            <input
              type="text"
              name="fieldname"
              placeholder={t("contact.phone")}
              required
            />
          </div>
        </div>
        <div className="form-group col-lg-4 col-md-6 col-sm-12">
          <div className="field-inner">
            <span className="alt-icon far fa-user"></span>
            <select className="l-icon">
              <option>1 Person</option>
              <option>2 Person</option>
              <option>3 Person</option>
              <option>4 Person</option>
              <option>5 Person</option>
              <option>6 Person</option>
              <option>7 Person</option>
            </select>
            <span className="arrow-icon far fa-angle-down"></span>
          </div>
        </div>
        <div className="form-group col-lg-4 col-md-6 col-sm-12">
          <div className="field-inner">
            <span className="alt-icon far fa-calendar"></span>
            <input
              className="l-icon datepicker"
              type="text"
              name="fieldname"
              placeholder="DD-MM-YYYY"
              required
              readOnly
            />
            <span className="arrow-icon far fa-angle-down"></span>
          </div>
        </div>
        <div className="form-group col-lg-4 col-md-12 col-sm-12">
          <div className="field-inner">
            <span className="alt-icon far fa-clock"></span>
            <select className="l-icon">
              <option>08 : 00 am</option>
              <option>09 : 00 am</option>
              <option>10 : 00 am</option>
              <option>11 : 00 am</option>
              <option>12 : 00 pm</option>
              <option>01 : 00 pm</option>
              <option>02 : 00 pm</option>
              <option>03 : 00 pm</option>
              <option>04 : 00 pm</option>
              <option>05 : 00 pm</option>
              <option>06 : 00 pm</option>
              <option>07 : 00 pm</option>
              <option>08 : 00 pm</option>
              <option>09 : 00 pm</option>
              <option>10 : 00 pm</option>
            </select>
            <span className="arrow-icon far fa-angle-down"></span>
          </div>
        </div>
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="field-inner">
            <textarea
              name="fieldname"
              placeholder={t("contact.message")}
              required
            ></textarea>
          </div>
        </div>
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="field-inner">
            <button type="submit" className="theme-btn btn-style-one clearfix">
              <span className="btn-wrap">
                <span className="text-one">{t("contact.submit")}</span>
                <span className="text-two">{t("contact.submit")}</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
