import { memo } from 'react';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { MainLayout } from '../MainLayout';
import cls from './AppLoaderLayout.module.scss';

// eslint-disable-next-line react/display-name
export const AppLoaderLayout = memo(() => (
    <MainLayout
        header={
            <Stack direction="row" className={cls.header}>
                <Skeleton width={40} height={40} border="50%" />
            </Stack>
        }
        content={
            <Stack gap={16} style={{ height: '100%' }}>
                <Skeleton width="70%" height={32} border="16px" />
                <Skeleton width="40%" height={20} border="16px" />
                <Skeleton width="50%" height={20} border="16px" />
                <Skeleton width="30%" height={32} border="16px" />
                <Skeleton width="80%" height="40%" border="16px" />
                <Skeleton width="80%" height="40%" border="16px" />
            </Stack>
        }
        sidebar={<Skeleton border="32px" width={220} height="100%" />}
    />
));
