import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    AppLink as AppLinkDeprecated,
    AppLinkTheme
} from '@/shared/ui/deprecated/AppLink';
import {
    Button as ButtonDeprecated,
    ButtonTheme
} from '@/shared/ui/deprecated/Button';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { toggleFeatures, ToggleFeatures } from '../../../shared/lib/features';
import { Button } from '../../../shared/ui/redesigned/Button';
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
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header
                        className={classNames(cls.NavbarRedesigned, {}, [
                            className
                        ])}
                    >
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
                }
                off={
                    <header className={classNames(cls.Navbar, {}, [className])}>
                        <AppLinkDeprecated
                            to="/"
                            className={cls.logo}
                            theme={AppLinkTheme.SECONDARY}
                        >
                            <TextDeprecated
                                title="Social network"
                                theme={TextTheme.INVERTED}
                            />
                        </AppLinkDeprecated>
                        <AppLinkDeprecated
                            to={getRouteArticleCreate()}
                            theme={AppLinkTheme.SECONDARY}
                            className={cls.createLink}
                        >
                            {t('Create article')}
                        </AppLinkDeprecated>
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
                }
            />
        );
    }

    return (
        <header
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => cls.NavbarRedesigned,
                    off: () => cls.Navbar
                }),
                {},
                [className]
            )}
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Button
                        className={cls.links}
                        onClick={onShowModal}
                        variant="clear"
                    >
                        {t('Login')}
                    </Button>
                }
                off={
                    <>
                        <TextDeprecated
                            title="Social network"
                            theme={TextTheme.INVERTED}
                        />
                        <ButtonDeprecated
                            className={cls.links}
                            theme={ButtonTheme.CLEAR_INVERTED}
                            onClick={onShowModal}
                        >
                            {t('Login')}
                        </ButtonDeprecated>
                    </>
                }
            />

            {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
        </header>
    );
});
