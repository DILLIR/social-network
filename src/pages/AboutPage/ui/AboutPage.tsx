import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';

function AboutPage() {
    const { t } = useTranslation('about');

    return (
        <Page dataTestId="AboutPage">
            <Text title={t('ABOUT PAGE')} />
        </Page>
    );
}

export default AboutPage;
