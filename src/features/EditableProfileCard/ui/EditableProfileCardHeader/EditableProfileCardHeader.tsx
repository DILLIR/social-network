import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
    Button as ButtonDeprecated,
    ButtonTheme
} from '@/shared/ui/deprecated/Button';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { getCanEditProfile } from '../../model/selectors/getCanEditProfile/getCanEditProfile';
import { ToggleFeatures } from '../../../../shared/lib/features';
import { Button } from '../../../../shared/ui/redesigned/Button';
import { Text } from '../../../../shared/ui/redesigned/Text';
import { Card } from '../../../../shared/ui/redesigned/Card';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export function EditableProfileCardHeader({
    className
}: EditableProfileCardHeaderProps) {
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
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={classNames('', {}, [className])}
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card className={cls.card}>
                        <Stack
                            direction="row"
                            gap={10}
                            width="100%"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Text title={t('Profile')} />
                            {canEdit && (
                                <Stack direction="row" gap={10}>
                                    {readonly ? (
                                        <Button
                                            onClick={onEdit}
                                            data-testid="EditableProfileCardHeader.EditButton"
                                        >
                                            {t('Edit')}
                                        </Button>
                                    ) : (
                                        <>
                                            <Button
                                                color="error"
                                                onClick={onCancelEdit}
                                                data-testid="EditableProfileCardHeader.CancelButton"
                                            >
                                                {t('Cancel')}
                                            </Button>
                                            <Button
                                                color="success"
                                                onClick={onSave}
                                                data-testid="EditableProfileCardHeader.SaveButton"
                                            >
                                                {t('Save')}
                                            </Button>
                                        </>
                                    )}
                                </Stack>
                            )}
                        </Stack>
                    </Card>
                }
                off={
                    <>
                        <TextDeprecated title={t('Profile')} />
                        {canEdit && (
                            <Stack direction="row" gap={10}>
                                {readonly ? (
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onEdit}
                                        data-testid="EditableProfileCardHeader.EditButton"
                                    >
                                        {t('Edit')}
                                    </ButtonDeprecated>
                                ) : (
                                    <>
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE_RED}
                                            onClick={onCancelEdit}
                                            data-testid="EditableProfileCardHeader.CancelButton"
                                        >
                                            {t('Cancel')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            theme={ButtonTheme.OUTLINE}
                                            onClick={onSave}
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                        >
                                            {t('Save')}
                                        </ButtonDeprecated>
                                    </>
                                )}
                            </Stack>
                        )}
                    </>
                }
            />
        </Stack>
    );
}
