import { classNames } from 'shared/lib/classNames/classNames';
import {
    Article,
    ArticleList,
    ArticleView
} from '../../../../entities/Article';

interface ArticlesPageProps {
    className?: string;
}

function ArticlesPage({ className }: ArticlesPageProps) {
    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                isLoading={true}
                viewMode={ArticleView.LIST}
                articles={[]}
            />
        </div>
    );
}

export default ArticlesPage;
