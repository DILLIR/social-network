import { LangSwitcher } from 'features/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Stack } from 'shared/ui/Stack/Stack';
import cls from './Sidebar.module.scss';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const SidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            SidebarItemsList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [SidebarItemsList, collapsed]
    );

    return (
        <menu
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className
            ])}
        >
            <Stack gap={24} className={cls.items}>
                {itemsList}
            </Stack>
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
        </menu>
    );
});
