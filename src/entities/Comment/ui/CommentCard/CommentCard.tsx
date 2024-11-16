import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
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
    isLoading
}: CommentCardProps) {
    if (isLoading) {
        const Skeleton = SkeletonRedesigned;
        return (
            <Stack
                data-testid="CommentCard.Loading"
                gap={10}
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading
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
        <Card>
            <Stack
                data-testid="CommentCard.Content"
                gap={10}
                className={classNames(cls.CommentCardRedesigned, {}, [
                    className
                ])}
            >
                <AppLink to={getRouteProfile(comment.user.id)}>
                    <Stack direction="row" gap={8} alignItems="center">
                        {comment.user.avatar != null && (
                            <Avatar size={30} src={comment.user.avatar} />
                        )}
                        <Text text={comment.user.username} weight="bold" />
                    </Stack>
                </AppLink>
                <Text text={comment.text} />
            </Stack>
        </Card>
    );
}
