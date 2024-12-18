import { Listbox } from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';
import CheckMark from '@/shared/assets/icons/check-mark.svg';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';

interface ListBoxItem<T extends string> {
    value: T;
    label: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    className?: string;
    items?: ListBoxItem<T>[];
    value?: T;
    defaultValue?: T;
    onChange: (value: T) => void;
    disabled?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox<T extends string>({
    className,
    items,
    value,
    defaultValue,
    onChange,
    disabled,
    direction = 'bottom right',
    label
}: ListBoxProps<T>) {
    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];

    const selectedItem = useMemo(
        () => items?.find((item) => item.value === value),
        [items, value]
    );

    return (
        <Stack direction="row" alignItems="center" gap={8}>
            {label && (
                <span
                    className={classNames(cls.label, {
                        [cls.disabled]: disabled
                    })}
                >
                    {label}
                </span>
            )}
            <Listbox
                disabled={disabled}
                as="div"
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup
                ])}
                value={value}
                onChange={onChange}
            >
                <Listbox.Button className={popupCls.trigger} as="div">
                    <Button
                        variant="filled"
                        className={cls.button}
                        disabled={disabled}
                        endIcon={<Icon Svg={ArrowIcon} />}
                    >
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
                                        [popupCls.disabled]: disabled
                                    })}
                                >
                                    {item.label}
                                    {selected && (
                                        <Icon
                                            width={12}
                                            height={12}
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
