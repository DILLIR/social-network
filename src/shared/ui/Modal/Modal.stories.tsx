import { Modal } from './Modal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero soluta molestias sapiente quasi et tempore illo illum, qui similique saepe sunt ipsam, sequi id labore nam placeat reiciendis. Beatae, consequuntur.'
    }
};
