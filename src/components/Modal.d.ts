import React, { ReactNode } from 'react';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    variant?: 'centered' | 'full-screen' | 'bottom-sheet';
}
export declare const Modal: React.FC<ModalProps>;
export {};
