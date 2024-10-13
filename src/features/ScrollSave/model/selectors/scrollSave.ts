import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getSaveScrollPosition = (state: StateSchema) =>
    state.scrollSave.scroll;
export const getSaveScrollPositionByPath = createSelector(
    getSaveScrollPosition,
    (state: StateSchema, path: string) => path,
    (scrolls, path: string) => scrolls[path] || 0
);
