import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Theme } from '../../../app/providers/ThemeProvider';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: { onClick: fn(), to: '/' },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Button',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'Button',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const Red: Story = {
    args: {
        children: 'Button',
        theme: AppLinkTheme.RED,
    },
};

export const DarkPrimary: Story = {
    args: {
        children: 'Button',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkSecondary: Story = {
    args: {
        children: 'Button',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkRed: Story = {
    args: {
        children: 'Button',
        theme: AppLinkTheme.RED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
