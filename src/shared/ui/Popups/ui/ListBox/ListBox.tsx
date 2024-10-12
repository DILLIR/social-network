import { Listbox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';
import CheckMark from '@/shared/assets/icons/check-mark.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Stack } from '@/shared/ui/Stack';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';

interface ListBoxItem {
    value: string | number;
    label: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string | number;
    defaultValue?: string | number;
    onChange: (value: string | number) => void;
    disabled?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox({
    className,
    items,
    value,
    defaultValue,
    onChange,
    disabled,
    direction = 'bottom right',
    label,
}: ListBoxProps) {
    const optionsClasses = [mapDirectionClass[direction]];

    const selectedItem = useMemo(
        () => items?.find((item) => item.value === value),
        [items, value],
    );

    return (
        <Stack direction="row" alignItems="center" gap={8}>
            {label && (
                <span
                    className={classNames(cls.label, {
                        [cls.disabled]: disabled,
                    })}
                >
                    {`${label}>`}
                </span>
            )}
            <Listbox
                disabled={disabled}
                as="div"
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
            >
                <Listbox.Button className={popupCls.trigger} as="div">
                    <Button className={cls.button} disabled={disabled}>
                        {selectedItem?.label ?? defaultValue}
                    </Button>
                </Listbox.Button>
                <Listbox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <Listbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected, disabled }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [cls.selected]: selected,
                                        [popupCls.disabled]: disabled,
                                    })}
                                >
                                    {item.label}
                                    {selected && (
                                        <Icon
                                            Svg={CheckMark}
                                            className={cls.icon}
                                        />
                                    )}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </Stack>
    );
}
