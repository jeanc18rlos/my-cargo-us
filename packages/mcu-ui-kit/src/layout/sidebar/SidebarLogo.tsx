import React from 'react';
import { Link } from '../../';

import MobileLogo from '../../assets/layout/logo_mobile.svg';

const SidebarLogo = () => {
  return (
    <div className="gx-layout-sider-header">
      <Link to="/" className="gx-site-logo">
        <img alt="lo" src={MobileLogo} />
      </Link>
    </div>
  );
};

export default SidebarLogo;
