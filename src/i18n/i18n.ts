import i18next, { InitOptions } from "i18next";
import { commonEn, commonFr } from "./translations";

const resources = {
    en: {
        common: commonEn,
    },
    fr: {
        common: commonFr,
    },
} as const;

const i18nOptions: InitOptions = {
    fallbackLng: "fr",
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
