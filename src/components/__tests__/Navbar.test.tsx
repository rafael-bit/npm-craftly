import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';

describe('Navbar', () => {
	it('renders links correctly', () => {
		const links = [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
		];
		render(<Navbar links={links} />);
		expect(screen.getByText('Home')).toBeInTheDocument();
		expect(screen.getByText('About')).toBeInTheDocument();
	});
});