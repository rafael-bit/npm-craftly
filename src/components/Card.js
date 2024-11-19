import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
export const Card = ({ children, variant = 'flat', className }) => {
    const baseClasses = 'p-4';
    const variantClasses = clsx({
        'shadow-md': variant === 'shadow',
        'border border-gray-300': variant === 'outline',
        '': variant === 'flat',
    });
    return _jsx("div", { className: clsx(baseClasses, variantClasses, className), children: children });
};
