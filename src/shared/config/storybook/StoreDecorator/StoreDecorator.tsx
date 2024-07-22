import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { ReducersList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer
};

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: ReducersList
    ) =>
    // eslint-disable-next-line react/display-name
        (Story: StoryFn) => (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
