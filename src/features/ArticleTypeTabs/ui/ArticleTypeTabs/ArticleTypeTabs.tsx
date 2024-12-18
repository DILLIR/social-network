import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleType } from '@/entities/Article';
import { TabItem, Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChange: (tab: TabItem<ArticleType>) => void;
}

export function ArticleTypeTabs({
    className,
    value,
    onChange
}: ArticleTypeTabsProps) {
    const { t } = useTranslation();
    const typeTabs = useMemo<TabItem<ArticleType>[]>(
        () => [
            { value: ArticleType.ALL, node: t('ALL') },
            { value: ArticleType.IT, node: t('IT') },
            { value: ArticleType.SCIENCE, node: t('Science') },
            { value: ArticleType.ECONOMICS, node: t('Economics') }
        ],
        [t]
    );

    return (
        <Tabs
            direction="column"
            tabs={typeTabs}
            value={value}
            onTabClick={onChange}
            className={classNames('', {}, [className])}
        />
    );
}
