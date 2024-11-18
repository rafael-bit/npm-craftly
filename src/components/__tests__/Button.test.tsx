import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button Component', () => {
	it('renders the button with correct text', () => {
		render(<Button>Click Me</Button>);
		expect(screen.getByText('Click Me')).toBeInTheDocument();
	});

	it('applies the correct variant styles', () => {
		render(<Button variant="outline">Outline Button</Button>);
		const button = screen.getByText('Outline Button');
		expect(button).toHaveClass('border', 'text-gray-700');
	});

	it('calls onClick handler when clicked', () => {
		const onClickMock = jest.fn();
		render(<Button onClick={onClickMock}>Click Me</Button>);

		fireEvent.click(screen.getByText('Click Me'));
		expect(onClickMock).toHaveBeenCalledTimes(1);
	});

	it('is disabled when the disabled prop is set', () => {
		render(<Button disabled>Disabled Button</Button>);
		const button = screen.getByText('Disabled Button');
		expect(button).toBeDisabled();
		expect(button).toHaveClass('opacity-50');
	});
});