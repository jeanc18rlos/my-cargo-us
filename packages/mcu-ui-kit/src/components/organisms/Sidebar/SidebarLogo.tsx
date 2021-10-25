import { Components, Assets } from '../../../';
const {
  Atoms: { Link }
} = Components;
const { MobileLogo } = Assets;

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
