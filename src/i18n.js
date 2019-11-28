import i18n from 'i18n-js';

import en from './locales/en.json';
import es from './locales/es.json';

i18n.defaultLocale = i18n.currentLocale();
i18n.locale = i18n.currentLocale();
i18n.fallbacks = true;
i18n.translations = { es, en };

export default i18n;