import { ThemeInterface } from './theme';
import 'styled-components';

// Media
declare module '*.svg' {
  const value: any;
  export default value as string;
}
declare module '*.jpg' {
  const value: any;
  export default value as string;
}
declare module '*.png' {
  const value: any;
  export default value as string;
}
declare module '*.jpeg' {
  const value: any;
  export default value as string;
}
declare module '*.gif' {
  const value: any;
  export default value as string;
}

// Styled Components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}

declare module '@storybook/addon-info' {
  export function action(name: string, ...params: any[]): any;
}
