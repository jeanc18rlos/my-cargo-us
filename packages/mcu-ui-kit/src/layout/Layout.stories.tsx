import React, { useState } from 'react';
import { Meta } from '@storybook/react';
// Component
import { MainLayout } from './';
import { HeroSlider } from '../';
import languageData from './__mocks/languageData';

export default {
  title: 'Layout/Main',
  component: MainLayout,
  argTypes: {
    isLoggedIn: {
      options: [true, false],
      control: { type: 'radio' }
    },
    message: {
      defaultValue: 'Covid 19 Disclaimer Advise, click Here, to know more',
      control: {
        type: 'text'
      }
    }
  }
} as Meta;

export const base = ({ message }) => {
  const topbar = {
    label: message,
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
            },

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
