import { getUserAuthData } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { AvatarDropdown } from 'features/AvatarDropdown';
import { NotificationButton } from 'features/NotificationButton';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Stack } from 'shared/ui/Stack/Stack';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => setIsOpen(false), []);
    const onShowModal = useCallback(() => setIsOpen(true), []);

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
                <Stack
                    gap={16}
                    direction="row"
                    alignItems="center"
                    className={cls.actions}
                >
                    <NotificationButton />
                    <AvatarDropdown />
                </Stack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text title="Social network" theme={TextTheme.INVERTED} />
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
