import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Stack } from './Stack';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Stack> = {
    title: 'shared/Stack',
    component: Stack,
    tags: ['autodocs'],
    decorators: [StoreDecorator({})],
    argTypes: {
        direction: {
            control: {
                type: 'select',
                options: ['row', 'column']
            }
        },
        justifyContent: {
            control: {
                type: 'select',
                options: [
                    'flex-start',
                    'center',
                    'flex-end',
                    'space-between',
                    'space-around',
                    'space-evenly'
                ]
            }
        },
        alignItems: {
            control: {
                type: 'select',
                options: ['flex-start', 'center', 'flex-end', 'stretch']
            }
        },
        children: {
            control: {}
        }
    }
};

export default meta;
type Story = StoryObj<typeof Stack>;

function Box(index: number) {
    return (
        <div
            key={index}
            style={{
                width: '50px',
                height: '50px',
                background: 'var(--inverted-bg-color)',
                color: 'var(--inverted-primary-color)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {index}
        </div>
    );
}

export const Row: Story = {
    args: {
        direction: 'row',
        gap: 10,
        children: <>{Array.from({ length: 5 }, (_, i) => Box(i))}</>
    }
};

export const Column: Story = {
    args: {
        direction: 'column',
        gap: 10,
        children: <>{Array.from({ length: 5 }, (_, i) => Box(i))}</>
    }
};
