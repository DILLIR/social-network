import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    viewMode?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (viewMode: ArticleView) => new Array(viewMode === ArticleView.GRID ? 9 : 3)
    .fill(0)
    // eslint-disable-next-line react/no-array-index-key
    .map((item, index) => <ArticleListItemSkeleton key={index} view={viewMode} />);

export function ArticleList({
    className,
    articles,
    isLoading,
    viewMode = ArticleView.GRID,
    target,
}: ArticleListProps) {
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={viewMode}
            className={cls.card}
            target={target}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[viewMode],
                ])}
            >
                <Text size={TextSize.L} title={t('Articles not found')} align={TextAlign.CENTER} />
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [
                className,
                cls[viewMode],
            ])}
        >
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(viewMode)}
        </div>
    );
}
