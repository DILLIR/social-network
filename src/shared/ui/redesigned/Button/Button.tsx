import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';

export type ButtonSize = 'm' | 'l' | 'xl';

export type ButtonWidth = 'auto' | 'fit-content';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    children: ReactNode;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    width?: ButtonWidth;
    color?: ButtonColor;
}

export const Button = memo(function Button({
    className,
    children,
    variant = 'outline',
    square,
    disabled,
    size = 'm',
    startIcon,
    endIcon,
    width = 'auto',
    color = 'normal',
    ...otherProps
}: ButtonProps) {
    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.withStartIcon]: Boolean(startIcon),
        [cls.withEndIcon]: Boolean(endIcon)
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [
                className,
                cls[variant],
                cls[size],
                cls[width],
                cls[color]
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {startIcon && <span className={cls.startIcon}>{startIcon}</span>}
            {children}
            {endIcon && <span className={cls.endIcon}>{endIcon}</span>}
        </button>
    );
});
