import { StoryFn } from '@storybook/react';
import { Theme } from '../../../../app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (Theme: Theme) => (Story: StoryFn) => (
    <div className={`app ${Theme}`}>
        <Story />
    </div>
);
