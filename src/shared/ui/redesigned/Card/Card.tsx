import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outline' | 'light';
export type CardSize = 's' | 'm' | 'l';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    variant?: CardVariant;
    size?: CardSize;
}

export function Card({
    className,
    children,
    variant = 'normal',
    size = 'm',
    ...rest
}: CardProps) {
    return (
        <div
            className={classNames(cls.Card, {}, [
                className,
                cls[variant],
                cls[size]
            ])}
            {...rest}
        >
            {children}
        </div>
    );
}
