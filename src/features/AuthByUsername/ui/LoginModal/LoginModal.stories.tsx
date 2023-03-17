import React from 'react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { LoginModal } from './LoginModal';

export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
};

Light.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
    },
})];

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
    },
})];

export const Error = Template.bind({});
Error.args = {
    isOpen: true,
};
Error.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        error: 'Error',
    },
})];

export const Loading = Template.bind({});
Loading.args = {
    isOpen: true,
};
Loading.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        isLoading: true,
    },
})];
