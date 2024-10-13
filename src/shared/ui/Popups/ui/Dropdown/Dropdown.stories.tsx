import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Button } from '@/shared/ui/Button';
import { Dropdown } from './Dropdown';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            { content: 'Item 1' },
            { content: 'Item 2' },
            { content: 'Item 3' }
        ]
    }
};
