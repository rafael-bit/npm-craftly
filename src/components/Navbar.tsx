import React from 'react';

interface NavbarProps {
	links: { label: string; href: string }[];
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
	return (
		<nav className="bg-gray-800 text-white py-4 px-8">
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