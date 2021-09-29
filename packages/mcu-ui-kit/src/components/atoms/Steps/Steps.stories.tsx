import React from 'react';
import { Layout } from 'antd';
import { Meta } from '@storybook/react';
// Component
import { Steps } from '.';

export default {
  title: 'Components/Atoms/Steps',
  component: Steps,
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
      <Steps />
    </Layout>
  </Layout>
);
