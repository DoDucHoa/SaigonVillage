import { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { languageConfig } from "../../constant";

const LanguageSwitcher = ({ isMobile = false }) => {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);

  const handleLanguageChange = useCallback(
    (event) => {
      const selectedLanguage = event.target.value;
      i18n.changeLanguage(selectedLanguage);
    },
    [i18n]
  );

  if (isMobile) {
    return (
      <li className="dropdown">
        <Link to="#" onClick={() => setShow(!show)}>
          {t("navbar.language")}
          <button type="button" className="btn-expander">
            <i className="far fa-angle-down"></i>
          </button>
        </Link>

        <ul style={{ display: show ? "block" : "none" }}>
          {languageConfig.map((lang) => (
            <li
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
            >
              <Link>{lang.label}</Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li>
      <div className="language-switcher">
        <select onChange={handleLanguageChange} defaultValue={""}>
          <option value="" disabled hidden>
            {t("navbar.language")}
          </option>
          {languageConfig.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
    </li>
  );
};

export default memo(LanguageSwitcher); 