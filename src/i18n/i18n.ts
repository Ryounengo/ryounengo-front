import i18next, { InitOptions } from "i18next";
import { commonEn, commonFr, deckEn, deckFr, validationEn, validationFr } from "./translations";

const resources = {
    en: {
        common: commonEn,
        deck: deckEn,
        validation: validationEn,
    },
    fr: {
        common: commonFr,
        deck: deckFr,
        validation: validationFr,
    },
} as const;

const i18nOptions: InitOptions = {
    fallbackLng: "en",
    ns: ["common"],
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
