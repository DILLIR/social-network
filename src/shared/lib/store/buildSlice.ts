import {
    bindActionCreators,
    createSlice,
    CreateSliceOptions,
    SliceCaseReducers
} from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options);

    const useActions = (): typeof slice.actions => {
        const dispatch = useDispatch();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return useMemo(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            () => bindActionCreators(slice.actions, dispatch),
            [dispatch]
        );
    };

    return {
        ...slice,
        useActions
    };
}
