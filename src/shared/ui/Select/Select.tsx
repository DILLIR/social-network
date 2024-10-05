import { useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    label: string;
}

// refactor to use generic type
interface SelectProps<T extends string>
    extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
}

export const Select = <T extends string>({
    className,
    label,
    options,
    value,
    onChange,
    ...props
}: SelectProps<T>) => {
    const onChangeHandler = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            onChange?.(event.target.value as T);
        },
        [onChange],
    );

    const optionsList = useMemo(() => options?.map((item) => (
        <option
            key={item.value}
            value={item.value}
            className={cls.option}
        >
            {item.label}
        </option>
    )), [options]);

    return (
        <div
            className={classNames(
                cls.Wrapper,
                {
                    [cls.disabled]: props.disabled,
                },
                [className],
            )}
        >
            {label != null && <span className={cls.label}>{`${label}>`}</span>}
            <select
                {...props}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
};
