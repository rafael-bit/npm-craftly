import React from 'react';
import clsx from 'clsx';

interface CheckboxProps {
	label: string;
	checked?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	variant?: 'default' | 'rounded' | 'outlined';
	className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
	label,
	checked = false,
	onChange,
	variant = 'default',
	className
}) => {
	const baseStyle = 'sr-only peer';

	const variantStyles = {
		default:
			'w-6 h-6 border-2 border-gray-500 rounded-md overflow-hidden transition-all duration-300 group-hover:border-blue-500',
		rounded:
			'w-7 h-7 rounded-full bg-gray-800 border border-gray-600 shadow-md transition-all duration-300 peer-checked:bg-blue-600 peer-checked:border-blue-600 peer-hover:ring-2 peer-hover:ring-blue-400',
		outlined:
			'w-6 h-6 border-2 border-dotted border-gray-500 rounded-md transition-all duration-300 peer-checked:border-blue-500 peer-hover:border-blue-400',
	};

	return (
		<label className="flex items-center cursor-pointer group">
			<div className="relative">
				<input
					type="checkbox"
					checked={checked}
					onChange={onChange}
					className={clsx(baseStyle, className)}
				/>
				<div className={clsx(variantStyles[variant])}></div>
				{variant === 'outlined' && (
					<div
						className={clsx(
							'absolute inset-0 flex items-center justify-center text-transparent scale-0 peer-checked:scale-100 peer-checked:text-blue-500 transition-all duration-300'
						)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
				)}
			</div>
			<span className="ml-3 text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
				{label}
			</span>
		</label>
	);
};