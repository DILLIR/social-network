import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <Page dataTestId="MainPage">
            <Text title={t('MAIN PAGE')} />
        </Page>
    );
}

export default MainPage;
