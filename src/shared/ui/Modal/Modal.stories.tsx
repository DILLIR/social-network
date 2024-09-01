import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero soluta molestias sapiente quasi et tempore illo illum, qui similique saepe sunt ipsam, sequi id labore nam placeat reiciendis. Beatae, consequuntur.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero soluta molestias sapiente quasi et tempore illo illum, qui similique saepe sunt ipsam, sequi id labore nam placeat reiciendis. Beatae, consequuntur.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
