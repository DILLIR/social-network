import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { OrderBy } from 'shared/types/index';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, { dispatch }) => {
    const orderFromUrl = searchParams.get('order') as OrderBy;
    const sortFromUrl = searchParams.get('sort') as ArticleSortField;
    const searchFromUrl = searchParams.get('search');
    const typeFromUrl = searchParams.get('type');

    if(orderFromUrl != null){
        dispatch(articlesPageActions.setOrder(orderFromUrl));
    }
    if(sortFromUrl != null){
        dispatch(articlesPageActions.setSort(sortFromUrl));
    }
    if(searchFromUrl != null){
        dispatch(articlesPageActions.setSearch(searchFromUrl));
    }
    if(typeFromUrl != null){
        dispatch(articlesPageActions.setType(typeFromUrl as ArticleType));
    }
    

    dispatch(articlesPageActions.initState());
    dispatch(
        fetchArticlesList({})
    );
});
