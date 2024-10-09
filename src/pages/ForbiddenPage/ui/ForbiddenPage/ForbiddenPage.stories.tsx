import { UserRole } from '@/entities/User/model/types/user';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ForbiddenPage } from './ForbiddenPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ForbiddenPage> = {
    title: 'page/ForbiddenPage',
    component: ForbiddenPage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({
        user: {
            authData: {
                username: 'test',
                roles: [UserRole.ADMIN],
            },
        },
    })],
};

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;

export const Default: Story = {
    args: { },
};
