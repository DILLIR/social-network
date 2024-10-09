import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileCard } from './EditableProfileCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Default: Story = {
    args: { },
};
