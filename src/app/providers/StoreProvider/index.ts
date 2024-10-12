export type { AppDispatch } from '@/app/providers/StoreProvider/config/store';
export type {
    StateSchema, ReduxStoreWithManager, ThunkConfig, StateSchemaKey
} from './config/StateSchema';
export { createReduxStore } from './config/store';
export { StoreProvider } from './ui/StoreProvider';
