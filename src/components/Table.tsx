import React from 'react';

interface TableProps {
	headers: string[];
	data: string[][];
}

export const Table: React.FC<TableProps> = ({ headers, data }) => {
	return (
		<table className="min-w-full border-collapse border border-gray-300">
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
					<tr key={rowIndex}>
						{row.map((cell, cellIndex) => (
							<td key={cellIndex} className="border border-gray-300 px-4 py-2">
								{cell}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};