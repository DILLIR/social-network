import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetails/fetchArticleById',
    async (articleId, { extra, rejectWithValue }) => {
        try {
            if (!articleId) {
                throw new Error('No articleId');
            }

            const response = await extra.api.get<Article>(
                `/articles/${articleId}`,
                {
                    params: {
                        _expand: 'user',
                    },
                },
            );
            if (!response.data) {
                throw new Error('No data');
            }
            return response.data;
        } catch (error) {
            // console.error(error);
            return rejectWithValue('error');
        }
    },
);
