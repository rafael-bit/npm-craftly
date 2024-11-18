import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'outline' | 'danger';
	size?: 'sm' | 'md' | 'lg';
	onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'md',
	onClick,
}) => {
	const baseStyle = 'rounded font-medium px-4 py-2 focus:outline-none';
	const variantStyles = {
		primary: 'bg-blue-500 text-white hover:bg-blue-600',
		secondary: 'bg-gray-500 text-white hover:bg-gray-600',
		outline: 'border border-gray-500 text-gray-700 hover:bg-gray-100',
		danger: 'bg-red-500 text-white hover:bg-red-600',
	};
	const sizeStyles = {
		sm: 'text-sm py-1 px-2',
		md: 'text-base py-2 px-4',
		lg: 'text-lg py-3 px-6',
	};

	return (
		<button
			className={clsx(baseStyle, variantStyles[variant], sizeStyles[size])}
			onClick={onClick}
		>
			{children}
		</button>
	);
};