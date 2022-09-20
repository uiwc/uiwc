import { initI18n, setLanguage } from './../src/i18n/language';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '../src/styles';
import '../src/utilities.css';
import { includeComponentsI18n } from './../src/i18n/index';

export const decorators = [
  (Story) => {
    initI18n();
    setLanguage('es');
    includeComponentsI18n();

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <div className="w-100">
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
