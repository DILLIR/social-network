import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
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

    return (
        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            direction="bottom right"
            trigger={<Avatar size={30} src={authData.avatar} />}
            items={[
                ...(isAdminPanelAvailable
                    ? [
                        {
                            content: t('Admin panel'),
                            href: RoutePath.admin_panel,
                        },
                    ]
                    : []),
                {
                    content: t('Profile'),
                    href: `${RoutePath.profile}/${authData.id}`,
                },
                {
                    content: t('Log_out'),
                    onClick: onLogout,
                },
            ]}
        />
    );
}
