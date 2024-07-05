import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import { useTranslation } from 'react-i18next';

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
                <h2 className={cls.Heading}>{t('Login')}</h2>
                <LoginForm />
            </Modal>
        </>
    );
}
