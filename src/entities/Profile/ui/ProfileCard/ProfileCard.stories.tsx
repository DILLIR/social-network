import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';
import { ProfileCard } from './ProfileCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

const data = {
    username: 'admin',
    age: 20,
    country: Country.UK,
    lastName: 'Doe',
    firstName: 'John',
    city: 'London',
    currency: Currency.USD,
    avatar: 'https://2.gravatar.com/avatar/f0a41e6031c9e0e3736c0d8829c94e991c6ec583ccf63277fe4295a8d0d35637?size=512',
};

export const Light: Story = {
    args: { data },
};

export const Dark: Story = {
    args: { data },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithError: Story = {
    args: { error: 'error' },
};

export const Loading: Story = {
    args: { isLoading: true },
};
