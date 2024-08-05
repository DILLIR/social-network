import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { ReducersList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../../../entities/Article/model/slice/articleDetailsSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer
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
