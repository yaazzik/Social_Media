import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
