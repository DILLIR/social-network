import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { useArticleRecommendationList } from '../../api/articleRecommendationsApi';
import { ToggleFeatures } from '../../../../shared/lib/features';

interface ArticleRecommendationsListProps {
    className?: string;
}

export function ArticleRecommendationsList({
    className
}: ArticleRecommendationsListProps) {
    const { t } = useTranslation('article-details');
    const {
        data: articles,
        isLoading,
        error
    } = useArticleRecommendationList(5);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <Stack
            gap={8}
            data-testid="ArticleRecommendationsList"
            className={classNames('', {}, [className])}
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Text size="l" title={t('Recommendations')} />}
                off={
                    <TextDeprecated
                        size={TextSize.L}
                        title={t('Recommendations')}
                    />
                }
            />
            <ArticleList target="_blank" articles={articles} />
        </Stack>
    );
}
