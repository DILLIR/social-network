import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    square?: boolean;
    size?: ButtonSize;
    children: ReactNode;
    disabled?: boolean;
}

export const Button = memo(function Button({
    className,
    children,
    variant = 'outline',
    square,
    disabled,
    size = 'm',
    ...otherProps
}: ButtonProps) {
    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [
                className,
                cls[variant],
                cls[size]
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
