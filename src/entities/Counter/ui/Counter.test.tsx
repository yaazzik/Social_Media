import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/renderComponent';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('render', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('counter')).toBeInTheDocument();
    });

    test('toggle increment', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        const toggleButton = screen.getByTestId('counter-increment');
        userEvent.click(toggleButton);
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });

    test('toggle decrement', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        const toggleButton = screen.getByTestId('counter-decrement');
        userEvent.click(toggleButton);
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
});
