import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { generateOptions } from '@/shared/lib/generateOptions/generateOptions';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Currency } from '../../types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    disabled?: boolean;
}

export const CurrencySelect = memo(function CurrencySelect({
    className,
    value,
    onChange,
    disabled
}: CurrencySelectProps) {
    const currencyOptions = useMemo(() => generateOptions(Currency), []);
    const onChangeHandler = useCallback(
        (value: string | number) => {
            onChange?.(value as Currency);
        },
        [onChange]
    );

    const props = {
        className: classNames('', {}, [className]),
        defaultValue: 'Select your currency',
        items: currencyOptions,
        value,
        onChange: onChangeHandler,
        disabled,
        direction: 'bottom right' as const,
        label: 'Select your currency'
    };

    return <ListBox {...props} />;
});
