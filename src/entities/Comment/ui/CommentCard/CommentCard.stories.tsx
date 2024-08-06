import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof CommentCard>;


export const Default: Story = {
    args: {  }
};