import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entities/Notification';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme
} from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { ToggleFeatures } from '@/shared/lib/features';
import { Popover } from '@/shared/ui/redesigned/Popups/ui/Popover/Popover';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export function NotificationButton({ className }: NotificationButtonProps) {
    const [openDrawer, setOpenDrawer] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setOpenDrawer(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setOpenDrawer(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon
                    onClick={onOpenDrawer}
                    Svg={NotificationIcon}
                    className={cls.notificationIcon}
                    clickable
                />
            }
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    onClick={onOpenDrawer}
                >
                    <IconDeprecated
                        Svg={NotificationIconDeprecated}
                        inverted
                        className={cls.notificationIcon}
                    />
                </ButtonDeprecated>
            }
        />
    );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover
                            className={classNames(cls.NotificationButton, {}, [
                                className
                            ])}
                            direction="bottom right"
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            className={classNames(cls.NotificationButton, {}, [
                                className
                            ])}
                            direction="bottom right"
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notifications} />
                        </PopoverDeprecated>
                    }
                />
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={openDrawer} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
}
