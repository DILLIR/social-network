import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

export function Card({ className, children, ...rest }: CardProps) {
    return (
        <div className={classNames(cls.Card, {}, [className])} {...rest}>
            {children}
        </div>
    );
}