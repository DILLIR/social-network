import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions
} from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Avatar } from '../../../shared/ui/Avatar/Avatar';
import { Dropdown } from '../../../shared/ui/Dropdown/Dropdown';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const onCloseModal = useCallback(() => setIsOpen(false), []);
    const onShowModal = useCallback(() => setIsOpen(true), []);
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData != null) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <AppLink
                    to="/"
                    className={cls.logo}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <Text title="Social network" theme={TextTheme.INVERTED} />
                </AppLink>
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createLink}
                >
                    {t('Create article')}
                </AppLink>
                <Dropdown
                    direction="bottom right"
                    className={cls.dropdown}
                    trigger={<Avatar size={30} src={authData.avatar} />}
                    items={[
                        ...(isAdminPanelAvailable
                            ? [
                                {
                                    content: t('Admin panel'),
                                    href: RoutePath.admin_panel
                                }
                            ]
                            : []),
                        {
                            content: t('Profile'),
                            href: `${RoutePath.profile}/${authData.id}`
                        },
                        {
                            content: t('Log_out'),
                            onClick: onLogout
                        }
                    ]}
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text className={cls.logo} title="Social network" />
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Login')}
            </Button>
            {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
        </header>
    );
});
