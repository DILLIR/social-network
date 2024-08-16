import {
    ArticleList,
    ArticleView,
    ArticleViewSelector
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles
} from '../../model/slices/articlesPageSlice';
import { useCallback } from 'react';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
};

function ArticlesPage({ className }: ArticlesPageProps) {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const viewMode = useSelector(getArticlesPageView);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlesPageActions.initState());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <ArticleViewSelector viewMode={viewMode} onViewClick={onChangeView} />
                <ArticleList
                    viewMode={viewMode}
                    articles={articles}
                    isLoading={isLoading}
                />
            </div>
        </DynamicModuleLoader>
    );
}

export default ArticlesPage;
