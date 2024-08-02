import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    label: string;
}

// refactor to use generic type
interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
}

export const Select = memo(function Select({
    className,
    label,
    options,
    value,
    onChange,
    ...props
}: SelectProps) {
    const onChangeHandler = useCallback(
        (event: React.ChangeEvent<HTMLSelectElement>) => {
            onChange?.(event.target.value);
        },
        [onChange]
    );

    const optionsList = useMemo(() => {
        return options?.map((item) => {
            return (
                <option
                    key={item.value}
                    value={item.value}
                    className={cls.option}
                >
                    {item.label}
                </option>
            );
        });
    }, [options]);

    return (
        <div className={classNames(cls.Wrapper, {
            [cls.disabled]: props.disabled
        }, [className])}>
            {label != null && <span className={cls.label}>{label + '>'}</span>}
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
});
