import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/renderComponent';
import ArticlesPage from './ArticlesPage';

describe('ArticlesPage', () => {
    test('render', () => {
        componentRender(<ArticlesPage />);
        expect(screen.getByTestId('ArticlesPage')).toBeInTheDocument();
    });

    test('toggle', () => {
        componentRender(<ArticlesPage />);
        const toggleButton = screen.getByTestId('ArticlesPage-toggle');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('ArticlesPage')).toHaveClass('');
    });
});
