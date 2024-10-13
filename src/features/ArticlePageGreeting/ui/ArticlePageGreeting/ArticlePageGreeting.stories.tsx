import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlePageGreeting } from './ArticlePageGreeting';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticlePageGreeting> = {
    title: 'features/ArticlePageGreeting',
    component: ArticlePageGreeting,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ArticlePageGreeting>;

export const Default: Story = {
    args: {}
};
