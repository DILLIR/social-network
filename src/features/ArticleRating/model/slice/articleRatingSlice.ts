import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleRatingSchema } from '../types/articleRatingSchema';

const initialState: ArticleRatingSchema = {
    // Add initial state here
}
    
export const articleRatingSlice = createSlice({
    name: 'articleRating',
    initialState,
    reducers: {
        setTemplate: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(template.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(
    //             template.fulfilled,
    //             (state, action: PayloadAction<Profile>) => {
    //                 state.isLoading = false;
    //                 state.data = action.payload;
    //             },
    //         )
    //         .addCase(template.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: articleRatingActions, reducer: articleRatingReducer } = articleRatingSlice;