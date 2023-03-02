import { createI18n } from "vue-i18n";
import en from "./en";
import tw from "./tw";

const messages = {
  en,
  tw,
};

const i18n = createI18n({
  legacy: false,
  locale: "tw",
  fallbackLocale: "en",
  messages,
});

export default i18n;
