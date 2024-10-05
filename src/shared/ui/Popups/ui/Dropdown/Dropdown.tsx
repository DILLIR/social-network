import { Menu } from '@headlessui/react';
import { ReactNode } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import cls from './Dropdown.module.scss';
import { mapDirectionClass } from '../../styles/const';
import popupCls from '../../styles/popup.module.scss'

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger?: ReactNode;
    direction?: DropdownDirection;
}

export function Dropdown({
    className,
    trigger,
    items,
    direction = 'bottom right'
}: DropdownProps) {
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(cls.item, {
                                [popupCls.active]: active
                            })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href != null) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
