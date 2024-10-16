import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleSortSelector } from './ArticleSortSelector';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleSortSelector> = {
    title: 'entities/ArticleSortSelector',
    component: ArticleSortSelector,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Default: Story = {
    args: {}
};
