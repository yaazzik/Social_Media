import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('with children', () => {
        render(<Button> Test </Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('with clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}> Test </Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
