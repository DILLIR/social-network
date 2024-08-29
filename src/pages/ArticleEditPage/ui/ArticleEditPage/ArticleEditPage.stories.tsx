import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleEditPage } from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'entities/ArticleEditPage',
    component: ArticleEditPage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;


export const Default: Story = {
    args: {  }
};