import i18next, { InitOptions } from "i18next";
import {
    commonEn,
    commonFr,
    deckEn,
    deckFr,
    validationEn,
    validationFr,
    userEn,
    userFr,
    cardEn,
    cardFr,
    navigationFr,
    navigationEn,
    homeEn,
    homeFr,
} from "./translations";

const resources = {
    en: {
        common: commonEn,
        deck: deckEn,
        card: cardEn,
        validation: validationEn,
        user: userEn,
        navigation: navigationEn,
        home: homeEn,
    },
    fr: {
        common: commonFr,
        deck: deckFr,
        card: cardFr,
        validation: validationFr,
        user: userFr,
        navigation: navigationFr,
        home: homeFr,
    },
} as const;

const i18nOptions: InitOptions = {
    fallbackLng: "fr",
    ns: ["common", "navigation", "home"],
    fallbackNS: "common",
    react: {
        useSuspense: true,
    },
    debug: process.env.NODE_ENV === "development",
    resources,
};

const i18n = i18next.createInstance();

i18n.init(i18nOptions);

export { i18n };
