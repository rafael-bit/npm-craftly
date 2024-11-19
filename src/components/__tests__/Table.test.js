import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { Table } from '../Table';
describe('Table', () => {
    it('renders headers and data correctly', () => {
        const headers = ['Name', 'Age'];
        const data = [
            ['John', '25'],
            ['Doe', '30'],
        ];
        render(_jsx(Table, { headers: headers, data: data }));
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('John')).toBeInTheDocument();
    });
});
