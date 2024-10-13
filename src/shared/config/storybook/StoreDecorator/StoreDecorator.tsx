import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addNewCommentReducer } from '@/features/AddNewComment/testing';
import { loginReducer } from '@/features/AuthByUserName/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { ReducersList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addNewComment: addNewCommentReducer,
    articleDetailsPage: articleDetailsPageReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) =>
    function StoryFunction(Story: StoryFn) {
        return (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
    };
