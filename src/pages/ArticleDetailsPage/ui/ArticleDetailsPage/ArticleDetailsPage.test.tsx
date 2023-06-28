import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/renderComponent';
import ArticleDetailsPage from './ArticleDetailsPage';

describe('ArticleDetailsPage', () => {
    test('render', () => {
        componentRender(<ArticleDetailsPage />);
        expect(screen.getByTestId('ArticleDetailsPage')).toBeInTheDocument();
    });

    test('toggle', () => {
        componentRender(<ArticleDetailsPage />);
        const toggleButton = screen.getByTestId('ArticleDetailsPage-toggle');
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('ArticleDetailsPage')).toHaveClass('');
    });
});
