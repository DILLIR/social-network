import { AnyAction, Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import {
    StateSchema,
    StateSchemaKey
} from 'app/providers/StoreProvider/config/StateSchema';
import {  useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    children: React.ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export function DynamicModuleLoader({
    children,
    removeAfterUnmount,
    reducers
}: DynamicModuleLoaderProps) {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]: ReducersListEntry) => {
                if (!store.reducerManager.has(name)) {
                    store.reducerManager.add(name, reducer);
                    dispatch({ type: `@@INIT ${name} reducer` });
                }
            }
        );

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    ([name]: ReducersListEntry) => {
                        store.reducerManager.remove(name);
                        dispatch({ type: `@@DESTROY ${name} reducer` });
                    }
                );
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <>{children}</>;
}
