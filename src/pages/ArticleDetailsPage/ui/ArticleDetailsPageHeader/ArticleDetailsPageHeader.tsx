import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Stack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export function ArticleDetailsPageHeader({
    className
}: ArticleDetailsPageHeaderProps) {
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEdit = useCallback(() => {
        navigate(getRouteArticleEdit(article?.id as string));
    }, [article?.id, navigate]);

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            className={classNames('', {}, [className])}
        >
            <Button onClick={onBackToList}>{t('Back to articles')}</Button>
            {canEdit && <Button onClick={onEdit}>{t('Edit')}</Button>}
        </Stack>
    );
}
