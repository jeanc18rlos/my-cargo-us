import { memo, useEffect } from 'react';
import { Layout as AntLayout } from 'antd';
import { Sidebar } from '../Sidebar';
import {
  //HorizontalDark,
  //InsideHeader,
  //AboveHeader,
  HorizontalDefault
  //BelowHeader,
  //Topbar,
  //NoHeaderNotification,
  //NoHeaderNotification
} from '../TopBar';
import { Footer } from '../Footer';
import { useStore } from '../../../config';
import { Media } from '../../../theme/config/breakpoints';
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  LAYOUT_TYPE_FULL,
  LAYOUT_TYPE_BOXED,
  LAYOUT_TYPE_FRAMED
} from '../../../config/actionTypes/ThemeSettings';
import { NavStyle, LayoutType } from '../../../types';
const { Content } = AntLayout;

const getContainerClass = (navStyle: NavStyle) => {
  switch (navStyle) {
    case NAV_STYLE_DARK_HORIZONTAL:
      return 'gx-container-wrap';
    case NAV_STYLE_DEFAULT_HORIZONTAL:
      return 'gx-container-wrap';
    case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
      return 'gx-container-wrap';
    case NAV_STYLE_BELOW_HEADER:
      return 'gx-container-wrap';
    case NAV_STYLE_ABOVE_HEADER:
      return 'gx-container-wrap';
    default:
      return '';
  }
};
const HorizontalDefaultData = {
  advice: {
    icon: 'alert',
    label: 'A new version will be released on December 25th. Stay tuned!',
    action: () => alert('advice')
  },
  auth: {
    login: {
      label: 'Login',
      action: () => alert('login')
    },
    register: {
      label: 'Signup',
      action: () => alert('Signup')
    }
  }
};
const getNavStyles = (navStyle: NavStyle) => {
  switch (navStyle) {
    case NAV_STYLE_DEFAULT_HORIZONTAL:
      return <HorizontalDefault {...HorizontalDefaultData} />;
    /** case NAV_STYLE_DARK_HORIZONTAL:
      return <HorizontalDark />;

    case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
      return <InsideHeader />;

    case NAV_STYLE_ABOVE_HEADER:
      return <AboveHeader />;

    case NAV_STYLE_BELOW_HEADER:
      return <BelowHeader />;

    case NAV_STYLE_FIXED:
      return <Topbar />;

    case NAV_STYLE_DRAWER:
      return <Topbar />;

    case NAV_STYLE_MINI_SIDEBAR:
      return <Topbar />;

    case NAV_STYLE_NO_HEADER_MINI_SIDEBAR:
      return <NoHeaderNotification />;

    case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
      return <NoHeaderNotification />; */

    default:
      return null;
  }
};

const SIDEBAR_VISIBLE_ON = [
  NAV_STYLE_FIXED,
  NAV_STYLE_DRAWER,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
];

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  const [state] = useStore();
  const { isDirectionRTL, layoutType, navStyle } = state;

  const setLayoutType = (layoutType: LayoutType) => {
    if (layoutType === LAYOUT_TYPE_FULL) {
      document.body.classList.remove('boxed-layout');
      document.body.classList.remove('framed-layout');
      document.body.classList.add('full-layout');
    } else if (layoutType === LAYOUT_TYPE_BOXED) {
      document.body.classList.remove('full-layout');
      document.body.classList.remove('framed-layout');
      document.body.classList.add('boxed-layout');
    } else if (layoutType === LAYOUT_TYPE_FRAMED) {
      document.body.classList.remove('boxed-layout');
      document.body.classList.remove('full-layout');
      document.body.classList.add('framed-layout');
    }
  };

  const setNavStyle = (navStyle: NavStyle) => {
    if (
      navStyle === NAV_STYLE_DEFAULT_HORIZONTAL ||
      navStyle === NAV_STYLE_DARK_HORIZONTAL ||
      navStyle === NAV_STYLE_INSIDE_HEADER_HORIZONTAL ||
      navStyle === NAV_STYLE_ABOVE_HEADER ||
      navStyle === NAV_STYLE_BELOW_HEADER
    ) {
      document.body.classList.add('full-scroll');
      document.body.classList.add('horizontal-layout');
    } else {
      document.body.classList.remove('full-scroll');
      document.body.classList.remove('horizontal-layout');
    }
  };

  useEffect(() => {
    if (isDirectionRTL) {
      document.documentElement.classList.add('rtl');
      document.documentElement.setAttribute('data-direction', 'rtl');
    } else {
      document.documentElement.classList.remove('rtl');
      document.documentElement.setAttribute('data-direction', 'ltr');
    }
  }, [isDirectionRTL]);

  useEffect(() => {
    setLayoutType(layoutType);
    setNavStyle(navStyle);
  }, [layoutType, navStyle]);
  return (
    <AntLayout className="gx-app-layout">
      <Media greaterThan="tab">{SIDEBAR_VISIBLE_ON.includes(navStyle) && <Sidebar />}</Media>
      <Media lessThan="tab">
        <Sidebar />
      </Media>
      <AntLayout>
        {getNavStyles(navStyle)}
        <Content className={`gx-layout-content ${getContainerClass(navStyle)} `}>
          {children}
          <Footer />
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default memo(Layout);
