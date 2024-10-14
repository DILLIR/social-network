import { memo } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
    className?: string;
}

// eslint-disable-next-line react/display-name
export const ViewSelectorContainer = memo(
    (props: ViewSelectorContainerProps) => {
        const { className } = props;
        const { viewMode, onChangeView } = useArticleFilters();

        return (
            <ArticleViewSelector
                className={className}
                viewMode={viewMode}
                onViewClick={onChangeView}
            />
        );
    }
);
