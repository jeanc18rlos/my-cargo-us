import React, { useState, memo } from 'react';
import { Button, Dropdown, Layout, Menu, message, Popover, Select } from 'antd';
import Icon from '@ant-design/icons';
import { CustomScrollbars, Link, Media, SearchBox, MailNotification, AppNotification, UserInfo } from '../../';
import { StyledHeader, StyledNav } from './styled';
import { LanguageProps } from '..';

import HorizontalNav from './horizontalNav';

import LogoLight from '../../assets/layout/logo_light.svg';
import LogoDark from '../../assets/layout/logo_dark.svg';
import MobileLogo from '../../assets/layout/logo_mobile.svg';

// SubComponents
const { Header } = Layout;
const Option = Select.Option;

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Products</Menu.Item>
    <Menu.Item key="2">Pages</Menu.Item>
    <Menu.Item key="3">Posts</Menu.Item>
  </Menu>
);

function handleMenuClick(e: any) {
  message.info('Click on menu item.');
}

function handleChange(value: any) {}

const LanguageMenu = ({ languageData }: any) => (
  <CustomScrollbars className="gx-popover-lang-scroll">
    <ul className="gx-sub-popover">
      {languageData.map((language: any) => (
        <li className="gx-media gx-pointer" key={JSON.stringify(language)} onClick={e => alert(e)}>
          <i className={`flag flag-24 gx-mr-2 flag-${language.icon}`} />
          <span className="gx-language-text">{language.name}</span>
        </li>
      ))}
    </ul>
  </CustomScrollbars>
);

enum navbarStyles {
  'solid',
  'transparent'
}

interface NavBarProps {
  navStyle: keyof typeof navbarStyles;
  isLoggedIn: boolean;
  LogoutAction: () => void;
  setSidebarCollapsed: () => void;
}
const NavBar = ({
  navStyle,
  isLoggedIn,
  LogoutAction,
  setSidebarCollapsed,
  languageData,
  locale
}: NavBarProps & LanguageProps) => {
  const [state, setState] = useState({
    searchText: ''
  });
  return (
    <StyledHeader className={['gx-header-horizontal gx-header-horizontal-dark', navStyle].join(' ')}>
      <Header className="gx-header-horizontal-main">
        <div
          style={{
            boxSizing: 'border-box',
            maxWidth: '100%'
          }}
          className="gx-container"
        >
          <div className="reverse-mobile gx-header-horizontal-main-flex">
            <Media className="flex-cont" lessThan="lg">
              <ul className="gx-header-notifications gx-ml-auto">
                <li className="gx-language">
                  <Popover
                    overlayClassName="gx-popover-horizantal"
                    placement="bottomRight"
                    content={<LanguageMenu {...{ languageData }} />}
                    trigger="click"
                  >
                    <span className="gx-pointer gx-flex-row gx-align-items-center">
                      <i className={`flag flag-24 flag-${locale.icon}`} />
                    </span>
                  </Popover>
                </li>
              </ul>

              <div className="gx-d-block  gx-linebar gx-mr-xs-3">
                <i
                  className="gx-icon-btn icon icon-menu"
                  onClick={() => {
                    setSidebarCollapsed();
                  }}
                />
              </div>
            </Media>
            <Media greaterThanOrEqual="lg">
              <Link to="/" className="brand gx-d-block gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo">
                <img className="gx-brand" alt="My Cargo US" src={navStyle === 'solid' ? LogoDark : LogoLight} />
              </Link>
            </Media>

            <Media className="brand" lessThan="lg">
              <Link to="/" className="brand gx-d-block gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo">
                <img
                  style={{
                    height: '30px'
                  }}
                  className="gx-brand"
                  alt="My Cargo US"
                  src={MobileLogo}
                />
              </Link>
            </Media>

            <Media greaterThanOrEqual="lg">
              <div className="gx-header-search gx-d-none gx-d-lg-flex">
                <SearchBox
                  styleName="gx-lt-icon-search-bar-lg"
                  placeholder="Search in app..."
                  onChange={(e: any) => setState({ ...state, searchText: e.target.value })}
                  value={state.searchText}
                />

                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                  <Option value="jack">Products</Option>
                  <Option value="lucy">Pages</Option>
                  <Option value="Yiminghe">Posts</Option>
                </Select>
              </div>
            </Media>
            <Media className="gx-ml-auto" greaterThanOrEqual="lg">
              <ul className="gx-header-notifications gx-ml-auto">
                {isLoggedIn && (
                  <>
                    <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none">
                      <Popover
                        overlayClassName="gx-popover-horizantal"
                        placement="bottomRight"
                        content={
                          <div className="gx-d-flex">
                            <Dropdown overlay={menu}>
                              <Button>
                                Category <Icon type="down" />
                              </Button>
                            </Dropdown>

                            <SearchBox
                              styleName="gx-popover-search-bar"
                              placeholder="Search in app..."
                              onChange={(e: any) => setState({ ...state, searchText: e.target.value })}
                              value={state.searchText}
                            />
                          </div>
                        }
                        trigger="click"
                      >
                        <span className="gx-pointer gx-d-block">
                          <i className="icon icon-search-new" />
                        </span>
                      </Popover>
                    </li>
                    <li className="gx-notify">
                      <Popover
                        overlayClassName="gx-popover-horizantal"
                        placement="bottomRight"
                        content={<AppNotification />}
                        trigger="click"
                      >
                        <span className="gx-pointer gx-d-block">
                          <i className="icon icon-notification" />
                        </span>
                      </Popover>
                    </li>
                    <li className="gx-msg">
                      <Popover
                        overlayClassName="gx-popover-horizantal"
                        placement="bottomRight"
                        content={<MailNotification />}
                        trigger="click"
                      >
                        <span className="gx-pointer gx-status-pos gx-d-block">
                          <i className="icon icon-chat-new" />
                          <span className="gx-status gx-status-rtl gx-small gx-orange" />
                        </span>
                      </Popover>
                    </li>
                  </>
                )}

                <li className="gx-language">
                  <Popover
                    overlayClassName="gx-popover-horizantal"
                    placement="bottomRight"
                    content={<LanguageMenu {...{ languageData }} />}
                    trigger="click"
                  >
                    <span className="gx-pointer gx-flex-row gx-align-items-center">
                      <i className={`flag flag-24 flag-${locale.icon}`} />
                    </span>
                  </Popover>
                </li>
                {isLoggedIn && <li className="gx-user-nav">{<UserInfo />}</li>}
              </ul>
            </Media>
          </div>
        </div>
      </Header>
      <Media greaterThanOrEqual="lg">
        <StyledNav className={['gx-header-horizontal-nav', navStyle].join(' ')}>
          <div className="gx-container">
            <div className="gx-header-horizontal-nav-flex">
              <HorizontalNav />
            </div>
          </div>
        </StyledNav>
      </Media>
    </StyledHeader>
  );
};
export default memo(NavBar);
