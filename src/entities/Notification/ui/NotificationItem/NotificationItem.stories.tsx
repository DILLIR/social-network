import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/NotificationItem',
    component: NotificationItem,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;


export const Default: Story = {
    args: {  }
};