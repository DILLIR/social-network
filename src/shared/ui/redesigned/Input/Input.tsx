import { ChangeEvent, memo, useEffect, useRef, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Stack } from '../Stack';
import { Text } from '../Text';
import cls from './Input.module.scss';

type HTMInputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'
>;

interface InputProps extends HTMInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    label?: string;
}

export const Input = memo(function Input({
    className,
    value,
    onChange,
    placeholder,
    autofocus,
    disabled,
    startIcon,
    endIcon,
    label,
    ...props
}: InputProps) {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus, ref]);

    const onBlurHandler = () => {
        setIsFocused(false);
    };

    const onFocusHandler = () => {
        setIsFocused(true);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.disabled]: disabled,
        [cls.focused]: isFocused,
        [cls.withStartIcon]: Boolean(startIcon),
        [cls.withEndIcon]: Boolean(endIcon)
    };

    const input = (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {startIcon && <div className={cls.startIcon}>{startIcon}</div>}
            <input
                ref={ref}
                value={value}
                onChange={onChangeHandler}
                className={cls.Input}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                disabled={disabled}
                placeholder={placeholder}
                {...props}
            />
            {endIcon && <div className={cls.endIcon}>{endIcon}</div>}
        </div>
    );

    if (label) {
        return (
            <Stack direction="row" gap={8} alignItems="center">
                <Text text={label} className={cls.label} />
                {input}
            </Stack>
        );
    }

    return input;
});
