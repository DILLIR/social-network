import { StoryFn } from '@storybook/react';

export const ContainerDecorator = (Story: StoryFn) => (
    <div style={{ padding: '15px' }}>
        <Story />
    </div>
);
