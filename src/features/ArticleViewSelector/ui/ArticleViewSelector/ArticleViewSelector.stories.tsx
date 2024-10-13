import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleViewSelector } from './ArticleViewSelector';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'entities/ArticleViewSelector',
    component: ArticleViewSelector,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Default: Story = {
    args: {}
};
