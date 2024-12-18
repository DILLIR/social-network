import { CountrySelect } from './CountrySelect';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Default: Story = {
    args: {}
};
