import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text, TextSize } from '@/shared/ui/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export function NotificationItem({ className, item }: NotificationItemProps) {
    const content = (
        <Card
            theme={CardTheme.OUTLINE}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description} size={TextSize.S} />
        </Card>
    );

    if (item.href != null) {
        return <AppLink className={cls.link} to={item.href}>{content}</AppLink>;
    }

    return content;
}
