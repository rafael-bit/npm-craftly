import React from 'react';
interface CardProps {
    children: React.ReactNode;
    variant?: 'shadow' | 'outline' | 'flat';
    className?: string;
}
export declare const Card: React.FC<CardProps>;
export {};
