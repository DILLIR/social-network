import { Select } from './Select';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        label: 'Select',
        options: [
            {
                value: '1',
                label: 'Option 1'
            },
            {
                value: '2',
                label: 'Option 2'
            },
            {
                value: '3',
                label: 'Option 3'
            }
        ]
    }
};
