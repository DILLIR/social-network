import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Stack } from '@/shared/ui/Stack/Stack';
import { Page } from '@/widgets/Page/Page';
import { EditableProfileCard } from '../../../features/EditableProfileCard';

interface ProfilePageProps {
    className?: string;
}

export function ProfilePage({ className }: ProfilePageProps) {
    const { id } = useParams<{ id: string }>();

    return (
        <Page className={classNames('', {}, [className])}>
            <Stack gap={16}>
                <EditableProfileCard id={id}/>
            </Stack>
        </Page>
    );
}

export default ProfilePage;
