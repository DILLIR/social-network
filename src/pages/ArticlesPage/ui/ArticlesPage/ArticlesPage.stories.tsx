import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticlesPage from './ArticlesPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticlesPage> = {
    title: 'page/ArticleDetailsPage/ArticlesPage',
    component: ArticlesPage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Default: Story = {
    args: { },
};
