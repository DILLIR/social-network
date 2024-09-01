import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Default: Story = {
    args: { },
};
