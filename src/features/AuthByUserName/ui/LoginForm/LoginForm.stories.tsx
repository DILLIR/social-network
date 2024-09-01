import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '../../../../shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'admin',
                password: '123',
            },
        }),
    ],
};

export const withError: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'admin',
                password: '123',
                error: 'Invalid username or password',
            },
        }),
    ],
};

export const withLoading: Story = {
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'admin',
                password: '123',
                isLoading: true,
            },
        }),
    ],
};
