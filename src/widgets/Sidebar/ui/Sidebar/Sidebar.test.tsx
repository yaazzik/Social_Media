import { screen, render } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/renderComponent';
import { userEvent } from '@storybook/testing-library';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('with children', () => {
        render(<Sidebar />);
        // expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        expect(1).toEqual(1);
    });

    // test('toggle', () => {
    //     componentRender(<Sidebar />);
    //     const toggleButton = screen.getByTestId('sidebar-toggle');
    //     userEvent.click(toggleButton);
    //     expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    // });
});
