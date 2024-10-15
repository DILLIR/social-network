import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
    Button as ButtonDeprecated,
    ButtonTheme
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
    Text as TextDeprecated,
    TextTheme
} from '../../../../shared/ui/deprecated/Text/Text';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { ToggleFeatures } from '../../../../shared/lib/features';
import { Input } from '../../../../shared/ui/redesigned/Input';
import { Text } from '../../../../shared/ui/redesigned/Text';
import { Button } from '../../../../shared/ui/redesigned/Button';
import { Stack } from '../../../../shared/ui/redesigned/Stack';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialReducers: ReducersList = { loginForm: loginReducer };

const LoginForm = memo(function LoginForm({
    className,
    onSuccess
}: LoginFormProps) {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUserName(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled' && onSuccess) {
            onSuccess();
        }
    }, [dispatch, username, password, onSuccess]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isCounterEnabled"
                on={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <Stack gap={16}>
                            <Input
                                type="text"
                                placeholder={t('Enter_username')}
                                onChange={onChangeUsername}
                                value={username}
                                autofocus
                            />
                            <Input
                                type="text"
                                placeholder={t('Enter_password')}
                                value={password}
                                onChange={onChangePassword}
                            />
                        </Stack>

                        {error && (
                            <Text text={t('login_error')} variant="error" />
                        )}
                        <Button
                            className={cls.Btn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Continue')}
                        </Button>
                    </div>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <InputDeprecated
                            type="text"
                            placeholder={t('Enter_username')}
                            onChange={onChangeUsername}
                            value={username}
                            autofocus
                        />
                        <InputDeprecated
                            type="text"
                            placeholder={t('Enter_password')}
                            value={password}
                            onChange={onChangePassword}
                        />
                        {error && (
                            <TextDeprecated
                                text={t('login_error')}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <ButtonDeprecated
                            className={cls.Btn}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Continue')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;
