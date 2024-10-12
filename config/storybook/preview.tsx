import '../../src/app/styles/index.scss';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Theme } from '../../src/shared/const/theme';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { ContainerDecorator } from '../../src/shared/config/storybook/ContainerDecorator/ContainerDecorator';
import type { Preview } from '@storybook/react';
import 'loki/configure-react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        backgrounds: { disabled: true },
        layout: 'fullscreen'
    },
    decorators: [
        RouterDecorator,
        SuspenseDecorator,
        withThemeByClassName({
            themes: {
                light: `app ${Theme.LIGHT}`,
                dark: `app ${Theme.DARK}`,
                blue: `app ${Theme.BLUE}`,
                orange: `app ${Theme.ORANGE}`
            },
            defaultTheme: 'light',
            parentSelector: 'body'
        }),
        ContainerDecorator
    ]
};

export default preview;
