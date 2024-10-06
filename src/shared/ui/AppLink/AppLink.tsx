import { forwardRef, memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink = memo(
    forwardRef<HTMLAnchorElement, AppLinkProps>(function AppLink(
        {
            className,
            children,
            theme = AppLinkTheme.PRIMARY,
            ...props
        }: AppLinkProps,
        ref
    ) {
        return (
            <Link
                {...props}
                ref={ref}
                className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            >
                {children}
            </Link>
        );
    })
);
