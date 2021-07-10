import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import english from "./en.json";
import french from "./fr.json";

const resources = {
    en: {
        translation: english
    },
    fr: {
        translation: french
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'fr',
    fallbackLng: "fr",
    interpolation: {
            escapeValue: false
    }
})

export default i18n;