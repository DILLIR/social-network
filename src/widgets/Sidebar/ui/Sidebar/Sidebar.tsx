import { memo, useMemo, useState } from 'react';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { useSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const SidebarItemsList = useSidebarItems();

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsedRedesigned]: collapsed },
                        [className]
                    )}
                >
                    <AppLogo
                        className={cls.appLogo}
                        size={collapsed ? 30 : 50}
                    />
                    <Stack gap={8} role="navigation" className={cls.items}>
                        {itemsList}
                    </Stack>
                    <Icon
                        Svg={ArrowIcon}
                        onClick={onToggle}
                        data-testid="sidebar-toggle"
                        className={cls.collapsedBtn}
                        clickable
                    />
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher className={cls.lang} short={collapsed} />
                    </div>
                </aside>
            }
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.Sidebar,
                        { [cls.collapsed]: collapsed },
                        [className]
                    )}
                >
                    <Stack gap={24} role="navigation" className={cls.items}>
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
                </aside>
            }
        />
    );
});
