import { fn } from '@storybook/test';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

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
        theme: ButtonTheme.CLEAR
    }
};

export const ClearInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED
    }
};

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE
    }
};

export const OutlineL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L
    }
};

export const OutlineXL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL
    }
};

export const Background: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND
    }
};

export const BackgroundInverse: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED
    }
};

export const OutlineDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Disabled: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        disabled: true
    }
};

export const Square: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED
    }
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.L
    }
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.XL
    }
};
