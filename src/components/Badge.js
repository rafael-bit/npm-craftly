import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
export const Badge = ({ text, variant = 'success' }) => {
    const baseStyle = 'px-2 py-1 text-sm font-medium rounded';
    const variantStyles = {
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800',
        info: 'bg-blue-100 text-blue-800',
    };
    return _jsx("span", { className: clsx(baseStyle, variantStyles[variant]), children: text });
};
