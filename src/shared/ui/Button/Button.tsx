import { ButtonHTMLAttributes, FC } from 'react';
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
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps
}) => {
    const mods: Record<string, boolean> = {
        [cls.square]: square
    };

    return (
        <button
            className={classNames(cls.Button, mods, [
                className,
                cls[theme],
                cls[size]
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
