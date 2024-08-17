import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    viewMode?: ArticleView;
}

const getSkeletons = (viewMode: ArticleView) => {
    return new Array(viewMode === ArticleView.GRID ? 9 : 3)
        .fill(0)
        .map((item, index) => {
            return <ArticleListItemSkeleton key={index} view={viewMode} />;
        });
};

export function ArticleList({
    className,
    articles,
    isLoading,
    viewMode = ArticleView.GRID
}: ArticleListProps) {
    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                key={article.id}
                article={article}
                view={viewMode}
                className={cls.card}
            />
        );
    };

    return (
        <div
            className={classNames(cls.ArticleList, {}, [
                className,
                cls[viewMode]
            ])}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(viewMode)}
        </div>
    );
}
