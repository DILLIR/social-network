import { ReducersMapObject } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    children?: React.ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export function StoreProvider({
    children,
    initialState,
    asyncReducers
}: StoreProviderProps) {

    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate
    );

    return <Provider store={store}>{children}</Provider>;
}
