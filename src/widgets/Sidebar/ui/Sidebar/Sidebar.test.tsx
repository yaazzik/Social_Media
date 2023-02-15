import { fireEvent, screen } from '@testing-library/react';
import renderWithTranslation from 'shared/lib/tests/RenderWithTranslation/RenderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('with children', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
