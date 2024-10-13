import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    CLEAR_INVERTED = 'clearInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    children: ReactNode;
    disabled?: boolean;
}

export const Button = memo(function Button({
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    disabled,
    size = ButtonSize.M,
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
                cls[theme],
                cls[size]
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
