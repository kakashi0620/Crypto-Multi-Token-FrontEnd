import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "dSk60CI1oZnLiqWrbIAKMA";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    ns: ["default"],
    defaultNS: "default",

    supportedLngs: [
      "en",
      "fr",
      "ro",
      "zh",
      "bg",
      "ar",
      "zh-CN",
      "ja-JP",
      "cs",
      "ug-CN",
      "de",
      "el",
      "hu",
      "id",
      "it",
      "ko-KR",
      "pl",
      "pt",
      "ru",
      "sk",
      "es",
      "th",
      "tr",
      "vi-VN",
    ],

    backend: {
      loadPath: loadPath,
    },
  });
