import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?:NavigateOptions) => void
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    };

    const reducerManager = createReducerManager(rootReducer);

    const defaultStore = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        }),
    });

    const store = { reducerManager, ...defaultStore };

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];