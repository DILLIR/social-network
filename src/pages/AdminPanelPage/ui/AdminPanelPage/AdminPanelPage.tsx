import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';

interface AdminPanelPageProps {
    className?: string;
}

function AdminPanelPage({ className }: AdminPanelPageProps) {
    const { t } = useTranslation();
    return (
        <Page
            dataTestId="AdminPanelPage"
            className={classNames('', {}, [className])}
        >
            <Text title={t('Admin panel')} />
        </Page>
    );
}

export default AdminPanelPage;
