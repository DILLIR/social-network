import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { generateOptions } from 'shared/lib/generateOptions/generateOptions';
import { Select } from '../../../../shared/ui/Select/Select';
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
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );
    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Currency')}
            options={currencyOptions}
            value={value}
            onChange={onChangeHandler}
            disabled={disabled}
        />
    );
});
