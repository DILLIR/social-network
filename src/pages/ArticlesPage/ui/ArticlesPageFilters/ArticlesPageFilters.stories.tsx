import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'page/Article/ArticlesPageFilters',
    component: ArticlesPageFilters,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Default: Story = {
    args: { },
};
