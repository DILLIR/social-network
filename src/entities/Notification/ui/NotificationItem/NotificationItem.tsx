import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card/Card';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export function NotificationItem({ className, item }: NotificationItemProps) {
    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(cls.NotificationItemRedesign, {}, [
                        className
                    ])}
                >
                    <Text title={item.title} text={item.description} size="s" />
                </Card>
            }
            off={
                <CardDeprecated
                    theme={CardTheme.OUTLINE}
                    className={classNames(cls.NotificationItem, {}, [
                        className
                    ])}
                >
                    <TextDeprecated
                        title={item.title}
                        text={item.description}
                        size={TextSize.S}
                    />
                </CardDeprecated>
            }
        />
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
