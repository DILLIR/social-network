import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {
        layout: 'fullscreen'
    },

    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    decorators: [StoreDecorator({})]
};

export const withAuth: Story = {
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    username: 'admin'
                }
            }
        })
    ]
};
