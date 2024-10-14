import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outline' | 'light';
export type CardSize = 'none' | 's' | 'm' | 'l';
export type CardBorder = 'default' | 'rounded';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    variant?: CardVariant;
    size?: CardSize;
    border?: CardBorder;
}

export function Card({
    className,
    children,
    variant = 'normal',
    size = 'm',
    border = 'default',
    ...rest
}: CardProps) {
    return (
        <div
            className={classNames(cls.Card, {}, [
                className,
                cls[variant],
                cls[size],
                cls[border]
            ])}
            {...rest}
        >
            {children}
        </div>
    );
}
