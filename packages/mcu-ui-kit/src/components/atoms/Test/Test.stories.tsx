import React from 'react';
import { Test } from ".";
import { Meta } from '@storybook/react';


export default {
  title: 'Components/Atoms/Test',
  component: Test,
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
  <Test {...{color}}>
    {text}
  </Test>
);
