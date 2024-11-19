import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '../Modal';
describe('Modal', () => {
    it('renders when isOpen is true', () => {
        render(_jsx(Modal, { isOpen: true, onClose: () => { }, children: "Modal Content" }));
        expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });
    it('does not render when isOpen is false', () => {
        render(_jsx(Modal, { isOpen: false, onClose: () => { }, children: "Modal Content" }));
        expect(screen.queryByText('Modal Content')).toBeNull();
    });
    it('calls onClose when close button is clicked', () => {
        const handleClose = jest.fn();
        render(_jsx(Modal, { isOpen: true, onClose: handleClose, children: "Modal Content" }));
        fireEvent.click(screen.getByText('×'));
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});
