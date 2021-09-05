interface Colors {
  disabledColor: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  secondaryTextColor: string;
  whiteColor: string;
  buttonPrimary: string;
  buttonPrimaryDisabled: string;
  buttonSecondary: string;
  buttonSecondaryDisabled: string;
  accent: string;
  tangaroaBlue: string;
}

interface Fonts {
  primaryFont: string;
  secondaryFont: string;
}

interface Flexboxgrid {
  gridSize: number;
  gutterWidth: number;
  outerMargin: number;
  mediaQuery: string;
  container: Container;
  breakpoints: Breakpoints;
}
interface Container {
  sm: number;
  md: number;
  lg: number;
}
interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}
export interface ThemeInterface {
  colors: Colors;
  fonts: Fonts;
  flexboxgrid: Flexboxgrid;
}

const theme: ThemeInterface = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75 // em
    }
  },
  colors: {
    disabledColor: '#CAD3DE',
    primaryColor: '#e9004b',
    secondaryColor: '#6236FF',
    textColor: '#54565a',
    secondaryTextColor: '#6236FF',
    whiteColor: '#FFFFFF',
    buttonPrimary: '#E92070',
    buttonPrimaryDisabled: '#CCC4D2',
    buttonSecondary: '#381451',
    buttonSecondaryDisabled: '#381451',
    accent: '#e9004b',
    tangaroaBlue: '#081F3B'
  },
  fonts: {
    primaryFont: 'Roboto',
    secondaryFont: 'Poppins'
  }
};

export default theme;
