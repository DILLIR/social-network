import { useTranslation } from 'react-i18next';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Stack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { CountrySelect } from '../../../Country';
import { CurrencySelect } from '../../../Currency';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    onChangeLastName?: (value: string) => void;
    onChangeFirstName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
    disabled?: boolean;
}

export function ProfileCard({
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
    disabled = false,
}: ProfileCardProps) {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
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
                    cls.error,
                ])}
            >
                <Text
                    title="Something went wrong while loading profile"
                    text="Try to refresh page later"
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </Stack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !disabled,
    };

    return (
        <Stack
            gap={8}
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar != null && (
                <Stack alignItems="center">
                    <Avatar src={data.avatar} />
                </Stack>
            )}
            <Input
                placeholder={t('First name')}
                value={data?.firstName}
                disabled={disabled}
                className={cls.Input}
                onChange={onChangeFirstName}
                data-testid="ProfileCard.FirstName"
            />
            <Input
                placeholder={t('Last name')}
                value={data?.lastName}
                disabled={disabled}
                className={cls.Input}
                onChange={onChangeLastName}
                data-testid="ProfileCard.LastName"
            />
            <Input
                placeholder={t('Age')}
                value={data?.age}
                disabled={disabled}
                className={cls.Input}
                onChange={onChangeAge}
            />
            <Input
                placeholder={t('City')}
                value={data?.city}
                disabled={disabled}
                className={cls.Input}
                onChange={onChangeCity}
            />
            <Input
                placeholder={t('Username')}
                value={data?.username}
                disabled={disabled}
                className={cls.Input}
                onChange={onChangeUsername}
            />
            <Input
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
