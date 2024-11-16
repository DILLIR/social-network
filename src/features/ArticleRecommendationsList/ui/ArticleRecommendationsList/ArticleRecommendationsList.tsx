import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { useArticleRecommendationList } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export function ArticleRecommendationsList({
    className
}: ArticleRecommendationsListProps) {
    const { t } = useTranslation();
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
            className={classNames(cls.wrapper, {}, [className])}
        >
            <Text size="l" title={t('Recommendations')} />
            <ArticleList target="_blank" articles={articles} />
        </Stack>
    );
}
