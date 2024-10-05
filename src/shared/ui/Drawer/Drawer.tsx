import { useTheme } from 'app/providers/ThemeProvider';
import { ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export function Drawer({ className, children, isOpen, onClose }: DrawerProps) {
    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen
    };

    return (
        <Portal>
            <div
                className={classNames(cls.Drawer, mods, [
                    className,
                    theme,
                    'app_drawer'
                ])}
            >
                <Overlay onClick={onClose} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
}
