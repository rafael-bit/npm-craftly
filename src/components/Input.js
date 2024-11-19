import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
export const Input = ({ label, placeholder, type = 'text', variant = 'default', value, onChange, }) => {
    const baseStyle = 'px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500';
    const variantStyles = {
        default: 'border rounded-lg',
        underlined: 'border-b focus:border-b-blue-500',
        rounded: 'border rounded-full',
    };
    return (_jsxs("div", { className: "flex flex-col space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-gray-700", children: label }), _jsx("input", { type: type, value: value, onChange: onChange, placeholder: placeholder, className: clsx(baseStyle, variantStyles[variant]) })] }));
};
