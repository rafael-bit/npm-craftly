import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
	it('renders children correctly', () => {
		render(<Card>Card Content</Card>);
		expect(screen.getByText('Card Content')).toBeInTheDocument();
	});

	it('applies correct variant styles', () => {
		render(<Card variant="shadow">Shadow Card</Card>);
		expect(screen.getByText('Shadow Card')).toHaveClass('shadow-md');
	});
});
