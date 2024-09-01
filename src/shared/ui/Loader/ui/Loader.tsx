import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

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
