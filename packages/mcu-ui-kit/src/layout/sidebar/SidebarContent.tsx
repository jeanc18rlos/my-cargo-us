import React from 'react';
import { Menu } from 'antd';
import SidebarLogo from './SidebarLogo';
import UserProfile from './UserProfile';
import AppsNavigation from './AppsNavigation';

import { IntlMessages, Link, CustomScrollbars } from '../../';

const SidebarContent = () => {
  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
        <div className={`gx-sidebar-notifications`}>
          <UserProfile />
          <AppsNavigation />
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu theme={'dark'} mode="inline">
            <Menu.Item key="sample">
              <Link to="/sample">
                <i className="icon icon-widgets" />
                <span>
                  <IntlMessages id="sidebar.widgets" />
                </span>
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

export default React.memo(SidebarContent);
