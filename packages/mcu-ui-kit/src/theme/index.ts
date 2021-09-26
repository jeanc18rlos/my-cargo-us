export { default as ThemeProvider, Media } from './provider';

export interface ThemeInterface {
  colors: {
    blue: {
      '100': string;
    };
  };
}

export const theme: ThemeInterface = {
  colors: {
    blue: {
      '100': 'S'
    }
  }
};
