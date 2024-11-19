import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from '../Checkbox';
describe('Checkbox', () => {
    it('renders with default styles', () => {
        render(_jsx(Checkbox, { label: "Accept Terms" }));
        const label = screen.getByText('Accept Terms');
        expect(label).toBeInTheDocument();
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveClass('border-gray-300');
    });
    it('calls onChange when toggled', () => {
        const handleChange = jest.fn();
        render(_jsx(Checkbox, { label: "Accept Terms", onChange: handleChange }));
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
    it('renders with the "rounded" variant', () => {
        render(_jsx(Checkbox, { label: "Accept Terms", variant: "rounded" }));
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveClass('rounded-full');
    });
    it('renders with the "outlined" variant', () => {
        render(_jsx(Checkbox, { label: "Accept Terms", variant: "outlined" }));
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveClass('border-2');
    });
});
