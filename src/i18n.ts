import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define the options for i18next initialization
const i18nOptions: InitOptions = {
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  backend: {
    loadPath: `/locales/{{lng}}/translation.json`, // Path to your translation files
  }
};

// Initialize i18next
i18n
  .use(Backend) // Load translation using HTTP
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init(i18nOptions) // Initialize i18next with options
  .then(() => {
    // Optional: You can add any logic to run after i18next is initialized
    console.log('i18next is ready!');
  })
  .catch((error) => {
    console.error('Error initializing i18next:', error);
  });

export default i18n;