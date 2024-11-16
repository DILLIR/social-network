import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { CommentCard } from '../CommentCard/CommentCard';
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

    if (isLoading) {
        return (
            <Stack gap={16} className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </Stack>
        );
    }

    return (
        <Stack gap={10} className={classNames('', {}, [className])}>
            {comments.length > 0 ? (
                comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Card>
                    <Text text={t('Comments are missing')} />
                </Card>
            )}
        </Stack>
    );
}
