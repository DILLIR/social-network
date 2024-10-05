import { NotificationList } from 'entities/Notification';
import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
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
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon
                Svg={NotificationIcon}
                inverted
                className={cls.notificationIcon}
            />
        </Button>
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
                {trigger}
                <Drawer isOpen={openDrawer} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );
}
