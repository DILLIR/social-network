import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { OrderBy } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: OrderBy;
    onChangeSort: (sort: ArticleSortField) => void;
    onChangeOrder: (order: OrderBy) => void;
}

export function ArticleSortSelector({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort
}: ArticleSortSelectorProps) {
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<OrderBy>[]>(
        () => [
            {
                value: 'asc' as OrderBy,
                label: t('Ascending')
            },
            {
                value: 'desc' as OrderBy,
                label: t('Descending')
            }
        ],
        [t]
    );

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                label: t('Created')
            },
            {
                value: ArticleSortField.TITLE,
                label: t('Title')
            },
            {
                value: ArticleSortField.VIEWS,
                label: t('Views')
            }
        ],
        [t]
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div
                    className={classNames(cls.ArticleSortSelector, {}, [
                        className
                    ])}
                >
                    <Stack gap={8}>
                        <Text text={t('Sort by')} />
                        <ListBox
                            items={sortFieldOptions}
                            value={sort}
                            onChange={onChangeSort}
                        />
                        <ListBox
                            items={orderOptions}
                            value={order}
                            onChange={onChangeOrder}
                        />
                    </Stack>
                </div>
            }
            off={
                <div
                    className={classNames(cls.ArticleSortSelector, {}, [
                        className
                    ])}
                >
                    <Select
                        label={t('Sort by')}
                        options={sortFieldOptions}
                        value={sort}
                        onChange={onChangeSort}
                    />
                    <Select
                        label={t('Direction')}
                        options={orderOptions}
                        value={order}
                        onChange={onChangeOrder}
                    />
                </div>
            }
        />
    );
}
