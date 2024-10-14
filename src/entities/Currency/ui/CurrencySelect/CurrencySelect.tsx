import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { generateOptions } from '@/shared/lib/generateOptions/generateOptions';
import { Currency } from '../../types/currency';
import { ToggleFeatures } from '../../../../shared/lib/features';
import { ListBox } from '../../../../shared/ui/redesigned/Popups';
import { ListBox as ListBoxDeprecated } from '../../../../shared/ui/deprecated/Popups';

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

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...props} />}
            off={<ListBoxDeprecated {...props} />}
        />
    );
});
