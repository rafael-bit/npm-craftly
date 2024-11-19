import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';
describe('Button', () => {
    it('renders with default styles', () => {
        render(_jsx(Button, { children: "Click Me" }));
        const button = screen.getByText('Click Me');
        expect(button).toHaveClass('bg-blue-500');
    });
    it('executes onClick when clicked', () => {
        const handleClick = jest.fn();
        render(_jsx(Button, { onClick: handleClick, children: "Click Me" }));
        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    it('disables button', () => {
        render(_jsx(Button, { disabled: true, children: "Click Me" }));
        const button = screen.getByText('Click Me');
        expect(button).toBeDisabled();
        expect(button).toHaveClass('opacity-50 cursor-not-allowed');
    });
});
