import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen'
    },

    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    decorators: [StoreDecorator({})]
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};

export const withAuthLight: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    username: 'admin'
                }
            }
        })
    ]
};

export const withAuthDark: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    username: 'admin'
                }
            }
        }),
        ThemeDecorator(Theme.DARK)
    ]
};
