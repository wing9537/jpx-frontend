import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// locales
import common from "./locales/common.json";
import errorMsg from "./locales/errorMsg.json";
import example from "./locales/example.json";
import layout from "./locales/layout.json";
import dialog from "./locales/dialog.json";
import setting from "./locales/setting.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    common: common.en,
    errorMsg: errorMsg.en,
    example: example.en,
    layout: layout.en,
    dialog: dialog.en,
    setting: setting.en,
  },
  zh: {
    common: common.zh,
    errorMsg: errorMsg.zh,
    example: example.zh,
    layout: layout.zh,
    dialog: dialog.zh,
    setting: setting.zh,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    supportedLngs: ["en", "zh"],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
