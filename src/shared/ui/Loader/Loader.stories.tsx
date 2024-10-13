import { Loader } from './Loader';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {};
