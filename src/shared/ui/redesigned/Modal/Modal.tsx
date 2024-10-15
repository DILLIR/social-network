import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import { Overlay } from '../../redesigned/Overlay/Overlay';
import { Portal } from '../../redesigned/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}
/**
 * Outdated, use components from redesigned directory
 * @deprecated
 */
export function Modal({
    className,
    children,
    isOpen,
    onClose,
    lazy
}: ModalProps) {
    const { close, isMounted, isClosing } = useModal({
        isOpen,
        onClose
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
}
