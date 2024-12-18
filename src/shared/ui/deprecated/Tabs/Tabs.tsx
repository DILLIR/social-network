import { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T> {
    value: T;
    node: ReactNode;
}

interface TabsProps<T extends string | number> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (tab: TabItem<T>) => void;
}
/**
 * Outdated, use components from redesigned directory
 * @deprecated
 */
export function Tabs<T extends string | number>({
    className,
    tabs,
    value,
    onTabClick
}: TabsProps<T>) {
    const onClick = useCallback(
        (tab: TabItem<T>) => () => onTabClick(tab),
        [onTabClick]
    );

    const renderTabs = useCallback(
        (tab: TabItem<T>) => (
            <Card
                theme={
                    tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE
                }
                className={cls.tab}
                key={tab.value}
                onClick={onClick(tab)}
            >
                {tab.node}
            </Card>
        ),
        [onClick, value]
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(renderTabs)}
        </div>
    );
}
