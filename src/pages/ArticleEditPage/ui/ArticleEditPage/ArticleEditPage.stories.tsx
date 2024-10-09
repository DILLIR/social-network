import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleEditPage from './ArticleEditPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'page/ArticleDetailsPage/ArticleEditPage',
    component: ArticleEditPage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Default: Story = {
    args: { },
};
