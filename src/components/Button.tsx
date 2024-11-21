import clsx from 'clsx';
import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
	size?: 'sm' | 'md' | 'lg';
	disabled?: boolean;
	classname?: string;
	onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'md',
	disabled = false,
	onClick,
	classname
}) => {
	const baseStyles = 'relative rounded-xl font-medium focus:outline-none focus:ring transition overflow-hidden group';

	const variantStyles = {
		primary: `
			px-5 py-2 bg-gray-900 text-white border border-gray-700
			group-hover:text-gray-200 
			transition-all duration-300 
			relative z-10
		`,
		secondary: `
			px-5 py-2 bg-gray-800 text-blue-400 border border-blue-500
			group-hover:text-white
			relative z-10 transition-all duration-200
		`,
		outline: `
			px-5 py-2 bg-transparent text-blue-500 border-2 border-blue-500
			group-hover:text-white
			relative z-10 transition-all duration-200
		`,
		danger: `
			px-5 py-2 bg-red-600 text-white border-2 border-red-500
			shadow-md hover:border-red-700 hover:scale-105
			relative z-10 transition-all duration-300
		`,
		success: `
			px-5 py-2 bg-green-600 text-white border-2 border-green-500
			shadow-md hover:border-green-700 hover:scale-105
			relative z-10 transition-all duration-300
		`,
	};

	const sizeStyles = {
		sm: 'text-sm px-3 py-1',
		md: 'text-base px-4 py-2',
		lg: 'text-lg px-6 py-3',
	};

	const disabledStyles = 'opacity-50 cursor-not-allowed';

	return (
		<button
			className={clsx(`${classname} ${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? disabledStyles : ''
				}`)}
			disabled={disabled}
			onClick={onClick}
		>
			{variant === 'primary' && (
				<span className="absolute inset-0 bg-gray-800 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-out"></span>
			)}
			{variant === 'secondary' && (
				<span className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-out"></span>
			)}
			{variant === 'outline' && (
				<span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out"></span>
			)}
			{variant === 'danger' && (
				<span className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
			)}
			{variant === 'success' && (
				<span className="absolute inset-0 bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
			)}
			<span className="relative">{children}</span>
		</button>
	);
};