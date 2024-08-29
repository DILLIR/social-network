import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { addNewCommentReducer } from 'features/AddNewComment/model/slices/addNewCommentSlice';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { ReducersList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices/index';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addNewComment: addNewCommentReducer,
    articleDetailsPage: articleDetailsPageReducer
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    // eslint-disable-next-line react/display-name
        (Story: StoryFn) => (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
