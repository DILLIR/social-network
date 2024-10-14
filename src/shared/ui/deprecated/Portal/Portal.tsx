import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}
/**
 * Outdated, use components from redesigned directory
 * @deprecated
 */
export function Portal({ children, element = document.body }: PortalProps) {
    return createPortal(children, element);
}
