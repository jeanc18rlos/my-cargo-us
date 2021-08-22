import { withInfo } from '@storybook/addon-info';
import { text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { jsxDecorator } from 'storybook-addon-jsx';

import Card from ".";

export default {
    title: 'Components/Atoms/Card',
    component: Card,
    decorators: [withKnobs, jsxDecorator, withInfo],
    parameters: {
        backgrounds: [{ name: 'default', value: 'rgb(255, 255, 255)', default: true }],
    },
};


export const base = () => (
  <Card>
    {text("Label", "Default")}
  </Card>
);
