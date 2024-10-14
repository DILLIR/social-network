import { classNames } from '@/shared/lib/classNames/classNames';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import GridIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import GridIcon from '@/shared/assets/icons/tile.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import {
    Button as ButtonDeprecated,
    ButtonTheme
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ArticleView } from '@/entities/Article';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    viewMode: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => [
        {
            view: ArticleView.GRID,
            icon: GridIcon
        },
        {
            view: ArticleView.LIST,
            icon: ListIcon
        }
    ],
    off: () => [
        {
            view: ArticleView.GRID,
            icon: GridIconDeprecated
        },
        {
            view: ArticleView.LIST,
            icon: ListIconDeprecated
        }
    ]
});

export function ArticleViewSelector({
    className,
    viewMode,
    onViewClick
}: ArticleViewSelectorProps) {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    size="s"
                    border="rounded"
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},
                        [className]
                    )}
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
            }
            off={
                <div
                    className={classNames(cls.ArticleViewSelector, {}, [
                        className
                    ])}
                >
                    {viewTypes.map(({ view: viewType, icon }) => (
                        <ButtonDeprecated
                            theme={ButtonTheme.CLEAR}
                            key={viewType}
                            onClick={onClick(viewType)}
                        >
                            <IconDeprecated
                                width={24}
                                height={24}
                                Svg={icon}
                                className={classNames(cls.button, {
                                    [cls.selected]: viewType === viewMode
                                })}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
}
