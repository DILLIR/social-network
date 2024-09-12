import { useSelector } from "react-redux";
import { ArticleList } from "../../../../entities/Article";
import { Text, TextTheme } from "../../../../shared/ui/Text/Text";
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from "../../model/selectors/articlesPageSelectors";
import { getArticles } from "../../model/slices/articlesPageSlice";

interface ArticlesInfiniteListProps {
    className?: string;
}

export function ArticlesInfiniteList({ className }: ArticlesInfiniteListProps) {
    const articles = useSelector(getArticles.selectAll);
    const viewMode = useSelector(getArticlesPageView);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);


    if(error) {
        return <Text title={error} theme={TextTheme.ERROR}/>
    }

    return (
        <ArticleList
            className={className}
            viewMode={viewMode}
            articles={articles}
            isLoading={isLoading}
        />
    );
}
