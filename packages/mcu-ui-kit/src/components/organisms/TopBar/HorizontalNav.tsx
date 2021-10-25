import { Menu, Switch } from 'antd';
import { Utils, Components, Config } from '../../../';
const {
  Atoms: { Link }
} = Components;
const {
  ThemeSettings: {
    NAV_STYLE_ABOVE_HEADER,
    NAV_STYLE_BELOW_HEADER,
    NAV_STYLE_DEFAULT_HORIZONTAL,
    NAV_STYLE_INSIDE_HEADER_HORIZONTAL
  }
} = Config;
const { IntlMessages } = Utils;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { useStore } from '../../../config';

const Links = [
  {
    title: 'home',
    to: '/home',
    id: 'home'
  },
  {
    title: 'Our Company',
    id: 'company',
    items: [
      { id: '/company/about', title: 'About Us', to: '/company/about' },
      { id: '/company/core', title: 'Core Values', to: '/company/core' },
      { id: '/company/leadership', title: 'Leadership Team', to: '/company/leadership' },
      { id: '/company/locations', title: 'Global Locations', to: '/company/locations' },
      { id: '/company/gallery', title: 'Our Gallery', to: '/company/gallery' },
      { id: '/company/awards', title: 'Awards & Recognition', to: '/company/awards' },
      { id: '/company/careers', title: 'Careers', to: '/company/careers' }
    ]
  },
  {
    title: 'Services',
    id: 'services',
    items: [
      {
        title: 'Transport Services',
        id: 'services/transport',
        items: [
          { id: 'services/transport/Warehousing', title: 'Warehousing', to: '/' },
          { id: 'services/transport/Air', title: 'Air Freight', to: '/' },
          { id: 'services/transport/Ocean', title: 'Ocean Freight', to: '/' },
          { id: 'services/transport/Road', title: 'Road Freight', to: '/' },
          { id: 'services/transport/Supply', title: 'Supply Chain', to: '/' },
          { id: 'services/transport/Packaging', title: 'Packaging', to: '/' }
        ]
      },
      {
        title: 'Features',
        id: 'services/features',
        items: [
          { id: 'services/Request', title: 'Request A Quote', to: '/' },
          { id: 'services/Track', title: 'Track & Trace', to: '/' },
          { id: 'services/Find', title: 'Find A Location', to: '/' },
          { id: 'services/Shipping', title: 'Shipping Rates', to: '/' }
        ]
      },
      {
        title: 'Individual Services',
        id: 'services/Individual',
        items: [
          { id: 'services/Assisted', title: 'Assisted Purchase', to: '/' },
          { id: 'services/Food', title: 'Food Shipping', to: '/' },
          { id: 'services/Package', title: 'Package Inspection', to: '/' },
          { id: 'services/Repackage', title: 'Repackage', to: '/' }
        ]
      },
      {
        title: 'Industry Solutions',
        id: 'services/Industry',
        items: [
          { id: 'services/Industry/Retail', title: 'Retail & Consumer', to: '/' },
          { id: 'services/Industry/Sciences', title: 'Sciences & Healthcare', to: '/' },
          { id: 'services/Industry/Industrial', title: 'Industrial & Chemical', to: '/' },
          { id: 'services/Industry/Power', title: 'Power Generation', to: '/' },
          { id: 'services/Industry/Food', title: 'Food & Beverage', to: '/' },
          { id: 'services/Industry/Oil', title: 'Oil & Gas', to: '/' }
        ]
      }
    ]
  },
  {
    title: 'News and Media',
    id: 'news',
    items: [
      { id: 'news/our', title: 'Our Blog', to: '/news/our' },
      { id: 'news/latest', title: 'Latest News', to: '/news/latest' },
      { id: 'news/tutorials', title: 'Tutorials', to: '/news/tutorials' },
      { id: 'news/client', title: 'Client Reviews ', to: '/news/client' }
    ]
  },
  {
    title: 'Support',
    id: 'support',
    items: [
      { id: 'support/Tutorials', title: 'Tutorials', to: '/' },
      { id: 'support/Forum', title: 'Help Forum', to: '/' },
      { id: 'support/Help', title: 'Help & FAQs', to: '/' },
      { id: 'support/Contact', title: 'Contact', to: '/' }
    ]
  },
  {
    title: 'pricing',
    id: 'pricing',
    to: '/'
  }
];

const HorizontalNav = () => {
  const [state] = useStore();
  const { navStyle } = state;
  const current = () => getNavStyleSubMenuClass(navStyle);
  const getItems = (items, NavStyle) =>
    items.map((link: any) => {
      if (link.to) {
        return (
          <Menu.Item title={<>{link.title}</>} key={link.id}>
            <Link to={link.to}>{link.title}</Link>
          </Menu.Item>
        );
      }
      if (link.items) {
        return (
          <SubMenu key={link.id} popupClassName={NavStyle} title={link.title}>
            {getItems(link.items, 'gx-menu-horizontal')}
          </SubMenu>
        );
      }

      return (
        <Menu.Item title={<>{link.title}</>} key={link.id}>
          <Link to={link.to}>{link.title}</Link>
        </Menu.Item>
      );
    });
  const list = getItems(Links, current);

  return (
    <Menu style={{ width: 'calc(100% - 200px)' }} mode="horizontal">
      {list}
    </Menu>
  );
};
const getNavStyleSubMenuClass = (navStyle: any) => {
  switch (navStyle) {
    case NAV_STYLE_DEFAULT_HORIZONTAL:
      return 'gx-menu-horizontal gx-submenu-popup-curve';
    case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
      return 'gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve';
    case NAV_STYLE_BELOW_HEADER:
      return 'gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve';
    case NAV_STYLE_ABOVE_HEADER:
      return 'gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve';
    default:
      return 'gx-menu-horizontal';
  }
};

export default HorizontalNav;
