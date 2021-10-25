
import { NavStyle, LayoutType } from '../../types';

import { SWITCH_LANGUAGE, TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH } from '../actionTypes/Layout';
import { THEME_TYPE, LAYOUT_TYPE, NAV_STYLE, THEME_COLOR, UPDATE_RTL_STATUS } from '../actionTypes/ThemeSettings';

export function toggleCollapsedSideNav(navCollapsed: boolean) {
  return {
    type: TOGGLE_COLLAPSED_NAV,
    payload: navCollapsed
  };
}

export function updateWindowWidth(width: number) {
  return { type: WINDOW_WIDTH, payload: width };
}

export function setThemeType(themeType: string) {
  return { type: THEME_TYPE, payload: themeType };
}

export function setThemeColor(themeColor: string) {
  return { type: THEME_COLOR, payload: themeColor };
}

export function setDirectionRTL(rtlStatus: boolean) {
  return { type: UPDATE_RTL_STATUS, payload: rtlStatus };
}

export function onNavStyleChange(navStyle: NavStyle) {
  return { type: NAV_STYLE, payload: navStyle };
}

export function onLayoutTypeChange(layoutType: LayoutType) {
  return { type: LAYOUT_TYPE, payload: layoutType };
}

export function switchLanguage(locale: any) {
  return {
    type: SWITCH_LANGUAGE,
    payload: locale
  };
}
