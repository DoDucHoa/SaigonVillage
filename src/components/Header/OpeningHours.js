import { memo } from "react";
import { useTranslation } from "react-i18next";
import { openingHours } from "../../constant";

const OpeningHours = () => {
  const { t } = useTranslation();

  return (
    <ul className="info">
      <li>{t("openTime")}</li>
      <li>
        {t("shortDays.monday")}-{t("shortDays.thursday")}: {openingHours.weekdays}
      </li>
      <li>
        {t("shortDays.friday")}: {openingHours.friday}
      </li>
      <li>
        {t("shortDays.saturday")}: {openingHours.saturday}
      </li>
      <li>
        {t("shortDays.sunday")} & {t("shortDays.holiday")}: {openingHours.sunday}
      </li>
    </ul>
  );
};

export default memo(OpeningHours); 