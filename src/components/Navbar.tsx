import React from 'react';
import clsx from 'clsx';

interface NavbarProps {
	links: { label: string; href: string }[];
	variant?: 'default' | 'transparent' | 'shadow';
}

export const Navbar: React.FC<NavbarProps> = ({ links, variant = 'default' }) => {
	const baseStyle = 'py-4 px-8';
	const variantStyles = {
		default: 'bg-gray-800 text-white',
		transparent: 'bg-transparent text-gray-800',
		shadow: 'bg-gray-800 text-white shadow-md',
	};

	return (
		<nav className={clsx(baseStyle, variantStyles[variant])}>
			<ul className="flex space-x-4">
				{links.map((link, index) => (
					<li key={index}>
						<a href={link.href} className="hover:underline">
							{link.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};