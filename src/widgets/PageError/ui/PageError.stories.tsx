import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { PageError } from './PageError';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {

};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
