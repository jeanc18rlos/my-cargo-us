import { Layout, BackTop } from 'antd';

// Component
import { Header } from './header';
import { Footer } from './footer';
import { Media, TopBar } from '../';
import { useInView } from 'react-intersection-observer';
import { ArrowUpOutlined } from '@ant-design/icons';
import Sidebar from './sidebar';

export interface localeData {
  languageId: string;
  locale: string;
  name: string;
  icon: string;
}

export interface AuthProps {
  isLoggedIn: boolean;
  LogoutAction: () => void;
  LoginAction: () => void;
  SignUpAction: () => void;
}

export interface LanguageProps {
  languageData: localeData[];
  locale: localeData;
}
interface LayoutProps {
  children: any;
  topbar: { link: string; label: string };
}

export interface SideBarProps {
  sidebarCollapsed: boolean;
  onToggleCollapsedNav: () => void;
  setSidebarCollapsed: () => void;
}
export const MainLayout = ({
  children,
  isLoggedIn,
  LogoutAction,
  LoginAction,
  SignUpAction,
  topbar: { link, label },
  languageData,
  locale,
  sidebarCollapsed,
  onToggleCollapsedNav,
  setSidebarCollapsed
}: LayoutProps & AuthProps & LanguageProps & SideBarProps) => {
  const [topBarRef, topBarInView] = useInView({ threshold: 0 });
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      console.log('sss');
      const top = document.documentElement.scrollTop || document.body.scrollTop;
      if (top > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, top - top / 8);
      }
    }
  };
  return (
    <Layout className="gx-app-layout">
      <Layout>
        <Media lessThan="lg">
          <Sidebar {...{ sidebarCollapsed, setSidebarCollapsed, onToggleCollapsedNav }} />
        </Media>
        <Layout.Content className={`gx-layout-content gx-container-wrap`}>
          <TopBar
            ref={topBarRef}
            {...{
              isLoggedIn,
              LoginAction,
              SignUpAction,
              LogoutAction
            }}
          >
            <span>
              <a onClick={() => alert(link)}>{label}</a>
            </span>
          </TopBar>
          <Header
            {...{
              navStyle: topBarInView ? '' : 'solid',
              isLoggedIn,
              LogoutAction,
              languageData,
              locale,
              setSidebarCollapsed
            }}
          />
          {children}
          <BackTop onClick={() => scrollToTop()} visible={true} visibilityHeight={1500}>
            <div
              style={{
                height: 40,
                width: 40,
                lineHeight: '40px',
                borderRadius: 4,
                backgroundColor: '#e63946',
                color: '#fff',
                textAlign: 'center',
                fontSize: 14
              }}
            >
              <ArrowUpOutlined />
            </div>
          </BackTop>
          <Footer />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
