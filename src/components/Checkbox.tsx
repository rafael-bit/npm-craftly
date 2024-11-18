import React from 'react';

interface CheckboxProps {
	label: string;
	checked?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
	return (
		<label className="flex items-center space-x-2">
			<input
				type="checkbox"
				checked={checked}
				onChange={onChange}
				className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
			/>
			<span className="text-sm text-gray-700">{label}</span>
		</label>
	);
};