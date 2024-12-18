import { ChangeEvent, memo, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
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
}
/**
 * Outdated, use components from redesigned directory
 * @deprecated
 */
export const Input = memo(function Input({
    className,
    value,
    onChange,
    placeholder,
    autofocus,
    disabled,
    ...props
}: InputProps) {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

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
        setCaretPosition(e.target.selectionStart || 0);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSelect = (e: any) => {
        setCaretPosition(e.target?.selectionStart || 0);
    };

    return (
        <div
            className={classNames(
                cls.InputWrapper,
                {
                    [cls.disabled]: disabled
                },
                [className]
            )}
        >
            {placeholder && (
                <div className={cls.Placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.Input}
                    onFocus={onFocusHandler}
                    onBlur={onBlurHandler}
                    onSelect={onSelect}
                    disabled={disabled}
                    {...props}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9.6}px` }}
                    />
                )}
            </div>
        </div>
    );
});
