import { useTheme } from '@/app/providers/ThemeProvider';
import { ReactNode, useCallback, useEffect } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Overlay } from '@/shared/ui/Overlay/Overlay';
import { Portal } from '@/shared/ui/Portal/Portal';
import cls from './Drawer.module.scss';
import { useAnimationLibs } from '@/shared/lib/components/AnimationProvider/AnimationProvider';
import { Loader } from '../Loader/ui/Loader';

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;

export function DrawerContent({
    className,
    children,
    isOpen,
    onClose,
    lazy
}: DrawerProps) {
    const { Spring, Gesture } = useAnimationLibs();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
    const { theme } = useTheme();

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, []);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true
        }
    );

    const mods: Mods = {
        [cls.opened]: isOpen
    };

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

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
                <Spring.a.div
                    className={cls.sheet}
                    style={{
                        display,
                        bottom: `calc(-100vh + ${height - 100}px)`,
                        y
                    }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
}

export function Drawer({ ...props }: DrawerProps) {
    const { isLoaded } = useAnimationLibs();
    if (!isLoaded) {
        return <Loader />;
    }

    return <DrawerContent {...props} />;
}