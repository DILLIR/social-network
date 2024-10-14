import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { CountrySelect } from '../../../Country';
import { CurrencySelect } from '../../../Currency';
import cls from './ProfileCardRedesigned.module.scss';

export const ProfileCardRedesignedError = () => {
    const { t } = useTranslation();

    return (
        <Stack justifyContent="center" width="100%" direction="row">
            <Text
                variant="error"
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align="center"
            />
        </Stack>
    );
};

export const ProfileCardRedesignedSkeleton = () => (
    <Card>
        <Stack gap={32}>
            <Stack justifyContent="center" width="100%" direction="row">
                <Skeleton border="100%" width={128} height={128} />
            </Stack>
            <Stack gap={32} width="100%" direction="row">
                <Stack gap={16} width="100%">
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                </Stack>

                <Stack gap={16} width="100%">
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                </Stack>
            </Stack>
        </Stack>
    </Card>
);

export function ProfileCardRedesigned({
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

    if (isLoading) {
        return <ProfileCardRedesignedSkeleton />;
    }

    if (error) {
        return <ProfileCardRedesignedError />;
    }

    return (
        <Card
            className={classNames(cls.ProfileCardRedesigned, {}, [className])}
        >
            {data?.avatar != null && (
                <Stack alignItems="center">
                    <Avatar src={data.avatar} size={128} />
                </Stack>
            )}
            <Stack direction="row" gap={24} width="100%">
                <Stack gap={16} width="100%">
                    <Input
                        label={t('First name')}
                        value={data?.firstName}
                        disabled={disabled}
                        className={cls.Input}
                        onChange={onChangeFirstName}
                        data-testid="ProfileCard.FirstName"
                    />
                    <Input
                        label={t('Last name')}
                        value={data?.lastName}
                        disabled={disabled}
                        className={cls.Input}
                        onChange={onChangeLastName}
                        data-testid="ProfileCard.LastName"
                    />
                    <Input
                        label={t('Age')}
                        value={data?.age}
                        disabled={disabled}
                        className={cls.Input}
                        onChange={onChangeAge}
                    />
                    <Input
                        label={t('City')}
                        value={data?.city}
                        disabled={disabled}
                        className={cls.Input}
                        onChange={onChangeCity}
                    />
                </Stack>
                <Stack gap={16} width="100%">
                    <Input
                        label={t('Username')}
                        value={data?.username}
                        disabled={disabled}
                        className={cls.Input}
                        onChange={onChangeUsername}
                    />
                    <Input
                        label={t('Avatar')}
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
            </Stack>
        </Card>
    );
}
