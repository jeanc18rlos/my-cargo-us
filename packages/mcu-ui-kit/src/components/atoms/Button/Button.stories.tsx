import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import * as React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';

// Component
import Button from '.';

export default {
    title: 'Components/Atoms/Button',
    component: Button,
    decorators: [withKnobs, jsxDecorator, withInfo],
    parameters: {
        backgrounds: [{ name: 'default', value: 'rgb(255, 255, 255)', default: true }],
    },
};

export const primary = () => (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
        <Button primary={true} backgroundColor="red" size="xl" label="button" onClick={() => alert('Clicked')}/>
        <br />
    </div>
);
