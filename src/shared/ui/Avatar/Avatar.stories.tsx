import type { Meta, StoryObj } from '@storybook/react';
import AvatarImg from './logo.jpeg';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        src: AvatarImg,
        alt: 'avatar'
    }
};

export const CustomSize: Story = {
    args: {
        src: AvatarImg,
        alt: 'avatar',
        size: 300
    }
};
