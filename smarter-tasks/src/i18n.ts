import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enJSON from "./locale/en.json";
import ptJSON from "./locale/pt.json";
import frJSON from "./locale/fr.json";
import deJSON from "./locale/de.json";
import hiJSON from "./locale/hi.json";
import taJSON from "./locale/ta.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enJSON.translation },
      pt: { translation: ptJSON.translation },
      fr: { translation: frJSON.translation },
      de: { translation: deJSON.translation },
      hi: { translation: hiJSON.translation },
      ta: { translation: taJSON.translation },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
