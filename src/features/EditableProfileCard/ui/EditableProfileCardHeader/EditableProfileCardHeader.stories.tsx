import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/EditableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Default: Story = {
    args: { },
};
