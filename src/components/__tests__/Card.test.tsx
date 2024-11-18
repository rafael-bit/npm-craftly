import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card Component', () => {
	it('applies the correct variant styles', () => {
		render(<Card variant="shadow">Test Card</Card>);

		const card = screen.getByText('Test Card').closest('div');
		expect(card).toHaveClass('shadow-md');
	});

	it('renders without errors', () => {
		render(<Card>Test Card</Card>);

		const card = screen.getByText('Test Card');
		expect(card).toBeInTheDocument();
	});
});