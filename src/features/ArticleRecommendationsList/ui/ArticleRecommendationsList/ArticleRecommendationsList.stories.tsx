import type { Meta, StoryObj } from '@storybook/react';
import { article } from 'entities/Article/ui/ArticleList/ArticleList.stories';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${__API_URL__}/articles?_limit=5`,
                method: 'GET',
                status: 200,
                response: new Array(9).fill(0).map((_, index) => ({
                    ...article,
                    id: index.toString()
                }))
            }
        ]
    }
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Default: Story = {
    args: {}
};
