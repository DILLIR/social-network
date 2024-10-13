import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Theme } from '@/shared/const/theme';
// import avatar from '@/shared/assets/tests/logo.jpeg';
import ProfilePage from './ProfilePage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfilePage> = {
    title: 'page/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    username: 'admin',
                    age: 20,
                    country: Country.UK,
                    lastName: 'Doe',
                    firstName: 'John',
                    city: 'London',
                    currency: Currency.USD,
                    avatar: '/assets/logo.jpeg'
                }
            }
        })
    ]
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
