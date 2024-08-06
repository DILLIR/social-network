import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments: Comment[];
    isLoading?: boolean;
}

export function CommentList({
    className,
    comments,
    isLoading
}: CommentListProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments.length > 0 ? (
                comments.map((comment, index) => (
                    <CommentCard className={cls.comment} key={index} comment={comment} isLoading={isLoading}/>
                ))
            ) : (
                <Text text={t('Comments are missing')} />
            )}
        </div>
    );
}
