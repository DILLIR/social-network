import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page/Page';
import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string;
}

export function ForbiddenPage({ className }: ForbiddenPageProps) {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.ForbiddenPage, {}, [className])}>
            <Text
                title={t('ForbiddenPage')}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
            />
        </Page>
    );
}
