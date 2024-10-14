import { Text } from './Text';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
    title: 'Redesigned/shared/Text',
    component: Text,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Titel lorem ipsum amen',
        text: 'Text lorem ipsum amen'
    }
};

export const SizeL: Story = {
    args: {
        title: 'Titel lorem ipsum amen',
        text: 'Text lorem ipsum amen',
        size: 'l'
    }
};

export const SizeS: Story = {
    args: {
        title: 'Titel lorem ipsum amen',
        text: 'Text lorem ipsum amen',
        size: 's'
    }
};

export const Error: Story = {
    args: {
        title: 'Titel lorem ipsum amen',
        text: 'Text lorem ipsum amen',
        variant: 'error'
    }
};

export const onlyTitle: Story = {
    args: {
        title: 'Titel lorem ipsum amen'
    }
};

export const onlyText: Story = {
    args: {
        text: 'Text lorem ipsum amen'
    }
};
