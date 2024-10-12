import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';
import { Stack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <Page>
            <h1 style={{ marginBottom: '10px' }}>{t('MAIN PAGE')}</h1>
            <Stack width="fit-content" gap={10}>
                <Counter />
                <RatingCard
                    title="Rate an article"
                    feedbackTitle="Leave your feedback about article"
                    hasFeedback
                />
            </Stack>
        </Page>
    );
}

export default MainPage;
