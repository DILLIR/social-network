import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ArticleEditPageProps {
    className?: string;
}

function ArticleEditPage({ className }: ArticleEditPageProps) {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            <Text title={isEdit ? t('Edit article') : t('Create article')} />
        </Page>
    );
}

export default ArticleEditPage;
