import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { createMedia } from '@artsy/fresnel';

import { AppLocale } from '../';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';

import 'antd/dist/antd.css';
import './legacy.css';
import './vendors/style';
import '../assets/css/swiper-bundle.css';

import { ThemeInterface } from '.';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    xxs: 320,
    xs: 420,
    sm: 560,
    md: 768,
    lg: 1024,
    xl: 1192,
    xxl: 1440
  }
});

type ThemeProviderProps = { children: any; theme: ThemeInterface };

const locale = {
  languageId: 'english',
  locale: 'en',
  name: 'English',
  icon: 'us'
};
const isDirectionRTL = false;

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => (
  <Provider theme={theme}>
    <MediaContextProvider>
      <ConfigProvider locale={AppLocale[locale.locale].antd} direction={isDirectionRTL ? 'rtl' : 'ltr'}>
        <IntlProvider locale={AppLocale[locale.locale].locale} messages={AppLocale[locale.locale].messages}>
          {children}
        </IntlProvider>
      </ConfigProvider>
    </MediaContextProvider>
  </Provider>
);

export default ThemeProvider;

export { Media };
