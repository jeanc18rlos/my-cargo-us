import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
export default (storyFn: any) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
