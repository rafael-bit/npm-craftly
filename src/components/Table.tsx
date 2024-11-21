import React from "react";
import clsx from "clsx";

interface TableProps {
	variant?: "default" | "striped" | "bordered";
	data: Array<{ [key: string]: string | number }>;
	headers: string[];
}

const Table: React.FC<TableProps> = ({ variant = "default", data, headers }) => {
	return (
		<div className="overflow-x-auto">
			<table
				className={clsx(
					"min-w-full table-auto text-left text-sm",
					"border-collapse border-spacing-0",
					variant === "bordered" && "border border-gray-300 dark:border-gray-700",
					"text-gray-800 dark:text-gray-100"
				)}
			>
				<thead>
					<tr
						className={clsx(
							"bg-gray-100 dark:bg-gray-950",
							variant === "bordered" && "border-b border-gray-300 dark:border-gray-700"
						)}
					>
						{headers.map((header, index) => (
							<th
								key={index}
								className="px-4 py-2 text-sm font-semibold tracking-wide"
							>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, rowIndex) => (
						<tr
							key={rowIndex}
							className={clsx(
								"hover:bg-gray-50 dark:hover:bg-gray-800",
								variant === "striped" &&
								rowIndex % 2 === 0 &&
								"bg-gray-50 dark:bg-gray-900",
								variant === "bordered" && "border-b border-gray-300 dark:border-gray-800"
							)}
						>
							{headers.map((header, colIndex) => (
								<td key={colIndex} className="px-4 py-2">
									{row[header]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;