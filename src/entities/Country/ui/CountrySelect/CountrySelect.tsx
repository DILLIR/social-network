import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { generateOptions } from 'shared/lib/generateOptions/generateOptions';
import { ListBox } from 'shared/ui/Popups';
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
    const { t } = useTranslation();
    const currencyOptions = useMemo(() => generateOptions(Country), []);
    const onChangeHandler = useCallback(
        (value: string | number) => {
            onChange?.(value as Country);
        },
        [onChange]
    );

    return (
        <ListBox
            className={classNames('', {}, [className])}
            defaultValue="Select your country"
            items={currencyOptions}
            value={value}
            onChange={onChangeHandler}
            disabled={disabled}
            direction='top right'
            label='Select your country'
        />
    );
});
