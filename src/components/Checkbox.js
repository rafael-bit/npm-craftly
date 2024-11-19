import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
export const Checkbox = ({ label, checked = false, onChange, variant = 'default', }) => {
    const baseStyle = 'w-4 h-4 focus:ring-2 focus:ring-blue-500';
    const variantStyles = {
        default: 'border-gray-300 rounded',
        rounded: 'border-gray-300 rounded-full',
        outlined: 'border-2 border-gray-400',
    };
    return (_jsxs("label", { className: "flex items-center space-x-2", children: [_jsx("input", { type: "checkbox", checked: checked, onChange: onChange, className: clsx(baseStyle, variantStyles[variant]) }), _jsx("span", { className: "text-sm text-gray-700", children: label })] }));
};
