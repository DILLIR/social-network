import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Default: Story = {
    args: {
        articleId: '1'
    }
};

export const WithRate: Story = {
    args: {
        articleId: '1'
    },
    parameters: {
        mockData: [
            {
                url: `${__API_URL__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        userId: '1',
                        articleId: '1',
                        rate: 5
                    }
                ]
            }
        ]
    }
};
