import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en from './locales/dataEn.json';
import es from './locales/dataEs.json';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es }
        },
        fallbackLng: "en",
        debug: true,
        interpolation: {
        escapeValue: false,
        },
    });

export default i18n;
