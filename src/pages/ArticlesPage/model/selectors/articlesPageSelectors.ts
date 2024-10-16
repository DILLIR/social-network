import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleView } from '@/entities/Article';
import { buildSelector } from '@/shared/lib/store';
import { ArticleType } from '../../../../entities/Article/model/types/article';

export const getArticlesPageIsLoading = (state: StateSchema) =>
    state.articlesPage?.isLoading ?? false;
export const getArticlesPageError = (state: StateSchema) =>
    state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) =>
    state.articlesPage?.view ?? ArticleView.GRID;
export const getArticlesPageNum = (state: StateSchema) =>
    state.articlesPage?.page ?? 1;
export const getArticlesPageLimit = (state: StateSchema) =>
    state.articlesPage?.limit ?? 9;
export const getArticlesPageHasMore = (state: StateSchema) =>
    state.articlesPage?.hasMore;
export const getArticlesPageOrder = (state: StateSchema) =>
    state.articlesPage?.orderBy ?? 'asc';
export const getArticlesPageSort = (state: StateSchema) =>
    state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateSchema) =>
    state.articlesPage?.search;
export const getArticlesPageType = (state: StateSchema) =>
    state.articlesPage?.type ?? ArticleType.ALL;

export const [useArticleItemById] = buildSelector(
    (state, id: string) => state.articlesPage?.entities[id]
);
