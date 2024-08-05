import { ArticleDetails } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';

interface ArticleDetailsPageProps {
    className?: string;
}

function ArticleDetailsPage({ className }: ArticleDetailsPageProps) {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    if(id === undefined){
        return (
            <div className={classNames("", {}, [className])}>
                {t('Article not found')}
            </div>
        );
    }

    return (
        <div className={classNames("", {}, [className])}>
            <ArticleDetails id={id}/>
        </div>
    );
}

export default ArticleDetailsPage;
