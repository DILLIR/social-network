import { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text';
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
    direction?: 'column' | 'row';
}

export function Tabs<T extends string | number>({
    className,
    tabs,
    value,
    onTabClick,
    direction = 'row'
}: TabsProps<T>) {
    const onClick = useCallback(
        (tab: TabItem<T>) => () => onTabClick(tab),
        [onTabClick]
    );

    const renderTabs = useCallback(
        (tab: TabItem<T>) => (
            <Card
                variant={tab.value === value ? 'light' : 'normal'}
                className={cls.tab}
                key={tab.value}
                onClick={onClick(tab)}
                border="rounded"
                size="none"
            >
                <Text text={tab.node} size="s" />
            </Card>
        ),
        [onClick, value]
    );

    return (
        <Stack
            direction={direction}
            className={classNames(cls.Tabs, {}, [className])}
        >
            {tabs.map(renderTabs)}
        </Stack>
    );
}
