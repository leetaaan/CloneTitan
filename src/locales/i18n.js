import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Trans_EN from "./en/translation.json"
import Trans_JA from "./ja/translation.json"
 
export const locales = {
  en: 'English',
  ja: 'Japaness'
}
const resources = {
  en: {
  trans: Trans_EN
},
  ja: {
   trans: Trans_JA
  }
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en", 
  ns: ["trans"],
  interpolation: {
    escapeValue: false 
  }
  });