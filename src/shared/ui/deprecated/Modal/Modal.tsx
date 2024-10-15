import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import { Overlay } from '../../redesigned/Overlay/Overlay';
import { Portal } from '../../redesigned/Portal/Portal';
import { toggleFeatures } from '../../../lib/features';
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

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.modalNew,
        off: () => cls.modalOld
    });

    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [className, mainClass])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
}
