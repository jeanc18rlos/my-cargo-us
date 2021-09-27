import React, { useState } from 'react';
// Component
import { MainLayout, HeroSlider } from 'mcu-ui-kit';

const languageData = [
  {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us'
  },
  {
    languageId: 'chinese',
    locale: 'zh',
    name: 'Chinese',
    icon: 'cn'
  },
  {
    languageId: 'spanish',
    locale: 'es',
    name: 'Spanish',
    icon: 'es'
  },
  {
    languageId: 'french',
    locale: 'fr',
    name: 'French',
    icon: 'fr'
  },
  {
    languageId: 'italian',
    locale: 'it',
    name: 'Italian',
    icon: 'it'
  },
  {
    languageId: 'saudi-arabia',
    locale: 'ar',
    name: 'Arabic',
    icon: 'sa'
  }
];

const Index = () => {
  const topbar = {
    label: 'Covid 19 Disclaimer Advise, click Here, to know more ',
    link: '/covid-advice'
  };
  const [isLoggedIn, setLoggedIn] = useState(false);

  const LogoutAction = () => setLoggedIn(false);
  const LoginAction = () => setLoggedIn(true);
  const SignUpAction = () => setLoggedIn(true);
  let [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const onToggleCollapsedNav = () => {
    setSidebarCollapsed(true);
  };
  return (
    <MainLayout
      {...{
        topbar,
        sidebarCollapsed,
        setSidebarCollapsed: () => {
          setSidebarCollapsed(false);
        },
        onToggleCollapsedNav,
        isLoggedIn,
        LogoutAction,
        SignUpAction,
        LoginAction,
        languageData,
        locale: languageData[0]
      }}
    >
      <HeroSlider
        onClick={to => alert(to)}
        {...{
          slides: [
            {
              type: 'image',
              mediaUrl:
                'https://www.wagenborg.com/media/1002/header.jpg?anchor=center&mode=crop&width=1800&height=950&rnd=132025816910000000',
              title: `full sustainable cargo solutions!`,
              headline: 'Flexibile, Improved And accelerated Solutions',
              description:
                'Representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.',
              buttons: [
                {
                  link: '/data',
                  label: 'our services',
                  variant: 'secondary'
                },
                {
                  link: '/data',
                  label: 'more about us',
                  variant: 'primary'
                }
              ]
            }
          ]
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </MainLayout>
  );
};

export default Index;
