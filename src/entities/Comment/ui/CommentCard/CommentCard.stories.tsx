import { UserRole } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentCard } from './CommentCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Default: Story = {
    args: {
        comment: {
            id: '2',
            text: 'Hello world',
            user: {
                id: '2',
                username: 'Daniel',
                roles: [UserRole.USER]
            }
        }
    }
};

export const Loading: Story = {
    args: {
        isLoading: true
    }
};
