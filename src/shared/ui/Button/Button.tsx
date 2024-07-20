import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
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
    theme,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
}: ButtonProps) {
    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled
    };

    return (
        <button
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
