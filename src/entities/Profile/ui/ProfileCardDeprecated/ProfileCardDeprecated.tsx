import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import {
    Text as TextDeprecated,
    TextAlign,
    TextTheme
} from '@/shared/ui/deprecated/Text';
import { CountrySelect } from '../../../Country';
import { CurrencySelect } from '../../../Currency';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import cls from './ProfileCardDeprecated.module.scss';

export function ProfileCardDeprecated({
    className,
    data,
    isLoading,
    error,
    onChangeLastName,
    onChangeFirstName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
    disabled = false
}: ProfileCardProps) {
    const { t } = useTranslation();
    const mods: Mods = {
        [cls.editing]: !disabled
    };

    if (isLoading) {
        return (
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading
                ])}
            >
                <LoaderDeprecated />
            </Stack>
        );
    }

    if (error) {
        return (
            <Stack
                direction="row"
                justifyContent="center"
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error
                ])}
            >
                <TextDeprecated
                    title="Something went wrong while loading profile"
                    text="Try to refresh page later"
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </Stack>
        );
    }

    return (
        <Stack
            gap={8}
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar != null && (
                <Stack alignItems="center">
                    <AvatarDeprecated src={data.avatar} />
                </Stack>
            )}
            <InputDeprecated
                placeholder={t('First name')}
                value={data?.firstName}
                disabled={disabled}
                className={cls.Input}
                onChange={onChangeFirstName}
                data-testid="ProfileCard.FirstName"
            />
            <InputDeprecated
                placeholder={t('Last name')}
                value={data?.lastName}
                disabled={disabled}
                className={cls.Input}
                onChange={onChangeLastName}
                data-testid="ProfileCard.LastName"
            />
            <InputDeprecated
                placeholder={t('Age')}
                value={data?.age}
                disabled={disabled}
                className={cls.Input}
                onChange={onChangeAge}
            />
            <InputDeprecated
                placeholder={t('City')}
                value={data?.city}
                disabled={disabled}
                className={cls.Input}
                onChange={onChangeCity}
            />
            <InputDeprecated
                placeholder={t('Username')}
                value={data?.username}
                disabled={disabled}
                className={cls.Input}
                onChange={onChangeUsername}
            />
            <InputDeprecated
                placeholder={t('Avatar')}
                value={data?.avatar}
                disabled={disabled}
                className={cls.Input}
                onChange={onChangeAvatar}
            />
            <CurrencySelect
                value={data?.currency}
                className={cls.Input}
                onChange={onChangeCurrency}
                disabled={disabled}
            />
            <CountrySelect
                disabled={disabled}
                value={data?.country}
                onChange={onChangeCountry}
                className={cls.Input}
            />
        </Stack>
    );
}
