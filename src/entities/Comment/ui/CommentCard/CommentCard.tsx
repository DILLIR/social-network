import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export function CommentCard({
    className,
    comment,
    isLoading
}: CommentCardProps) {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton className={cls.avatar} width={30} height={30} border='50%'/>
                    <Skeleton className={cls.username} height={16} width={90}/>
                </div>
                <Skeleton className={cls.text} height={50} width={"100%"}/>
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar != null && (
                    <Avatar size={30} src={comment.user.avatar} />
                )}
                <Text title={comment.user.username} />
            </div>
            <Text text={comment.text} className={cls.text} />
        </div>
    );
}
