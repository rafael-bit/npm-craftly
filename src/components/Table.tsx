import React from 'react';
import clsx from 'clsx';

interface TableProps {
	headers: string[];
	data: string[][];
	variant?: 'default' | 'striped' | 'bordered';
}

export const Table: React.FC<TableProps> = ({ headers, data, variant = 'default' }) => {
	const baseStyle = 'min-w-full border-collapse';
	const variantStyles = {
		default: '',
		striped: 'odd:bg-gray-50',
		bordered: 'border border-gray-300',
	};

	return (
		<table className={clsx(baseStyle, variantStyles[variant])}>
			<thead>
				<tr>
					{headers.map((header, index) => (
						<th
							key={index}
							className="border border-gray-300 bg-gray-100 px-4 py-2 text-left"
						>
							{header}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, rowIndex) => (
					<tr key={rowIndex} className={clsx(variant === 'striped' && 'odd:bg-gray-50')}>
						{row.map((cell, cellIndex) => (
							<td
								key={cellIndex}
								className={clsx(
									'px-4 py-2',
									variant === 'bordered' && 'border border-gray-300'
								)}
							>
								{cell}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};