import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Stack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { useArticleRecommendationList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export function ArticleRecommendationsList({
    className,
}: ArticleRecommendationsListProps) {
    const { t } = useTranslation('article-details');
    const { data: articles, isLoading, error } = useArticleRecommendationList(5);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <Stack gap={8} className={classNames('', {}, [className])}>
            <Text size={TextSize.L} title={t('Recommendations')} />
            <ArticleList target="_blank" articles={articles} />
        </Stack>
    );
}
