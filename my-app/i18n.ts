
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/common.json';
import zh from './locales/zh-TW/common.json';

export function initI18n() {
    if (!i18n.isInitialized) {
        return i18n
            .use(initReactI18next)
            .init({
                resources: {
                    en: { translation: en },
                    zh: { translation: zh },
                },
                lng: 'en',
                fallbackLng: 'en',
                interpolation: { escapeValue: false },
            });
    }
    return Promise.resolve();
}

export default i18n;
