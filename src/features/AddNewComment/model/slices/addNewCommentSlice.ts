import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddNewCommentSchema } from '../types/addNewComment';

const initialState: AddNewCommentSchema = {
    text: undefined,
    error: undefined
};

export const addNewCommentSlice = createSlice({
    name: 'addNewComment',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(sendComment.pending, (state) => {
    //             state.error = undefined;
    //         })
    //         .addCase(sendComment.fulfilled, (state) => {
    //             state.text = '';
    //         })
    //         .addCase(sendComment.rejected, (state, action) => {
    //             state.error = action.payload;
    //         });
    // }
});

export const { actions: addNewCommentActions, reducer: addNewCommentReducer } =
    addNewCommentSlice;
