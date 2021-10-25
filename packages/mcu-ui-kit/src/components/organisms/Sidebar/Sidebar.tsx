import { memo, useState, useEffect } from 'react';
import SidebarContent from './SidebarContent';
import { Drawer, Layout } from 'antd';
import { Config } from '../../../';
const { Sider } = Layout;

const {
  ThemeSettings: {
    NAV_STYLE_MINI_SIDEBAR,
    NAV_STYLE_FIXED,
    NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
    NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
    NAV_STYLE_DRAWER,
    TAB_SIZE,
    THEME_TYPE_LITE
  },
  useStore,
  LayoutActions: { toggleCollapsedSideNav }
} = Config;



const Sidebar = () => {
  const [state, dispatch] = useStore();
  const { themeType, navStyle, navCollapsed } = state;

  let [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const onToggleCollapsedNav = () => {
    console.log(JSON.stringify(state));
    dispatch(toggleCollapsedSideNav(!navCollapsed));
  };

  useEffect(() => {
    setSidebarCollapsed(navStyle === NAV_STYLE_MINI_SIDEBAR);
  }, [navStyle]);

  let drawerStyle = 'gx-collapsed-sidebar';

  if (navStyle === NAV_STYLE_FIXED) {
    drawerStyle = '';
  } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
    drawerStyle = 'gx-mini-sidebar gx-mini-custom-sidebar';
  } else if (navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
    drawerStyle = 'gx-custom-sidebar';
  } else if (navStyle === NAV_STYLE_MINI_SIDEBAR) {
    drawerStyle = 'gx-mini-sidebar';
  } else if (navStyle === NAV_STYLE_DRAWER) {
    drawerStyle = 'gx-collapsed-sidebar';
  }
  if (
    (navStyle === NAV_STYLE_FIXED ||
      navStyle === NAV_STYLE_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) &&
    window.innerWidth < TAB_SIZE
  ) {
    drawerStyle = 'gx-collapsed-sidebar';
  }
  return (
    <Sider
      className={`gx-app-sidebar ${drawerStyle} ${themeType !== THEME_TYPE_LITE ? 'gx-layout-sider-dark' : null}`}
      trigger={null}
      collapsed={
        window.innerWidth < TAB_SIZE ? false : sidebarCollapsed || navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR
      }
      theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
      collapsible
    >
      {navStyle === NAV_STYLE_DRAWER || window.innerWidth < TAB_SIZE ? (
        <Drawer
          className={`gx-drawer-sidebar ${themeType !== THEME_TYPE_LITE ? 'gx-drawer-sidebar-dark' : null}`}
          placement="left"
          closable={false}
          onClose={onToggleCollapsedNav}
          visible={navCollapsed}
        >
          <SidebarContent
            {...{ themeType, navStyle }}
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />
        </Drawer>
      ) : (
        <SidebarContent
          {...{ themeType, navStyle }}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />
      )}
    </Sider>
  );
};
export default memo(Sidebar);
