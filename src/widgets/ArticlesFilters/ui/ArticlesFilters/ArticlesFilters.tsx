import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { Input } from '@/shared/ui/redesigned/Input';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { OrderBy } from '@/shared/types/sort';
import { TabItem } from '@/shared/ui/deprecated/Tabs/Tabs';
import cls from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: OrderBy;
    type: ArticleType;
    search?: string;
    onChangeSearch: (value: string) => void;
    onChangeOrder: (newOrder: OrderBy) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: (type: TabItem<ArticleType>) => void;
}

// eslint-disable-next-line react/display-name
export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        onChangeType,
        onChangeSearch,
        search,
        onChangeSort,
        sort,
        onChangeOrder,
        order,
        type
    } = props;
    const { t } = useTranslation();

    return (
        <Card
            className={classNames(cls.ArticlesFilters, {}, [className])}
            size="l"
        >
            <Stack gap={32}>
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Search')}
                />
                <ArticleTypeTabs
                    value={type}
                    onChange={onChangeType}
                    className={cls.tabs}
                />
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </Stack>
        </Card>
    );
});
