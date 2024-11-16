import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card/Card';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export function NotificationItem({ className, item }: NotificationItemProps) {
    const content = (
        <Card
            className={classNames(cls.NotificationItemRedesign, {}, [
                className
            ])}
        >
            <Text title={item.title} text={item.description} size="s" />
        </Card>
    );

    if (item.href != null) {
        return (
            <AppLink className={cls.link} to={item.href}>
                {content}
            </AppLink>
        );
    }

    return content;
}
