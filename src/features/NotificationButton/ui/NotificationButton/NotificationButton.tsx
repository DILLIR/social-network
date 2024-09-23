import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export function NotificationButton({ className }: NotificationButtonProps) {
    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom right"
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon
                        Svg={NotificationIcon}
                        inverted
                        className={cls.notificationIcon}
                    />
                </Button>
            }
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
}
