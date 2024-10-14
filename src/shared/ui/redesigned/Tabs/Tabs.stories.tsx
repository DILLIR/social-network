import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Tabs } from './Tabs';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
    title: 'Redesigned/shared/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: {
        tabs: [
            { value: '1', node: 'Tab 1' },
            { value: '2', node: 'Tab 2' },
            { value: '3', node: 'Tab 3' }
        ],
        value: '1'
    }
};
