import { ErrorButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <Page>
            <h1 style={{ marginBottom: '10px' }}>{t('MAIN PAGE')}</h1>
            <ErrorButton />
        </Page>
    );
}

export default MainPage;
