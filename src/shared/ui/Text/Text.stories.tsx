import { Text, TextSize, TextTheme } from './Text';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
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
        size: TextSize.L
    }
};

export const SizeS: Story = {
    args: {
        title: 'Titel lorem ipsum amen',
        text: 'Text lorem ipsum amen',
        size: TextSize.S
    }
};

export const Error: Story = {
    args: {
        title: 'Titel lorem ipsum amen',
        text: 'Text lorem ipsum amen',
        theme: TextTheme.ERROR
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
