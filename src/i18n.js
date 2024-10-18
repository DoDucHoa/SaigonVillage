import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    supportedLngs: ["de", "en", "vi"],
    interpolation: { escapeValue: false },
    lng: "de",
    fallbackLng: "de",
  });
export default i18next;
