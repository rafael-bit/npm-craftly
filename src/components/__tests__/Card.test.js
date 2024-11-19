import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Card } from '../Card';
describe('Card', () => {
    it('renders children correctly', () => {
        render(_jsx(Card, { children: "Card Content" }));
        expect(screen.getByText('Card Content')).toBeInTheDocument();
    });
    it('applies correct variant styles', () => {
        render(_jsx(Card, { variant: "shadow", children: "Shadow Card" }));
        expect(screen.getByText('Shadow Card')).toHaveClass('shadow-md');
    });
});
