import { fn } from '@storybook/test';

import { Input } from './Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: 'Type here...',
    },
};
