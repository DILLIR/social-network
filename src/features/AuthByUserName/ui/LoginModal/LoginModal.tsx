import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { ToggleFeatures } from '../../../../shared/lib/features';
import { Text } from '../../../../shared/ui/redesigned/Text';
import { Stack } from '../../../../shared/ui/redesigned/Stack';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export function LoginModal({ className, isOpen, onClose }: LoginModalProps) {
    const { t } = useTranslation();

    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            onClose={onClose}
            isOpen={isOpen}
            lazy
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Stack gap={32}>
                        <Text title={t('Login')} />
                        <Suspense fallback={<Loader />}>
                            <LoginFormAsync onSuccess={onClose} />
                        </Suspense>
                    </Stack>
                }
                off={
                    <>
                        <TextDeprecated title={t('Login')} />
                        <Suspense fallback={<Loader />}>
                            <LoginFormAsync onSuccess={onClose} />
                        </Suspense>
                    </>
                }
            />
        </Modal>
    );
}
