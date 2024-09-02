import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Stack } from 'shared/ui/Stack/Stack';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ListBox>;

const itemsOptions = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three', disabled: true }
];

export const Default: Story = {
    args: {
        defaultValue: 'Select value',
        items: itemsOptions
    },
    render: ({ defaultValue, items }) => {
        const [selectedValue, setSelectedValue] = useState<string | number>();
        return (
            <Stack width="300px">
                <ListBox
                    defaultValue={defaultValue}
                    onChange={(value) => {
                        setSelectedValue(value);
                    }}
                    value={selectedValue}
                    items={items}
                />
            </Stack>
        );
    }
};
