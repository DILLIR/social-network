import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import {
    DynamicModuleLoader,
    ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Stack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';
import { ProfileCard } from '@/entities/Profile';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    profile: profileReducer
};

export function EditableProfileCard({
    className,
    id
}: EditableProfileCardProps) {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates: Record<ValidateProfileError, string> = {
        [ValidateProfileError.FirstAndLastNameRequired]: t(
            'FirstAndLastNameRequired'
        ),
        [ValidateProfileError.AgeRequired]: t('AgeRequired'),
        [ValidateProfileError.AgeInvalid]: t('AgeInvalid'),
        [ValidateProfileError.CountryRequired]: t('CountryRequired'),
        [ValidateProfileError.NoData]: t('NoData'),
        [ValidateProfileError.ServerError]: t('ServerError')
    };

    useInitialEffect(() => {
        if (id === undefined) return;
        dispatch(fetchProfileData(id));
    });

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ firstName: value ?? '' }));
        },
        [dispatch]
    );

    const onChangeLastName = useCallback(
        (value: string) => {
            dispatch(profileActions.updateProfile({ lastName: value ?? '' }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            if (Number.isNaN(Number(value))) return;
            dispatch(profileActions.updateProfile({ age: Number(value ?? 0) }));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value ?? '' }));
        },
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value ?? '' }));
        },
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value ?? '' }));
        },
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch]
    );
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Stack gap={16} className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {validateErrors?.map((error) => (
                    <Text
                        key={error}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[error]}
                        data-testid="EditableProfileCard.Error"
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    disabled={readonly}
                />
            </Stack>
        </DynamicModuleLoader>
    );
}
