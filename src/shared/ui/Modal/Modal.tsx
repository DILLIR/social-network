import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export function Modal({ className, children, isOpen, onClose }: ModalProps) {
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen
    };

    function handleClose() {
        if (onClose) {
            onClose();
        }
    }

    function onContentClick(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
    }

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={handleClose}>
                <div className={cls.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
}
