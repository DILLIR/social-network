import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
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
        value: '1',
        onTabClick: (tab) => console.log(tab)
    }
};
