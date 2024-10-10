import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import GridIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    viewMode: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: GridIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

export function ArticleViewSelector({
    className,
    viewMode,
    onViewClick,
}: ArticleViewSelectorProps) {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(({ view: viewType, icon }) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    key={viewType}
                    onClick={onClick(viewType)}
                >
                    <Icon
                        Svg={icon}
                        className={classNames(cls.button, {
                            [cls.selected]: viewType === viewMode,
                        })}
                    />
                </Button>
            ))}
        </div>
    );
}
