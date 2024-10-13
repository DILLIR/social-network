import { PageError } from './PageError';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Default: Story = {};
