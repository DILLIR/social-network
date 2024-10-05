import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';

const meta: Meta<typeof ArticlesInfiniteList> = {
    title: 'page/ArticleDetailsPage/ArticlesInfiniteList',
    component: ArticlesInfiniteList,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ArticlesInfiniteList>;


export const Default: Story = {
    args: {  }
};