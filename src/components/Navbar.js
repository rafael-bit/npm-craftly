import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
export const Navbar = ({ links, variant = 'default' }) => {
    const baseStyle = 'py-4 px-8';
    const variantStyles = {
        default: 'bg-gray-800 text-white',
        transparent: 'bg-transparent text-gray-800',
        shadow: 'bg-gray-800 text-white shadow-md',
    };
    return (_jsx("nav", { className: clsx(baseStyle, variantStyles[variant]), children: _jsx("ul", { className: "flex space-x-4", children: links.map((link, index) => (_jsx("li", { children: _jsx("a", { href: link.href, className: "hover:underline", children: link.label }) }, index))) }) }));
};
