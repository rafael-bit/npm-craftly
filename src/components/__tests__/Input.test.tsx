import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../Input';

describe('Input Component', () => {
	it('renders the input with correct label', () => {
		render(<Input label="Username" placeholder="Enter your username" />);
		expect(screen.getByText('Username')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Enter your username')).toBeInTheDocument();
	});

	it('handles input changes correctly', () => {
		const handleChange = jest.fn();
		render(<Input label="Username" placeholder="Enter your username" onChange={handleChange} />);

		const input = screen.getByPlaceholderText('Enter your username');
		fireEvent.change(input, { target: { value: 'JohnDoe' } });

		expect(handleChange).toHaveBeenCalledTimes(1);
		expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
	});

	it('applies the correct variant styles', () => {
		render(<Input label="Username" placeholder="Enter your username" variant="underlined" />);
		const input = screen.getByPlaceholderText('Enter your username');
		expect(input).toHaveClass('border-b');
	});
});