import React from 'react';
interface BadgeProps {
    text: string;
    variant?: 'success' | 'warning' | 'error' | 'info';
}
export declare const Badge: React.FC<BadgeProps>;
export {};
