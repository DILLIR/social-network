import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Stack } from '@/shared/ui/Stack/Stack';
import {
    getAddNewCommentError,
    getAddNewCommentText,
} from '../../model/selectors/addNewCommentSelectors';
import {
    addNewCommentActions,
    addNewCommentReducer,
} from '../../model/slices/addNewCommentSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer,
};

function AddCommentForm({ className, onSendComment }: AddCommentFormProps) {
    const { t } = useTranslation();
    const text = useSelector(getAddNewCommentText);
    const error = useSelector(getAddNewCommentError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addNewCommentActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onSendComment, text, onCommentTextChange]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <Input
                    className={cls.input}
                    placeholder={t('Enter your comment')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendHandler}>{t('Send')}</Button>
            </Stack>
        </DynamicModuleLoader>
    );
}

export default AddCommentForm;
