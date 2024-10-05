import { useTheme } from 'app/providers/ThemeProvider';
import { ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { Portal } from 'shared/ui/Portal/Portal';
import { useModal } from '../../lib/hooks/useModal';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export function Drawer({
    className,
    children,
    isOpen,
    onClose,
    lazy
}: DrawerProps) {
    const { theme } = useTheme();

    const { close, isClosing } = useModal({
        isOpen,
        onClose
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing
    };

    if (lazy && !isOpen) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.Drawer, mods, [
                    className,
                    theme,
                    'app_drawer'
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
}
