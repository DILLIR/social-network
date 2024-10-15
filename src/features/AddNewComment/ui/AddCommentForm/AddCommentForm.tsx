import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import {
    addNewCommentActions,
    addNewCommentReducer
} from '../../model/slices/addNewCommentSlice';
import { getAddNewCommentText } from '../../model/selectors/addNewCommentSelectors';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addNewComment: addNewCommentReducer
};

function AddCommentForm({ className, onSendComment }: AddCommentFormProps) {
    const { t } = useTranslation();
    const text = useSelector(getAddNewCommentText);
    // const error = useSelector(getAddNewCommentError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addNewCommentActions.setText(value));
        },
        [dispatch]
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onSendComment, text, onCommentTextChange]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            data-testid="AddCommentForm"
                            gap={16}
                        >
                            <Input
                                className={cls.input}
                                placeholder={t('Enter your comment')}
                                value={text}
                                onChange={onCommentTextChange}
                                data-testid="AddCommentForm.Input"
                            />
                            <Button
                                onClick={onSendHandler}
                                data-testid="AddCommentForm.Button"
                            >
                                {t('Send')}
                            </Button>
                        </Stack>
                    </Card>
                }
                off={
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        data-testid="AddCommentForm"
                        className={classNames(cls.AddCommentForm, {}, [
                            className
                        ])}
                    >
                        <InputDeprecated
                            className={cls.input}
                            placeholder={t('Enter your comment')}
                            value={text}
                            onChange={onCommentTextChange}
                            data-testid="AddCommentForm.Input"
                        />
                        <ButtonDeprecated
                            onClick={onSendHandler}
                            data-testid="AddCommentForm.Button"
                        >
                            {t('Send')}
                        </ButtonDeprecated>
                    </Stack>
                }
            />
        </DynamicModuleLoader>
    );
}

export default AddCommentForm;
