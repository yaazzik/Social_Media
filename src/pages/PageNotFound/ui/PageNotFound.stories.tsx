import React from 'react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import PageNotFound from './PageNotFound';

export default {
    title: 'pages/PageNotFound',
    component: PageNotFound,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = () => <PageNotFound />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
