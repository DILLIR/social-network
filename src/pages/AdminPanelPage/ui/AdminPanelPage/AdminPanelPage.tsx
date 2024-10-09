import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';

interface AdminPanelPageProps {
    className?: string;
}

function AdminPanelPage({ className }: AdminPanelPageProps) {
    const { t } = useTranslation();
    return (
        <Page className={classNames('', {}, [className])}>
            {t('Admin panel')}
        </Page>
    );
}

export default AdminPanelPage;
