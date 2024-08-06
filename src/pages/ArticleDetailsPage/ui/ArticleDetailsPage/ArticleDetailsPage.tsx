import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import {
    DynamicModuleLoader,
    ReducersList
} from '../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading
} from '../../model/selectors/comments';
import { fetchCommentByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    articleDetailsCommentsReducer,
    getArticleComments
} from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
};

function ArticleDetailsPage({ className }: ArticleDetailsPageProps) {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    });

    if (id === undefined) {
        return (
            <div className={classNames('', {}, [className])}>
                {t('Article not found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Comments')} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
}

export default ArticleDetailsPage;
