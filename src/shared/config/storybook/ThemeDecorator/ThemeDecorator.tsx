import { StoryFn } from '@storybook/react';

// eslint-disable-next-line fs-path-checker/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (Theme: Theme) => (Story: StoryFn) => (
    <ThemeProvider initialTheme={Theme}>
        <div className={`app ${Theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
