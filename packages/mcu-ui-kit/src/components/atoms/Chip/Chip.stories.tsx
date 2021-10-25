import React from 'react';
import { Chip } from ".";
import { Meta } from '@storybook/react';


export default {
  title: 'Components/Atoms/Chip',
  component: Chip,
  argTypes: {
    color: {
      options: ['red', 'blue', 'green'],
      control: { type: 'radio' },
      defaultValue: 'red'
    },
    text: {
      control: { type: 'text' },
      defaultValue: 'hello world'
    }
  }
} as Meta;

export const base = ({color, text}:any) => (
  <Chip {...{color}}>
    {text}
  </Chip>
);
