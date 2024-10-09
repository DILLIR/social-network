import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesPageFilters } from './ArticlesPageFilters';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'page/ArticleDetailsPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Default: Story = {
    args: { },
};
