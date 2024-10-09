import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { generateOptions } from '@/shared/lib/generateOptions/generateOptions';
import { ListBox } from '@/shared/ui/Popups';
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
    disabled,
}: CurrencySelectProps) {
    const { t } = useTranslation();
    const currencyOptions = useMemo(() => generateOptions(Currency), []);
    const onChangeHandler = useCallback(
        (value: string | number) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            defaultValue="Select your currency"
            items={currencyOptions}
            value={value}
            onChange={onChangeHandler}
            disabled={disabled}
            direction="top right"
            label="Select your currency"
        />
    );
});
