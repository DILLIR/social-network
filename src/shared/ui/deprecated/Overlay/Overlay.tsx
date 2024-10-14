import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}
/**
 * Outdated, use components from redesigned directory
 * @deprecated
 */
export function Overlay({ className, onClick }: OverlayProps) {
    return (
        <div
            role="presentation"
            onClick={onClick}
            className={classNames(cls.Overlay, {}, [className])}
        />
    );
}
