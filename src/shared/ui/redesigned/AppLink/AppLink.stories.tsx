import { fn } from '@storybook/test';

import { AppLink } from './AppLink';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppLink> = {
    title: 'Redesigned/shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: { onClick: fn(), to: '/' }
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Button',
        variant: 'primary'
    }
};

export const Red: Story = {
    args: {
        children: 'Button',
        variant: 'red'
    }
};
