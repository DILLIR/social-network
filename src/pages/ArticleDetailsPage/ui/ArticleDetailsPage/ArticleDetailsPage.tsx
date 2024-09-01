import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentFormAsync } from 'features/AddNewComment/ui/AddCommentForm/AddCommentForm.async';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsPageReducer } from '../../model/slices';
import {
    getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import {
    getArticleRecommendations,
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

function ArticleDetailsPage({ className }: ArticleDetailsPageProps) {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleCommentsIsLoading);
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (id === undefined) {
        return (
            <Page className={classNames('', {}, [className])}>
                {t('Article not found')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Recommendations')}
                />
                <ArticleList
                    target="_blank"
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Comments')}
                />
                <AddCommentFormAsync
                    onSendComment={onSendComment}
                    className={cls.commentForm}
                />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
}

export default ArticleDetailsPage;
