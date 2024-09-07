module.exports = (layerName, componentName) => `import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
    title: '${layerName}/${componentName}',
    component: ${componentName},
    tags: ['autodocs'],
    decorators: [StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;


export const Default: Story = {
    args: {  }
};`