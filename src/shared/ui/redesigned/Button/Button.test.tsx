import { render, screen } from '@testing-library/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from './Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button className={classNames('button')}>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Test render with clear theme', () => {
        render(
            <Button variant="clear" className={classNames('button')}>
                Test
            </Button>
        );
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
