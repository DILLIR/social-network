import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

function ArticleEditPage({ className }: ArticleEditPageProps) {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames('', {}, [className])}>
            <Text title={isEdit ? t('Edit article') : t('Create article')} />
        </Page>
    );
}

export default ArticleEditPage;
