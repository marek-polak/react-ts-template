import React, { Suspense } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { withI18next } from 'storybook-addon-i18next';

import i18n from 'i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
  fallbackLng: 'en'
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withI18next({ i18n, languages: { en: 'English', sk: 'Slovak' }}),
  Story => <Suspense fallback='loading...'><Story /></Suspense>
];