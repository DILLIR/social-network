import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import SettingsPage from './SettingsPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SettingsPage> = {
    title: 'page/SettingsPage',
    component: SettingsPage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof SettingsPage>;

export const Default: Story = {
    args: {}
};
