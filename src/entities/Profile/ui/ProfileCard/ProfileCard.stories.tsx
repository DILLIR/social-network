import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';
import { ProfileCard } from './ProfileCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
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
    avatar: '/assets/logo.jpeg'
};

export const Light: Story = {
    args: { data }
};

export const Dark: Story = {
    args: { data },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const WithError: Story = {
    args: { error: 'error' }
};

export const Loading: Story = {
    args: { isLoading: true }
};
