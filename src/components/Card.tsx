import React from 'react';
import clsx from 'clsx';

interface CardProps {
	children: React.ReactNode;
	variant?: 'shadow' | 'outline' | 'flat';
	className?: string;
}

export const Card: React.FC<CardProps> = ({ children, variant = 'flat', className }) => {
	const baseClasses = 'p-4';
	const variantClasses = clsx({
		'shadow-md': variant === 'shadow',
		'border border-gray-300': variant === 'outline',
		'': variant === 'flat',
	});

	return <div className={clsx(baseClasses, variantClasses, className)}>{children}</div>;
};