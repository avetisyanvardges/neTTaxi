import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './en';
import ru from './ru';
import am from './am.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
    am: {
      translation: am,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
