import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Button } from '../../../../shared/ui/Button/Button';
import { Input } from '../../../../shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';
import { useEffect } from 'react';

interface ProfileCardProps {
    className?: string;
}

export function ProfileCard({ className }: ProfileCardProps) {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>{t('Edit')}</Button>
            </div>
            <div className={cls.data}>
                <Input
                    title={t('First name')}
                    value={data?.firstName}
                    disabled
                    className={cls.Input}
                />
                <Input
                    title={t('Last name')}
                    value={data?.lastName}
                    disabled
                    className={cls.Input}
                />
            </div>
        </div>
    );
}
