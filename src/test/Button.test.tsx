import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../components/Button';

describe('Button', () => {
	it('renders correctly', () => {
		render(<Button>Click Me</Button>);
		expect(screen.getByText('Click Me')).toBeInTheDocument();
	});

	it('calls onClick when clicked', () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Click Me</Button>);

		fireEvent.click(screen.getByText('Click Me'));
		expect(handleClick).toHaveBeenCalled();
	});
});
