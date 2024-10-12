import '../../src/app/styles/index.scss';
import { Theme } from '../../src/shared/const/theme';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import type { Preview } from '@storybook/react';
import 'loki/configure-react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen',
    },
    decorators: [
        RouterDecorator,
        ThemeDecorator(Theme.LIGHT),
        SuspenseDecorator,
    ],
};

export default preview;
