import { forwardRef, memo, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
    variant?: AppLinkVariant;
    activeClassName?: string;
}

const AppLinkComponent = forwardRef<HTMLAnchorElement, AppLinkProps>(
    function AppLink(
        {
            className,
            children,
            variant = 'primary',
            activeClassName = '',
            ...props
        }: AppLinkProps,
        ref
    ) {
        return (
            <NavLink
                {...props}
                ref={ref}
                className={({ isActive }) =>
                    classNames(
                        cls.AppLink,
                        {
                            [activeClassName]: isActive
                        },
                        [className, cls[variant]]
                    )
                }
            >
                {children}
            </NavLink>
        );
    }
);

export const AppLink = memo(AppLinkComponent);
