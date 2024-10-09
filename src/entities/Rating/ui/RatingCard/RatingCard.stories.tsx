import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { RatingCard } from './RatingCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RatingCard> = {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Default: Story = {
    args: { },
};
