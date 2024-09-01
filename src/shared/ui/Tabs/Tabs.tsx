import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, useCallback } from 'react';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

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

export function Tabs<T extends string | number>({
    className, tabs, value, onTabClick,
}: TabsProps<T>) {
    const onClick = useCallback(
        (tab: TabItem<T>) => () => onTabClick(tab),
        [onTabClick],
    );

    const renderTabs = useCallback(
        (tab: TabItem<T>) => (
            <Card
                theme={
                    tab.value === value
                        ? CardTheme.NORMAL
                        : CardTheme.OUTLINE
                }
                className={cls.tab}
                key={tab.value}
                onClick={onClick(tab)}
            >
                {tab.node}
            </Card>
        ),
        [onClick, value],
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(renderTabs)}
        </div>
    );
}
