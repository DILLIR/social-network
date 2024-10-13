import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Overlay } from './Overlay';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Overlay> = {
    title: 'entities/Overlay',
    component: Overlay,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
    args: {}
};
