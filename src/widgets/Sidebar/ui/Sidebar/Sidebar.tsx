import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonSize } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/';
import { Button, ButtonTheme } from '../../../../shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);


    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className
            ])}
        >
            <div className={cls.items}>
                {SidebarItemsList.map((item) => {
                    return (
                        <SidebarItem
                            key={item.path}
                            item={item}
                            collapsed={collapsed}
                        />
                    );
                })}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
                <Button
                    onClick={onToggle}
                    data-testid="sidebar-toggle"
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    className={cls.collapsedBtn}
                    square
                    size={ButtonSize.XL}
                >
                    {collapsed ? '>' : '<'}
                </Button>
            </div>
        </div>
    );
});
