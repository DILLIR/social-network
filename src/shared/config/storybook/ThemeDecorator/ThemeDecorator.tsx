import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from '../../../../app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (Theme: Theme) => (Story: StoryFn) => (
    <ThemeProvider initialTheme={Theme}>
        <div className={`app ${Theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
