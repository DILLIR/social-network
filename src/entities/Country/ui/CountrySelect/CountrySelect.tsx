import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { generateOptions } from '@/shared/lib/generateOptions/generateOptions';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { Country } from '../../types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    disabled?: boolean;
}

export const CountrySelect = memo(function CountrySelect({
    className,
    value,
    onChange,
    disabled
}: CountrySelectProps) {
    const currencyOptions = useMemo(() => generateOptions(Country), []);
    const onChangeHandler = useCallback(
        (value: string | number) => {
            onChange?.(value as Country);
        },
        [onChange]
    );

    const props = {
        className: classNames('', {}, [className]),
        defaultValue: 'Select your country',
        items: currencyOptions,
        value,
        onChange: onChangeHandler,
        disabled,
        direction: 'bottom right' as const,
        label: 'Select your country'
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...props} />}
            off={<ListBoxDeprecated {...props} />}
        />
    );
});
