import { SetStateAction, useState } from 'react';
import { Button, Dropdown, Layout, Menu, message, Popover, Select } from 'antd';
import Icon from '@ant-design/icons';

import { switchLanguage, toggleCollapsedSideNav } from '../../../config/actions/Layout';
import { CustomScrollbars } from '../../../utils';
import { useStore } from '../../../config';
import { Logo } from '../../../assets';
import { Media } from '../../../theme/config/breakpoints';
import { UserInfo, AppNotification, MailNotification } from '../../molecules';
import { SearchBox, Link } from '../../atoms';
import languageData from './languageData';
import HorizontalNav from './HorizontalNav';

const { Header } = Layout;
const Option = Select.Option;
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Products</Menu.Item>
    <Menu.Item key="2">Apps</Menu.Item>
    <Menu.Item key="3">Blogs</Menu.Item>
  </Menu>
);

function handleMenuClick(e: any) {
  message.info('Click on menu item.');
}

function handleChange(value: any) {}

type HorizontalDefaultData = {
  advice: {
    icon: string;
    label: string;
    action: () => void;
  };
  auth: {
    login: {
      label: string;
      action: () => void;
    };
    register: {
      label: string;
      action: () => void;
    };
  };
};

const TopBar = ({ advice, auth }: any) => (
  <div className="gx-header-horizontal-top">
    <div className="gx-container">
      <div className="gx-header-horizontal-top-flex">
        <div onClick={advice.action} className="gx-header-horizontal-top-left">
          <i className={`icon icon-${advice.icon} gx-mr-3`} />
          <p className="gx-mb-0 gx-text-truncate">{advice.label}</p>
        </div>
        <ul className="gx-login-list">
          <li onClick={auth.login.action}>{auth.login.label}</li>
          <li onClick={auth.register.action}>{auth.register.label}</li>
        </ul>
      </div>
    </div>
  </div>
);
const HorizontalDefault = ({ advice, auth }: HorizontalDefaultData) => {
  const [searchText, setSearchText] = useState('');
  const [state, dispatch] = useStore();
  const { navCollapsed, locale } = state;

  const languageMenu = () => (
    <CustomScrollbars className="gx-popover-lang-scroll">
      <ul className="gx-sub-popover">
        {languageData.map(language => (
          <li
            className="gx-media gx-pointer"
            key={JSON.stringify(language)}
            onClick={e => dispatch(switchLanguage(language))}
          >
            <i className={`flag flag-24 gx-mr-2 flag-${language.icon}`} />
            <span className="gx-language-text">{language.name}</span>
          </li>
        ))}
      </ul>
    </CustomScrollbars>
  );

  const updateSearchChatUser = (evt: { target: { value: SetStateAction<string> } }) => {
    setSearchText(evt.target.value);
  };

  return (
    <div className="gx-header-horizontal">
      <TopBar {...{ advice, auth }} />
      <Header className="gx-header-horizontal-main">
        <div className="gx-container">
          <div className="gx-header-horizontal-main-flex">
            <div className="gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3">
              <i
                className="gx-icon-btn icon icon-menu"
                onClick={() => {
                  dispatch(toggleCollapsedSideNav(!navCollapsed));
                }}
              />
            </div>
            <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer gx-w-logo">
              <img width={100} alt="" src={Logo} />
            </Link>
            <Link to="/" className="gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo">
              <img width={100} alt="" src={Logo} />
            </Link>
            <div className="gx-header-search gx-d-none gx-d-lg-flex">
              <SearchBox
                styleName="gx-lt-icon-search-bar-lg"
                placeholder="Search in app..."
                onChange={updateSearchChatUser}
                value={searchText}
              />

              <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Products</Option>
                <Option value="lucy">Apps</Option>
                <Option value="Yiminghe">Blogs</Option>
              </Select>
            </div>

            <ul className="gx-header-notifications gx-ml-auto">
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
                        onChange={updateSearchChatUser}
                        value={searchText}
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
              <li className="gx-language">
                <Popover
                  overlayClassName="gx-popover-horizantal"
                  placement="bottomRight"
                  content={languageMenu()}
                  trigger="click"
                >
                  <span className="gx-pointer gx-flex-row gx-align-items-center">
                    <i className={`flag flag-24 flag-${locale.icon}`} />
                  </span>
                </Popover>
              </li>
              <li className="gx-user-nav">
                <UserInfo />
              </li>
            </ul>
          </div>
        </div>
      </Header>

      <Media greaterThan="tab">
        <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve">
          <div className="gx-container">
            <div className="gx-header-horizontal-nav-flex">
              <HorizontalNav />

              <ul className="gx-header-notifications ">
                <li>
                  <span className="gx-pointer gx-d-block">
                    <i className="icon icon-menu-lines" />
                  </span>
                </li>
                <li>
                  <span className="gx-pointer gx-d-block">
                    <i className="icon icon-setting" />
                  </span>
                </li>
                <li>
                  <span className="gx-pointer gx-d-block">
                    <i className="icon icon-apps-new" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Media>
    </div>
  );
};

export default HorizontalDefault;
