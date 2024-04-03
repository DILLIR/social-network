import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ButtonSize } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/';
import { RoutePath } from '../../../../shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from '../../../../shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation('');

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
                <AppLink
                    to={RoutePath.main}
                    className={cls.item}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Main')}</span>
                </AppLink>

                <AppLink
                    to={RoutePath.about}
                    className={cls.item}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('About')}</span>
                </AppLink>
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
}
