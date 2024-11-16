import { HTMLAttributeAnchorTarget } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export function ArticleListItem(props: ArticleListItemProps) {
    return <ArticleListItemRedesigned {...props} />;
}
