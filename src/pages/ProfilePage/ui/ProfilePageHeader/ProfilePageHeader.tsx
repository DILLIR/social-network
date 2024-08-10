import {
    getProfileReadonly,
    profileActions,
    updateProfileData
} from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { getCanEditProfile } from '../../model/selectors/profile';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export function ProfilePageHeader({ className }: ProfilePageHeaderProps) {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const canEdit = useSelector(getCanEditProfile);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <div className={cls.btnWrapper}>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            className={cls.editBtn}
                            onClick={onEdit}
                        >
                            {t('Edit')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                className={cls.editBtn}
                                onClick={onCancelEdit}
                            >
                                {t('Cancel')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={cls.saveBtn}
                                onClick={onSave}
                            >
                                {t('Save')}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
