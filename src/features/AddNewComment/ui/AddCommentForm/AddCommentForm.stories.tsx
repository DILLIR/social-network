import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
    decorators: [StoreDecorator({

    })]
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Default: Story = {
    args: {
        onSendComment: (value) => {
            console.log(value);
        }
    }
};
