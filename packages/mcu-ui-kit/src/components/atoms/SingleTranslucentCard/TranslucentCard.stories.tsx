import React from 'react';
import { Layout } from 'antd';
import { Meta } from '@storybook/react';
// Component
import { SingleShortcutsAtom } from '.';

export default {
  title: 'Components/Atoms/SingleTranslucentCard',
  component: SingleShortcutsAtom
} as Meta;

export const base = () => (
  <Layout
    style={{
      padding: 20,
      backgroundImage:
        'url(https://www.wagenborg.com/media/1002/header.jpg?anchor=center&mode=crop&width=1800&height=950&rnd=132025816910000000)'
    }}
  >
    <SingleShortcutsAtom />
  </Layout>
);
