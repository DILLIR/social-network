import { Country } from 'entities/Country/types/country';
import { Currency } from 'entities/Currency/types/currency';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/ui/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
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
            <div
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
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
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !disabled,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar != null && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                )}
                <Input
                    placeholder={t('First name')}
                    value={data?.firstName}
                    disabled={disabled}
                    className={cls.Input}
                    onChange={onChangeFirstName}
                />
                <Input
                    placeholder={t('Last name')}
                    value={data?.lastName}
                    disabled={disabled}
                    className={cls.Input}
                    onChange={onChangeLastName}
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
            </div>
        </div>
    );
}
