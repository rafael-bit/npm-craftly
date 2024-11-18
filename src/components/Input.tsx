import React from 'react';
import clsx from 'clsx';

interface InputProps {
	label: string;
	placeholder: string;
	type?: string;
	variant?: 'default' | 'underlined' | 'rounded';
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
	label,
	placeholder,
	type = 'text',
	variant = 'default',
	value,
	onChange,
}) => {
	const baseStyle = 'px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500';
	const variantStyles = {
		default: 'border rounded-lg',
		underlined: 'border-b focus:border-b-blue-500',
		rounded: 'border rounded-full',
	};

	return (
		<div className="flex flex-col space-y-2">
			<label className="text-sm font-medium text-gray-700">{label}</label>
			<input
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={clsx(baseStyle, variantStyles[variant])}
			/>
		</div>
	);
};