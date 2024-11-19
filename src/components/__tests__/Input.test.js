import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../Input';
describe('Input', () => {
    it('renders correctly with a label', () => {
        render(_jsx(Input, { label: "Username", placeholder: "Enter your username" }));
        expect(screen.getByText('Username')).toBeInTheDocument();
    });
    it('handles value changes', () => {
        const handleChange = jest.fn();
        render(_jsx(Input, { label: "Username", placeholder: "Enter your username", onChange: handleChange }));
        const input = screen.getByPlaceholderText('Enter your username');
        fireEvent.change(input, { target: { value: 'JohnDoe' } });
        expect(handleChange).toHaveBeenCalled();
    });
});
