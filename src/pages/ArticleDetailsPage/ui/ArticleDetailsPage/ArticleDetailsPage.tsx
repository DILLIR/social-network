import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Stack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { ArticleRating } from '@/features/ArticleRating';
import { getFeatureFlag } from '@/shared/lib/features';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slices';
import { Counter } from '../../../../entities/Counter';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
};

function ArticleDetailsPage({ className }: ArticleDetailsPageProps) {
    const { id } = useParams<{ id: string }>();
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');
    const isCounterEnabled = getFeatureFlag('isCounterEnabled');

    if (id === undefined) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <Stack gap={16}>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    {isCounterEnabled && <Counter />}
                    {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </Stack>
            </Page>
        </DynamicModuleLoader>
    );
}

export default ArticleDetailsPage;
