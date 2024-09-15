import type { Meta, StoryObj } from '@storybook/react';
import { UserRole } from 'entities/User/model/types/user';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ForbiddenPage } from './ForbiddenPage';

const meta: Meta<typeof ForbiddenPage> = {
    title: 'page/ForbiddenPage',
    component: ForbiddenPage,
    tags: ['autodocs'],
    decorators: [StoreDecorator({
        user: {
            authData: {
                username: 'test',
                roles: [UserRole.ADMIN]
            }
        }
    })]
};

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;


export const Default: Story = {
    args: {  }
};