import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Stack } from 'shared/ui/Stack/Stack';
import { Page } from 'widgets/Page/Page';
import { EditableProfileCard } from '../../../features/EditableProfileCard';
import { Text, TextTheme } from '../../../shared/ui/Text/Text';

interface ProfilePageProps {
    className?: string;
}

export function ProfilePage({ className }: ProfilePageProps) {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');

    if (!id) {
        return <Text theme={TextTheme.ERROR} title={t("Can't find profile")}/>;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <Stack gap={16}>
                <EditableProfileCard id={id}/>
            </Stack>
        </Page>
    );
}

export default ProfilePage;
