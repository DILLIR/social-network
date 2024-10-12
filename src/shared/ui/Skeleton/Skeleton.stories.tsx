import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Skeleton } from './Skeleton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    args: {
        width: '100%',
        height: '200px',
    },
};

export const Circle: Story = {
    args: {
        border: '50%',
        height: 100,
        width: 100,
    },
};
