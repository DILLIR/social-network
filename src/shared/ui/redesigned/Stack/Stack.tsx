import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Stack.module.scss';

interface StackProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    gap?: 2 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;
    direction?: 'row' | 'column';
    justifyContent?:
        | 'flex-start'
        | 'center'
        | 'flex-end'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
    width?: string;
    style?: React.CSSProperties;
}

export function Stack({
    className,
    children,
    direction,
    justifyContent,
    alignItems,
    gap,
    width,
    style,
    ...props
}: StackProps) {
    return (
        <div
            className={classNames(cls.Stack, {}, [className])}
            style={{
                gap: gap ? `${gap}px` : undefined,
                flexDirection: direction,
                justifyContent,
                alignItems,
                width,
                ...style
            }}
            {...props}
        >
            {children}
        </div>
    );
}
