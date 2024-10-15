import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

interface UiDesignSwitcherProps {
    className?: string;
}

export function UiDesignSwitcher({ className }: UiDesignSwitcherProps) {
    const { t } = useTranslation();
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const forceUpdate = useForceUpdate();

    const items = [
        {
            label: t('New design'),
            value: 'new'
        },
        {
            label: t('Old design'),
            value: 'old'
        }
    ];

    const onChange = async (value: string) => {
        if (authData != null) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlag({
                    userId: authData.id,
                    newFeatures: {
                        isAppRedesigned: value === 'new'
                    }
                })
            );
            setIsLoading(false);
            forceUpdate();
        }
    };

    return (
        <Stack direction="row" gap={8} alignItems="center">
            <Text text={t('UI design')} />
            {isLoading ? (
                <Skeleton width={158} height={32} border="32px" />
            ) : (
                <ListBox
                    className={className}
                    value={isAppRedesigned ? 'new' : 'old'}
                    items={items}
                    onChange={onChange}
                />
            )}
        </Stack>
    );
}
