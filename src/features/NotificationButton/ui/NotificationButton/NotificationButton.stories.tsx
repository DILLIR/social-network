import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationButton } from './NotificationButton';

const meta: Meta<typeof NotificationButton> = {
    title: 'features/NotificationButton',
    component: NotificationButton,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;


export const Default: Story = {
    args: {  }
};