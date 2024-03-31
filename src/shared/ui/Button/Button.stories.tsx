import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
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
        theme: ThemeButton.CLEAR
    }
};

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE
    }
};

export const OutlineDark: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

