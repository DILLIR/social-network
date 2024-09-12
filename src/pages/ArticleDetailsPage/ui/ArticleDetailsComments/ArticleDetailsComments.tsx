import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentList } from '../../../../entities/Comment';
import { AddCommentFormAsync } from '../../../../features/AddNewComment/ui/AddCommentForm/AddCommentForm.async';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '../../../../shared/lib/hooks/useInitialEffect';
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text, TextSize } from '../../../../shared/ui/Text/Text';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading
} from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export function ArticleDetailsComments({
    className,
    id
}: ArticleDetailsCommentsProps) {
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    });

    return (
        <Stack gap={16} className={classNames('', {}, [className])}>
            <Stack gap={8}>
                <Text size={TextSize.L} title={t('Comments')} />
                <AddCommentFormAsync onSendComment={onSendComment} />
            </Stack>
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </Stack>
    );
}
