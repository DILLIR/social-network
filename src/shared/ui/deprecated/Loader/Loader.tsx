import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}
/**
 * Outdated, use components from redesigned directory
 * @deprecated
 */
export function Loader({ className }: LoaderProps) {
    return (
        <div className={classNames(cls.Loader, {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
}
