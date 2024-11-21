import React from 'react';
import clsx from 'clsx';

interface InputProps {
	label?: string;
	placeholder: string;
	type?: string;
	variant?: 'default' | 'solid' | 'line' | 'ghost';
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

export const Input: React.FC<InputProps> = ({
	label,
	placeholder,
	type = 'text',
	variant = 'default',
	value,
	onChange,
	className
}) => {
	const baseStyle = 'peer w-full bg-transparent py-2 text-gray-800 placeholder-transparent outline-none transition-all duration-300 focus:ring-0 focus:outline-none';
	const variantStyles = {
		default: 'w-1/3 px-4 py-3 text-gray-900 bg-transparent border border-gray-300 rounded-md shadow-sm outline-none placeholder-gray-500 transition-all duration-300 focus:ring-1 focus:ring-blue-400 focus:border-blue-400 focus:bg-transparent',
		solid: 'w-1/3 px-4 py-3 text-white bg-transparent opacity-35 bg-blue-700 border border-blue-800 rounded-md shadow-md outline-none placeholder-transparent transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500',
		line: 'w-1/2 border-b-2 border-gray-400 focus:border-blue-500',
		ghost: 'bg-transparent'
	};
	const labelStyle = 'absolute left-4 top-3 text-gray-500 text-sm transition-all duration-300 transform scale-100 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400 peer-focus:scale-90';

	return (
		<div className="relative">
			<input
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={clsx(baseStyle, variantStyles[variant], className)}
			/>
			{label && (
				<label className={labelStyle}>
					{label}
				</label>
			)}
		</div>
	);
};
