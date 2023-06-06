import React from 'react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    data: {
        username: 'Hassan',
        avatar: 'https://wallpaperaccess.com/full/4595689.jpg',
        city: 'Boston',
        currency: Currency.USD,
        country: Country.USA,
        age: 23,
        firstname: 'Ellie',
        lastname: 'Heisenberg',
    },
};

export const Dark = Template.bind({});
Dark.args = {
    data: {
        username: 'Hassan',
        avatar: 'https://wallpaperaccess.com/full/4595689.jpg',
        city: 'Boston',
        currency: Currency.USD,
        country: Country.USA,
        age: 23,
        firstname: 'Ellie',
        lastname: 'Heisenberg',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',

};
