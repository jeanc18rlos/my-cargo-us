import React from 'react';
import { Layout } from 'antd';
import { Meta } from '@storybook/react';
// Component
import { ShortcutsAtom } from '.';

export default {
  title: 'Components/Atoms/TranslucentCard',
  component: ShortcutsAtom,
  argTypes: {
    label: {
      defaultValue: 'Sustainable',
      control: {
        type: 'text'
      }
    },
    title: {
      defaultValue: 'Warehouses Services',
      control: {
        type: 'text'
      }
    },
    active: {
      options: [true, false],
      control: { type: 'radio' }
    }
  }
} as Meta;

type Props = {
  icon: string;
  title: string;
  link: string;
  label: string;
  active?: boolean;
};

export const base = (props: Props) => (
  <Layout className="gx-app-layout">
    <Layout
      style={{
        padding: 20,
        backgroundImage:
          'url(https://www.wagenborg.com/media/1002/header.jpg?anchor=center&mode=crop&width=1800&height=950&rnd=132025816910000000)'
      }}
    >
      <ShortcutsAtom {...props} />
    </Layout>
  </Layout>
);
