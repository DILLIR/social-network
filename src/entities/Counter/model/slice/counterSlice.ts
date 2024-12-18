import { buildSlice } from '@/shared/lib/store';
import { CounterSchema } from '../types/counterSchema';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: CounterSchema = {
    value: 0
};

export const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        add: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

export const {
    actions: counterActions,
    reducer: counterReducer,
    useActions: useCounterActions
} = counterSlice;
