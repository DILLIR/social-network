import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
    title: 'entities/Page',
    component: Page,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
    args: { },
};
