import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';


import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups/ui/Popover/Popover';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
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
        <Icon
            onClick={onOpenDrawer}
            Svg={NotificationIcon}
            className={cls.notificationIcon}
            clickable
        />
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [
                        className
                    ])}
                    direction="bottom right"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                <>
                    {trigger}
                    <Drawer isOpen={openDrawer} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </>
            </MobileView>
        </div>
    );
}
