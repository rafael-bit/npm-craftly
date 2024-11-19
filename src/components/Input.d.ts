import React from 'react';
interface InputProps {
    label: string;
    placeholder: string;
    type?: string;
    variant?: 'default' | 'underlined' | 'rounded';
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: React.FC<InputProps>;
export {};
