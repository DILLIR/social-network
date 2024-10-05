import { Popover as DefaultPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger?: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export function Popover({
    className,
    trigger,
    direction = 'bottom right',
    children
}: PopoverProps) {
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <DefaultPopover
            as="div"
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <DefaultPopover.Button className={popupCls.trigger} as="div">
                {trigger}
            </DefaultPopover.Button>

            <DefaultPopover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </DefaultPopover.Panel>
        </DefaultPopover>
    );
}
