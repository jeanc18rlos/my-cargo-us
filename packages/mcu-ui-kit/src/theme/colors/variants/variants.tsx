import { white, desire, red, dark_liver, cultured } from '../colors';


export const filled = () => {
  
}

export const fill = {
  default: {
    color: white,
    background: desire,
    border: desire
  },
  hover: {
    background: red['40']
  },
  active: {
    background: red['60']
  },
  disabled: {
    background: red['0'],
    border: red['0'],
    color: dark_liver
  }
};

export const outline = {
  default: {
    color: desire,
    background: white,
    border: desire
  },
  hover: {
    color: red['40'],
    border: red['40']
  },
  active: {
    color: red['60'],
    border: red['60']
  },
  disabled: {
    background: white,
    border: cultured,
    color: dark_liver
  }
};

export const empty = {
  default: {
    color: desire,
    background: white,
    border: white
  },
  hover: {
    color: red['40']
  },
  active: {
    color: red['60'],
  },
  disabled: {
    background: white,
    color: cultured
  }
};
