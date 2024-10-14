import { useState } from 'react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { ListBox } from './ListBox';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({}),
        (Story) => (
            <Stack
                style={{ height: '100vh' }}
                alignItems="center"
                justifyContent="center"
            >
                <Story />
            </Stack>
        )
    ]
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
            <ListBox
                defaultValue={defaultValue}
                onChange={(value) => {
                    setSelectedValue(value);
                }}
                value={selectedValue}
                items={items}
            />
        );
    }
};

export const topLeft: Story = {
    args: {
        defaultValue: 'Select value',
        items: itemsOptions,
        direction: 'top left'
    },
    render: ({ defaultValue, items, direction }) => {
        const [selectedValue, setSelectedValue] = useState<string | number>();
        return (
            <Stack>
                <ListBox
                    defaultValue={defaultValue}
                    onChange={(value) => {
                        setSelectedValue(value);
                    }}
                    value={selectedValue}
                    items={items}
                    direction={direction}
                />
            </Stack>
        );
    }
};

export const topRight: Story = {
    args: {
        defaultValue: 'Select value',
        items: itemsOptions,
        direction: 'top right'
    },
    render: ({ defaultValue, items, direction }) => {
        const [selectedValue, setSelectedValue] = useState<string | number>();
        return (
            <ListBox
                defaultValue={defaultValue}
                onChange={(value) => {
                    setSelectedValue(value);
                }}
                value={selectedValue}
                items={items}
                direction={direction}
            />
        );
    }
};

export const bottomLeft: Story = {
    args: {
        defaultValue: 'Select value',
        items: itemsOptions,
        direction: 'bottom left'
    },
    render: ({ defaultValue, items, direction }) => {
        const [selectedValue, setSelectedValue] = useState<string | number>();
        return (
            <ListBox
                defaultValue={defaultValue}
                onChange={(value) => {
                    setSelectedValue(value);
                }}
                value={selectedValue}
                items={items}
                direction={direction}
            />
        );
    }
};

export const bottomRight: Story = {
    args: {
        defaultValue: 'Select value',
        items: itemsOptions,
        direction: 'bottom right'
    },
    render: ({ defaultValue, items, direction }) => {
        const [selectedValue, setSelectedValue] = useState<string | number>();
        return (
            <ListBox
                defaultValue={defaultValue}
                onChange={(value) => {
                    setSelectedValue(value);
                }}
                value={selectedValue}
                items={items}
                direction={direction}
            />
        );
    }
};
