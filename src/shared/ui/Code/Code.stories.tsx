import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Code } from './Code';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
    args: {
        text: `import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'entities/Code',
    component: Code,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof Code>;
`
    }
};

export const Dark: Story = {
    args: {
        text: `import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'entities/Code',
    component: Code,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof Code>;
`
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
