import { ThemeProvider as Provider } from 'styled-components';
import MediaContextProvider from './config/breakpoints';

import { AppLocale } from '../utils';
import { ConfigProvider } from 'antd';
import { IntlProvider } from 'react-intl';

import 'antd/dist/antd.css';
import './legacy.css';
import './vendors/style';
import '../assets/css/swiper-bundle.css';

import { ThemeInterface } from '.';
import { LayoutProvider } from '../config';

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
          <LayoutProvider> {children} </LayoutProvider>
        </IntlProvider>
      </ConfigProvider>
    </MediaContextProvider>
  </Provider>
);

export default ThemeProvider;
