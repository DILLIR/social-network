import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export function LoginModal({ className, isOpen, onClose }: LoginModalProps) {
    const { t } = useTranslation();

    return (
        <>
            <Modal
                className={classNames(cls.LoginModal, {}, [className])}
                onClose={onClose}
                isOpen={isOpen}
                lazy
            >
                <Text title={t('Login')}/>
                <LoginForm />
            </Modal>
        </>
    );
}
