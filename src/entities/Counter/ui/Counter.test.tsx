import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/test';
import { renderComponent } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test render', () => {
        renderComponent(<Counter />, {
            initialState: {
                counter: {
                    value: 11,
                },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('value = 11');
    });

    test('Increment', async () => {
        renderComponent(<Counter />, {
            initialState: {
                counter: {
                    value: 11,
                },
            },
        });
        await userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('value = 12');
    });

    test('Decrement', async () => {
        renderComponent(<Counter />, {
            initialState: {
                counter: {
                    value: 11,
                },
            },
        });
        await userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('value = 10');
    });
});
