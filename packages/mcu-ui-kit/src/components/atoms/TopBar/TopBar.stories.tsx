import React from 'react';
import { Layout } from 'antd';
import { Meta } from '@storybook/react';
// Component
import { TopBar } from '.';

export default {
  title: 'Components/Atoms/TopBar',
  component: TopBar,
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

export const base = ({ isLoggedIn, message }) => (
  <Layout className="gx-app-layout">
    <Layout>
      <TopBar
        {...{
          isLoggedIn,
          LoginAction: () => alert('login'),
          SignUpAction: () => alert('SignUp'),
          LogoutAction: () => alert('Logout')
        }}
      >
        <span>
          <a onClick={() => alert('click')}>{message}</a>
        </span>
      </TopBar>
    </Layout>
  </Layout>
);
