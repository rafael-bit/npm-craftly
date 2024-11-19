import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
export const Modal = ({ isOpen, onClose, children, variant = 'centered' }) => {
    if (!isOpen)
        return null;
    const baseStyle = 'bg-white rounded-lg shadow-lg p-6 relative transition-all';
    const variantStyles = {
        centered: 'w-96',
        'full-screen': 'w-full h-full rounded-none',
        'bottom-sheet': 'w-full max-w-md rounded-t-lg fixed bottom-0',
    };
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: _jsxs("div", { className: clsx(baseStyle, variantStyles[variant]), children: [_jsx("button", { onClick: onClose, className: "absolute top-2 right-2 text-gray-500 hover:text-gray-800", children: "\u00D7" }), children] }) }));
};
