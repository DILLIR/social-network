import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'page/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 20,
                country: Country.UK,
                lastName: 'Doe',
                firstName: 'John',
                city: 'London',
                currency: Currency.USD,
            },
        },
    })],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
