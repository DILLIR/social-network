import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '../../../../shared/ui/deprecated/Card/Card';
import { Card as CardRedesigned } from '../../../../shared/ui/redesigned/Card/Card';
import { Skeleton as SkeletonDeprecated } from '../../../../shared/ui/deprecated/Skeleton/Skeleton';
import { Skeleton as SkeletonRedesigned } from '../../../../shared/ui/redesigned/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import { toggleFeatures } from '../../../../shared/lib/features';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export function ArticleListItemSkeleton({
    className,
    view
}: ArticleListItemSkeletonProps) {
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated
    });

    const Card = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => CardRedesigned,
        off: () => CardDeprecated
    });

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.ArticleListItemRedesigned,
        off: () => cls.ArticleListItem
    });

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(mainClass, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton height={30} width={30} border="50%" />
                        <Skeleton
                            height={16}
                            width={150}
                            className={cls.username}
                        />
                        <Skeleton
                            height={16}
                            width={150}
                            className={cls.date}
                        />
                    </div>
                    <Skeleton height={24} width={250} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} className={cls.img} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
            <Card className={cls.card} style={{ height: '340px' }}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
}
