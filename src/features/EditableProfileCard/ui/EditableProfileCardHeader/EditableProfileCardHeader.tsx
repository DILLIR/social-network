import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { getCanEditProfile } from '../../model/selectors/getCanEditProfile/getCanEditProfile';

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
            <Text title={t('Profile')} />
            {canEdit && (
                <Stack direction="row" gap={10}>
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                            data-testid="EditableProfileCardHeader.EditButton"
                        >
                            {t('Edit')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                                data-testid="EditableProfileCardHeader.CancelButton"
                            >
                                {t('Cancel')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
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
    );
}
