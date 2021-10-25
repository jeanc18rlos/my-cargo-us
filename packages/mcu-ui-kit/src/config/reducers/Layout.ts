import { SWITCH_LANGUAGE, TOGGLE_COLLAPSED_NAV } from '../actionTypes/Layout';
import {
  LAYOUT_TYPE,
  LAYOUT_TYPE_FULL,
  NAV_STYLE,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  THEME_COLOR,
  THEME_TYPE,
  THEME_TYPE_SEMI_DARK,
  UPDATE_RTL_STATUS
} from '../actionTypes/ThemeSettings';

export const InitialLayoutState = {
  navStyle: NAV_STYLE_DEFAULT_HORIZONTAL,
  layoutType: LAYOUT_TYPE_FULL,
  themeType: THEME_TYPE_SEMI_DARK,
  themeColor: '',
  isDirectionRTL: false,
  navCollapsed: true,
  locale: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us'
  }
};

type LayoutAction = {
  type: string;
  payload: any;
};

export function Layoutreducer(state: typeof InitialLayoutState, action: LayoutAction) {
  switch (action.type) {
    case THEME_TYPE:
      return {
        ...state,
        themeType: action.payload
      };
    case TOGGLE_COLLAPSED_NAV: {
      return {
        ...state,
        navCollapsed: action.payload
      };
    }
    case THEME_COLOR:
      return {
        ...state,
        themeColor: action.payload
      };

    case UPDATE_RTL_STATUS:
      return {
        ...state,
        isDirectionRTL: action.payload
      };

    case NAV_STYLE:
      return {
        ...state,
        navStyle: action.payload
      };
    case LAYOUT_TYPE:
      return {
        ...state,
        layoutType: action.payload
      };

    case SWITCH_LANGUAGE:
      return {
        ...state,
        locale: action.payload
      };
    default:
      return state;
  }
}
