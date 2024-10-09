import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'page/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Default: Story = {
    args: { },
};
