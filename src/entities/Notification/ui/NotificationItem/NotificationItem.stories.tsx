import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationItem } from './NotificationItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Default: Story = {
    args: {
        item: {
            id: 1,
            title: 'Title',
            description: 'Description',
        }
    },
};
