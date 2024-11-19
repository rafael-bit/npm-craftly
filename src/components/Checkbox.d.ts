import React from 'react';
interface CheckboxProps {
    label: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    variant?: 'default' | 'rounded' | 'outlined';
}
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
