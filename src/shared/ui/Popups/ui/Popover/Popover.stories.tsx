import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
    title: 'shared/Popover',
    component: Popover,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof Popover>;


export const Default: Story = {
    args: {  }
};