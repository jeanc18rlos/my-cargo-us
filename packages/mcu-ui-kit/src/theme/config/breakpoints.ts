import { createMedia } from '@artsy/fresnel';

const breakpoints = {
  xxxs: 320,
  xxs: 420,
  xs: 560,
  sm: 768,
  md: 992,
  lg: 1024,
  xl: 1192,
  xxl: 1440,
  xxxl: 1600
};

const { MediaContextProvider, Media } = createMedia({
  breakpoints
});

export default MediaContextProvider;

export { Media };
