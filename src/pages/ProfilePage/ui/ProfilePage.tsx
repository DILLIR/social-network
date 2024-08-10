import { Country } from 'entities/Country/types/country';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Currency } from '../../../entities/Currency';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Text, TextTheme } from '../../../shared/ui/Text/Text';
import { useInitialEffect } from '../../../shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';

const reducers: ReducersList = {
    profile: profileReducer
};

interface ProfilePageProps {
    className?: string;
}

export function ProfilePage({ className }: ProfilePageProps) {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const {id} = useParams<{id: string}>();

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
        if(id === undefined) return;
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
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.map((error) => (
                    <Text
                        key={error}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[error]}
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
            </div>
        </DynamicModuleLoader>
    );
}

export default ProfilePage;
