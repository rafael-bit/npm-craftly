import React from 'react';
import clsx from 'clsx';

interface CheckboxProps {
	label: string;
	checked?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	variant?: 'default' | 'rounded' | 'outlined';
}

export const Checkbox: React.FC<CheckboxProps> = ({
	label,
	checked = false,
	onChange,
	variant = 'default',
}) => {
	const baseStyle = 'w-4 h-4 focus:ring-2 focus:ring-blue-500';
	const variantStyles = {
		default: 'border-gray-300 rounded',
		rounded: 'border-gray-300 rounded-full',
		outlined: 'border-2 border-gray-400',
	};

	return (
		<label className="flex items-center space-x-2">
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				className={clsx(baseStyle, variantStyles[variant])}
			/>
			<span className="text-sm text-gray-700">{label}</span>
		</label>
	);
};