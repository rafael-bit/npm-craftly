import React from 'react';

interface InputProps {
	label: string;
	placeholder: string;
	type?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
	label,
	placeholder,
	type = 'text',
	value,
	onChange,
}) => {
	return (
		<div className="flex flex-col space-y-2">
			<label className="text-sm font-medium text-gray-700">{label}</label>
			<input
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
			/>
		</div>
	);
};