import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};
