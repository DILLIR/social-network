import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
