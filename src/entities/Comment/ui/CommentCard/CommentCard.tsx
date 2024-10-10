import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Stack } from '@/shared/ui/Stack/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export function CommentCard({
    className,
    comment,
    isLoading,
}: CommentCardProps) {
    if (isLoading) {
        return (
            <Stack
                gap={10}
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Stack direction="row" gap={8} alignItems="center">
                    <Skeleton
                        className={cls.avatar}
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton className={cls.username} height={16} width={90} />
                </Stack>
                <Skeleton className={cls.text} height={50} width="100%" />
            </Stack>
        );
    }

    if (!comment) return null;

    return (
        <Stack
            gap={10}
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink to={`${RoutePath.profile}/${comment.user.id}`}>
                <Stack direction="row" gap={8} alignItems="center">
                    {comment.user.avatar != null && (
                        <Avatar size={30} src={comment.user.avatar} />
                    )}
                    <Text title={comment.user.username} />
                </Stack>
            </AppLink>
            <Text text={comment.text} />
        </Stack>
    );
}
