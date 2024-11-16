import { memo } from 'react';
import { ArticleDetailsRedesigned } from './ArticleDetailsRedesigned/ArticleDetailsRedesigned';

export interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

export const ArticleDetails = memo(function ArticleDetails(
    props: ArticleDetailsProps
) {
    return <ArticleDetailsRedesigned {...props} />;
});
