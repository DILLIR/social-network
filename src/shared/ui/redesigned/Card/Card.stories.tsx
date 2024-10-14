import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Text } from '../Text/Text';
import { Card } from './Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
    title: 'Redesigned/shared/Card',
    component: Card,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        children: <Text text="Hello, world!" title="Title" />
    }
};
