import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Default: Story = {
    args: {},
    parameters: {
        mockData: [
            {
                url: `${__API_URL__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Alert',
                        description: "Hi there! I'm a notification"
                    },
                    {
                        id: '2',
                        title: 'Alert',
                        description: "Hi there! I'm a notification"
                    },
                    {
                        id: '3',
                        title: 'Alert',
                        description: "Hi there! I'm a notification"
                    },
                    {
                        id: '4',
                        title: 'Alert',
                        description: "Hi there! I'm a notification"
                    },
                    {
                        id: '5',
                        title: 'Alert',
                        description: "Hi there! I'm a notification"
                    }
                ]
            }
        ]
    }
};
