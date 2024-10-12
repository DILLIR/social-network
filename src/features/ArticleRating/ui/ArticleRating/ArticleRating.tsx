import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/ArticleRatingApi';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

function ArticleRating({ className, articleId }: ArticleRatingProps) {
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback(
        (rate: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    userId: userData?.id ?? '',
                    articleId,
                    rate,
                    feedback,
                });
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
        },
        [articleId, rateArticleMutation, userData?.id],
    );

    const onCancel = useCallback(
        (rate: number) => {
            handleRateArticle(rate);
        },
        [handleRateArticle],
    );

    const onSubmit = useCallback(
        (rate: number, feedback?: string) => {
            handleRateArticle(rate, feedback);
        },
        [handleRateArticle],
    );

    if (isLoading) {
        return <Skeleton height={200} width="100%" />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onCancel={onCancel}
            onSubmit={onSubmit}
            rate={rating?.rate}
            className={className}
            title={t('Rate an article')}
            feedbackTitle={t(
                'Leave your feedback about article it will help us to improve',
            )}
            hasFeedback
        />
    );
}

export default ArticleRating;
