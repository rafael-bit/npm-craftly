import React from 'react';
interface NavbarProps {
    links: {
        label: string;
        href: string;
    }[];
    variant?: 'default' | 'transparent' | 'shadow';
}
export declare const Navbar: React.FC<NavbarProps>;
export {};
