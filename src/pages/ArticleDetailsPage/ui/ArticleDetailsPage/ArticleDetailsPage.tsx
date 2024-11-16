import { useParams } from 'react-router-dom';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';
import { ArticleRating } from '@/features/ArticleRating';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { articleDetailsPageReducer } from '../../model/slices';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
};

function ArticleDetailsPage({ className }: ArticleDetailsPageProps) {
    const { id } = useParams<{ id: string }>();

    if (id === undefined) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <StickyContentLayout
                content={
                    <Page className={classNames('', {}, [className])}>
                        <Stack gap={16}>
                            <DetailsContainer />
                            <ArticleRating articleId={id} />
                            <ArticleRecommendationsList />
                            <ArticleDetailsComments id={id} />
                        </Stack>
                    </Page>
                }
                right={<AdditionalInfoContainer />}
            />
        </DynamicModuleLoader>
    );
}

export default ArticleDetailsPage;
