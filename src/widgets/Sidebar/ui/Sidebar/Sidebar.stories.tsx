import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({
            user: {
                authData: {}
            }
        })
    ]
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const NoAuth: Story = {
    decorators: [
        StoreDecorator({
            user: {}
        })
    ]
};
