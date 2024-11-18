import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
	text: string;
	variant?: 'success' | 'warning' | 'error' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({ text, variant = 'success' }) => {
	const baseStyle = 'px-2 py-1 text-sm font-medium rounded';
	const variantStyles = {
		success: 'bg-green-100 text-green-800',
		warning: 'bg-yellow-100 text-yellow-800',
		error: 'bg-red-100 text-red-800',
		info: 'bg-blue-100 text-blue-800',
	};

	return <span className={clsx(baseStyle, variantStyles[variant])}>{text}</span>;
};