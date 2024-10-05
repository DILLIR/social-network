import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';

const meta: Meta<typeof NotificationList> = {
    title: 'entities/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof NotificationList>;


export const Default: Story = {
    args: {  }
};