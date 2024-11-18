import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
	text: string;
	variant?: 'success' | 'warning' | 'error';
}

export const Badge: React.FC<BadgeProps> = ({ text, variant = 'success' }) => {
	const variantStyles = {
		success: 'bg-green-100 text-green-800',
		warning: 'bg-yellow-100 text-yellow-800',
		error: 'bg-red-100 text-red-800',
	};

	return (
		<span className={clsx('px-2 py-1 text-sm font-medium rounded', variantStyles[variant])}>
			{text}
		</span>
	);
};