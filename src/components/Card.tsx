import React from 'react';
import clsx from 'clsx';

interface CardProps {
	children?: React.ReactNode;
	variant?: 'horizontal' | 'vertical' | 'outline' | 'gradient';
	gradientFrom?: string;
	gradientVia?: string;
	gradientTo?: string;
	className?: string;
}

export const Card: React.FC<CardProps> = ({
	children,
	variant = 'vertical',
	gradientFrom = 'purple-400',
	gradientVia = 'pink-500',
	gradientTo = 'red-500',
	className,
}) => {
	const baseClasses = 'rounded-lg overflow-hidden';

	const gradientClasses = variant === 'gradient'
		? `bg-gradient-to-r from-${gradientFrom} via-${gradientVia} to-${gradientTo} text-white`
		: '';

	const variantClasses = clsx({
		'max-w-sm w-full lg:max-w-full lg:flex bg-white border border-gray-400': variant === 'horizontal',

		'max-w-sm mx-auto bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg space-y-4 hover:shadow-xl transition-shadow': variant === 'vertical',

		'max-w-sm w-full border border-gray-700 rounded-lg p-6': variant === 'outline',

		[gradientClasses]: variant === 'gradient',
	});

	return <div className={clsx(baseClasses, variantClasses, className)}>{children}</div>;
};