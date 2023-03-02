import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ButtonSize, ButtonTheme } from './Button';

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

export const SmallSizeSquarePrimary = Template.bind({});
SmallSizeSquarePrimary.args = {
    children: 'S',
    theme: ButtonTheme.BACKGROUND_PRIMARY,
    size: ButtonSize.S,
    square: true,
};

export const SmallSizeSquarePrimaryDark = Template.bind({});
SmallSizeSquarePrimaryDark.args = {
    children: 'S',
    theme: ButtonTheme.BACKGROUND_PRIMARY,
    size: ButtonSize.S,
    square: true,
};
SmallSizeSquarePrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const MediumSizeSquarePrimary = Template.bind({});
MediumSizeSquarePrimary.args = {
    children: 'M',
    theme: ButtonTheme.BACKGROUND_PRIMARY,
    size: ButtonSize.M,
    square: true,
};

export const MediumSizeSquarePrimaryDark = Template.bind({});
MediumSizeSquarePrimaryDark.args = {
    children: 'M',
    theme: ButtonTheme.BACKGROUND_PRIMARY,
    size: ButtonSize.M,
    square: true,
};
MediumSizeSquarePrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LargeSizeSquarePrimary = Template.bind({});
LargeSizeSquarePrimary.args = {
    children: 'L',
    theme: ButtonTheme.BACKGROUND_PRIMARY,
    size: ButtonSize.L,
    square: true,
};

export const LargeSizeSquarePrimaryDark = Template.bind({});
LargeSizeSquarePrimaryDark.args = {
    children: 'L',
    theme: ButtonTheme.BACKGROUND_PRIMARY,
    size: ButtonSize.L,
    square: true,
};
LargeSizeSquarePrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SmallSizeSquareSecondary = Template.bind({});
SmallSizeSquareSecondary.args = {
    children: 'S',
    theme: ButtonTheme.BACKGROUND_SECONDARY,
    size: ButtonSize.S,
    square: true,
};

export const SmallSizeSquareSecondaryDark = Template.bind({});
SmallSizeSquareSecondaryDark.args = {
    children: 'S',
    theme: ButtonTheme.BACKGROUND_SECONDARY,
    size: ButtonSize.S,
    square: true,
};
SmallSizeSquareSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const MediumSizeSquareSecondary = Template.bind({});
MediumSizeSquareSecondary.args = {
    children: 'M',
    theme: ButtonTheme.BACKGROUND_SECONDARY,
    size: ButtonSize.M,
    square: true,
};

export const MediumSizeSquareSecondaryDark = Template.bind({});
MediumSizeSquareSecondaryDark.args = {
    children: 'M',
    theme: ButtonTheme.BACKGROUND_SECONDARY,
    size: ButtonSize.M,
    square: true,
};
MediumSizeSquareSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LargeSizeSquareSecondary = Template.bind({});
LargeSizeSquareSecondary.args = {
    children: 'L',
    theme: ButtonTheme.BACKGROUND_SECONDARY,
    size: ButtonSize.L,
    square: true,
};

export const LargeSizeSquareSecondaryDark = Template.bind({});
LargeSizeSquareSecondaryDark.args = {
    children: 'L',
    theme: ButtonTheme.BACKGROUND_SECONDARY,
    size: ButtonSize.L,
    square: true,
};
LargeSizeSquareSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'disabled',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
