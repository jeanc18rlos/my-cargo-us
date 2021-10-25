import React from 'react';

import { ThemeProvider, theme } from '../src/theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
];

export const parameters = { name: 'default', value: 'rgb(255, 255, 255)', default: true, layout: 'fullscreen' };
