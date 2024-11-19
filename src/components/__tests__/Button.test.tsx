import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
	it('renders with default styles', () => {
		render(<Button>Click Me</Button>);
		const button = screen.getByText('Click Me');
		expect(button).toHaveClass('bg-blue-500');
	});

	it('executes onClick when clicked', () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Click Me</Button>);
		fireEvent.click(screen.getByText('Click Me'));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('disables button', () => {
		render(<Button disabled>Click Me</Button>);
		const button = screen.getByText('Click Me');
		expect(button).toBeDisabled();
		expect(button).toHaveClass('opacity-50 cursor-not-allowed');
	});
});