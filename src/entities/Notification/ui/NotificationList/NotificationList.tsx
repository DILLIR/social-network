import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

export function NotificationList({ className }: NotificationListProps) {
    const { data, isLoading } = useNotifications(undefined, {
        pollingInterval: 5000
    });

    const Skeleton = SkeletonRedesigned;

    if (isLoading) {
        return (
            <Stack gap={16} className={classNames('', {}, [className])}>
                <Skeleton width="100%" height={80} border="8px" />
                <Skeleton width="100%" height={80} border="8px" />
                <Skeleton width="100%" height={80} border="8px" />
            </Stack>
        );
    }

    return (
        <Stack gap={16} className={classNames('', {}, [className])}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </Stack>
    );
}
