import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

// Import translations
import en from "./locales/en.json";
import hi from "./locales/hi.json";

// Set translations and fallback language
const i18n = new I18n({
  en,
  hi,
});

// I18n.locale = Localization.getLocales || "en"; // Get device locale or fallback to 'en'
// I18n.fallbacks = true; // Use default language if translation is missing
i18n.locale = Localization.locale || "en";
i18n.enableFallback = true;
i18n.defaultLocale = "en";

export default i18n;
