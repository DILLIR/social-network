import { UserRole } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Default: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'cool',
                user: {
                    id: '1',
                    username: 'dillir',
                    roles: [UserRole.USER]
                }
            },
            {
                id: '2',
                text: 'Hello world',
                user: {
                    id: '2',
                    username: 'Vlada',
                    roles: [UserRole.USER]
                }
            }
        ]
    }
};

export const Loading: Story = {
    args: {
        isLoading: true,
        comments: []
    }
};
