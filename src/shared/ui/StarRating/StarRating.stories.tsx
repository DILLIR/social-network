import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
    title: 'entities/StarRating',
    component: StarRating,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof StarRating>;


export const Default: Story = {
    args: {  }
};