import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from '../../../../entities/Article';
import { OrderBy } from 'shared/types/index';
import { ArticleSortField, ArticleType } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    //filter
    view: ArticleView;
    orderBy: OrderBy;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
}
