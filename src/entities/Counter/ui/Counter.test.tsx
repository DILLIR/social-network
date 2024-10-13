import { screen } from '@testing-library/react';
// import { userEvent } from '@storybook/test';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Test render', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 11
                }
            }
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent(
            'value =11'
        );
    });

    test('Increment', async () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 11
                }
            }
        });
        await userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent(
            'value =12'
        );
    });

    test('Decrement', async () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 11
                }
            }
        });
        await userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent(
            'value =10'
        );
    });
});
