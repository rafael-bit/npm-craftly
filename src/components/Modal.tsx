import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	variant?: 'centered' | 'full-screen' | 'bottom-sheet';
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, variant = 'centered' }) => {
	if (!isOpen) return null;

	const baseStyle = 'bg-white rounded-lg shadow-lg p-6 relative transition-all';
	const variantStyles = {
		centered: 'w-96',
		'full-screen': 'w-full h-full rounded-none',
		'bottom-sheet': 'w-full max-w-md rounded-t-lg fixed bottom-0',
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className={clsx(baseStyle, variantStyles[variant])}>
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
				>
					×
				</button>
				{children}
			</div>
		</div>
	);
};