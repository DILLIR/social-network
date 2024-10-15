import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Popover } from './Popover';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Popover> = {
    title: 'Redesigned/shared/Popover',
    component: Popover,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
    args: {}
};
