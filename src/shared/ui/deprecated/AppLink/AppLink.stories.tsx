import { fn } from '@storybook/test';

import { AppLink, AppLinkTheme } from './AppLink';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: { onClick: fn(), to: '/' }
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Button',
        theme: AppLinkTheme.PRIMARY
    }
};

export const Secondary: Story = {
    args: {
        children: 'Button',
        theme: AppLinkTheme.SECONDARY
    }
};

export const Red: Story = {
    args: {
        children: 'Button',
        theme: AppLinkTheme.RED
    }
};
