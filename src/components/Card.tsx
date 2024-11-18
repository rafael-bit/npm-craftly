import React from 'react';

interface CardProps {
	title: string;
	description: string;
	image: string;
	onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ title, description, image, onClick }) => {
	return (
		<div
			className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
			onClick={onClick}
		>
			<img src={image} alt={title} className="w-full h-48 object-cover" />
			<div className="p-4">
				<h3 className="text-lg font-bold">{title}</h3>
				<p className="text-gray-600">{description}</p>
			</div>
		</div>
	);
};