import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions
} from '@/entities/User';
import {
    getRouteAdminPanel,
    getRouteProfile,
    getRouteSettings
} from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Dropdown } from '@/shared/ui/redesigned/Popups/ui/Dropdown/Dropdown';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import cls from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
    className?: string;
}

export function AvatarDropdown({ className }: AvatarDropdownProps) {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData == null) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Admin panel'),
                      href: getRouteAdminPanel()
                  }
              ]
            : []),
        {
            content: t('Settings'),
            href: getRouteSettings()
        },
        {
            content: t('Profile'),
            href: getRouteProfile(authData.id)
        },
        {
            content: t('Log_out'),
            onClick: onLogout
        }
    ];

    return (
        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            direction="bottom right"
            trigger={
                <Avatar
                    size={40}
                    src={authData.avatar}
                    className={cls.avatar}
                />
            }
            items={items}
        />
    );
}
