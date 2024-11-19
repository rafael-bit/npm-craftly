import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
export const Table = ({ headers, data, variant = 'default' }) => {
    const baseStyle = 'min-w-full border-collapse';
    const variantStyles = {
        default: '',
        striped: 'odd:bg-gray-50',
        bordered: 'border border-gray-300',
    };
    return (_jsxs("table", { className: clsx(baseStyle, variantStyles[variant]), children: [_jsx("thead", { children: _jsx("tr", { children: headers.map((header, index) => (_jsx("th", { className: "border border-gray-300 bg-gray-100 px-4 py-2 text-left", children: header }, index))) }) }), _jsx("tbody", { children: data.map((row, rowIndex) => (_jsx("tr", { className: clsx(variant === 'striped' && 'odd:bg-gray-50'), children: row.map((cell, cellIndex) => (_jsx("td", { className: clsx('px-4 py-2', variant === 'bordered' && 'border border-gray-300'), children: cell }, cellIndex))) }, rowIndex))) })] }));
};
