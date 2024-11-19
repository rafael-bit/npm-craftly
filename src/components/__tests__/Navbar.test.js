import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';
describe('Navbar', () => {
    it('renders links correctly', () => {
        const links = [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
        ];
        render(_jsx(Navbar, { links: links }));
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
    });
});
