import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import languageEn from './localization/en.json'
import languageDe from './localization/de.json'

i18n
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
        resources: {
            en: languageEn,
            de: languageDe,
        },
        fallbackLng: 'en',
        keySeparator: '.',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n