import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'page/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Default: Story = {
    args: { },
};
