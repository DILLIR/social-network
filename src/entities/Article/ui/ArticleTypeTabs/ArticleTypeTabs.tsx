import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChange: (tab: TabItem<ArticleType>) => void;
}

export function ArticleTypeTabs({ className, value, onChange }: ArticleTypeTabsProps) {
    const { t } = useTranslation();
    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => {
        return [
            { value: ArticleType.ALL, node: t('ALL') },
            { value: ArticleType.IT, node: t('IT') },
            { value: ArticleType.SCIENCE, node: t('Science') },
            { value: ArticleType.ECONOMICS, node: t('Economics') }
        ];
    }, [t]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onChange}
            className={classNames('', {}, [className])}
        />
    );
}
