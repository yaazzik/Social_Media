import React from 'react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'Test',
            age: 22,
            avatar: 'https://wallpaperaccess.com/full/4595689.jpg',
            country: Country.PE,
            currency: Currency.RUB,
            firstname: 'Test',
            lastname: 'Test',
            city: 'Test',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'Test',
            age: 22,
            avatar: 'https://wallpaperaccess.com/full/4595689.jpg',
            country: Country.PE,
            currency: Currency.RUB,
            firstname: 'Test',
            lastname: 'Test',
            city: 'Test',
        },
    },
})];
