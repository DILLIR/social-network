import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

function AboutPage() {
    const { t } = useTranslation('about');

    return (
        <Page>
            <h1>{t('ABOUT PAGE')}</h1>
        </Page>
    );
}

export default AboutPage;
