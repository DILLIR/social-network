import { ErrorButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Stack } from 'shared/ui/Stack/Stack';
import { Page } from 'widgets/Page/Page';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <Page>
            <h1 style={{ marginBottom: '10px' }}>{t('MAIN PAGE')}</h1>
            <Stack width="fit-content" gap={10}>
                <ErrorButton />
            </Stack>
        </Page>
    );
}

export default MainPage;
