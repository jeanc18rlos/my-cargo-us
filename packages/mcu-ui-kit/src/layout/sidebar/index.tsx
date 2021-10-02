import React from 'react';
import { Drawer, Layout } from 'antd';
import { SideBarProps } from '../';
import SidebarContent from './SidebarContent';

const { Sider } = Layout;

const Sidebar = ({ sidebarCollapsed, setSidebarCollapsed, onToggleCollapsedNav }: SideBarProps) => {
  return (
    <Sider
      className={`gx-app-sidebar ${sidebarCollapsed && 'gx-collapsed-sidebar'} gx-layout-sider-dark`}
      trigger={null}
      collapsed={sidebarCollapsed}
      theme={'dark'}
      collapsible
    >
      <Drawer
        className={`gx-drawer-sidebar gx-drawer-sidebar-dark`}
        placement="left"
        closable={false}
        onClose={onToggleCollapsedNav}
        visible={!sidebarCollapsed}
      >
        <SidebarContent />
      </Drawer>
    </Sider>
  );
};
export default Sidebar;
