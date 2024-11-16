import { classNames } from '@/shared/lib/classNames/classNames';
import GridIcon from '@/shared/assets/icons/tile.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';


import { ArticleView } from '@/entities/Article';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    viewMode: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: GridIcon
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon
    }
];

export function ArticleViewSelector({
    className,
    viewMode,
    onViewClick
}: ArticleViewSelectorProps) {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <Card
            size="s"
            border="rounded"
            className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
                className
            ])}
        >
            {viewTypes.map(({ view: viewType, icon }) => (
                <Icon
                    key={viewType}
                    onClick={onClick(viewType)}
                    Svg={icon}
                    clickable
                    className={classNames(cls.button, {
                        [cls.notSelected]: viewType !== viewMode
                    })}
                />
            ))}
        </Card>
    );
}
