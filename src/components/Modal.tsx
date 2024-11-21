"use client";

import React, { ReactNode } from "react";
import clsx from "clsx";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	variant?: "centered" | "full-screen" | "bottom-sheet";
	className?: string;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
	variant = "centered",
	className,
}) => {
	if (!isOpen) return null;

	const baseStyle =
		"bg-white text-gray-800 rounded-lg shadow-lg p-6 relative transition-all";
	const variantStyles = {
		centered: "max-w-md mx-auto",
		"full-screen": "w-full h-full fixed top-0 left-0",
		"bottom-sheet": "w-full max-w-md fixed bottom-0 rounded-t-lg",
	};

	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
			onClick={onClose}
		>
			<div
				className={clsx(baseStyle, variant && variantStyles[variant], className)}
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
				>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;