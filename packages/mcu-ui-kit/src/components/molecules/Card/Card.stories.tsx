import React from 'react';
import { Card } from ".";
import { Meta } from '@storybook/react';


export default {
  title: 'Components/Molecules/Card',
  component: Card,
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
  <Card {...{color}}>
    {text}
  </Card>
);
