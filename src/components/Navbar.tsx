import React, { useState } from "react";
import clsx from "clsx";

interface NavbarProps {
	variant?: "default" | "transparent" | "outline";
}

export const Navbar: React.FC<NavbarProps> = ({ variant = "default" }) => {
	const [isHovered, setIsHovered] = useState(false);

	const baseStyle =
		"fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 transition-all duration-300 z-50";
	const variantStyles = {
		default: "bg-gray-900 text-white shadow-lg",
		transparent: "bg-transparent text-white",
		outline: "border border-gray-600 bg-gray-800 text-white",
	};

	return (
		<nav
			className={clsx(baseStyle, variantStyles[variant])}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="text-xl font-bold tracking-wide">TechNav</div>

			{isHovered && (
				<ul className="flex gap-6">
					{["Home", "About", "Services", "Contact"].map((item, index) => (
						<li
							key={index}
							className="text-sm uppercase tracking-wide cursor-pointer hover:text-teal-400 transition-colors"
						>
							{item}
						</li>
					))}
				</ul>
			)}

			<button
				className={clsx(
					"px-4 py-2 text-sm font-semibold uppercase rounded-md transition-all",
					variant === "outline"
						? "border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white"
						: "bg-teal-400 text-white hover:bg-teal-500"
				)}
			>
				Sign Up
			</button>
		</nav>
	);
};
