import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import GridIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { ArticleView } from '@/entities/Article';
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
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(({ view: viewType, icon }) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    key={viewType}
                    onClick={onClick(viewType)}
                >
                    <Icon
                        width={24}
                        height={24}
                        Svg={icon}
                        className={classNames(cls.button, {
                            [cls.selected]: viewType === viewMode
                        })}
                    />
                </Button>
            ))}
        </div>
    );
}
