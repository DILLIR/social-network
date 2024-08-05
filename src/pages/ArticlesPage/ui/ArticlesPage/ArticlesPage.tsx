import { classNames } from 'shared/lib/classNames/classNames';

interface ArticlesPageProps {
    className?: string;
}

function ArticlesPage({ className }: ArticlesPageProps) {
    return (
        <div className={classNames("", {}, [className])}>
            ARTICLES PAGE
        </div>
    );
}

export default ArticlesPage;