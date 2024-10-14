import { fn } from '@storybook/test';

import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    title: 'Redesigned/shared/Button',
    component: Button,
    tags: ['autodocs'],
    args: { onClick: fn() }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Button'
    }
};

export const Clear: Story = {
    args: {
        children: 'Button',
        variant: 'clear'
    }
};

export const Outline: Story = {
    args: {
        children: 'Button',
        variant: 'outline'
    }
};

export const OutlineL: Story = {
    args: {
        children: 'Button',
        variant: 'outline',
        size: 'l'
    }
};

export const OutlineXL: Story = {
    args: {
        children: 'Button',
        variant: 'outline',
        size: 'xl'
    }
};

export const Disabled: Story = {
    args: {
        children: 'Button',
        disabled: true
    }
};

export const Square: Story = {
    args: {
        children: '>',
        square: true
    }
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        square: true,
        size: 'l'
    }
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        square: true,
        size: 'xl'
    }
};
