import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Badge } from '../Badge';
describe('Badge', () => {
    it('renders with default variant', () => {
        render(_jsx(Badge, { text: "Default Badge" }));
        const badge = screen.getByText('Default Badge');
        expect(badge).toHaveClass('bg-green-100 text-green-800');
    });
    it('renders with the correct variant', () => {
        render(_jsx(Badge, { text: "Error Badge", variant: "error" }));
        const badge = screen.getByText('Error Badge');
        expect(badge).toHaveClass('bg-red-100 text-red-800');
    });
});
