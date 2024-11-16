import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { classNames } from '@/shared/lib/classNames/classNames';




import { Stack } from '@/shared/ui/redesigned/Stack';
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
            <header
                className={classNames(cls.NavbarRedesigned, {}, [className])}
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
        );
    }

    return (
        <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <Button className={cls.links} onClick={onShowModal} variant="clear">
                {t('Login')}
            </Button>

            {isOpen && <LoginModal isOpen={isOpen} onClose={onCloseModal} />}
        </header>
    );
});
