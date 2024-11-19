import React from 'react';
interface TableProps {
    headers: string[];
    data: string[][];
    variant?: 'default' | 'striped' | 'bordered';
}
export declare const Table: React.FC<TableProps>;
export {};
