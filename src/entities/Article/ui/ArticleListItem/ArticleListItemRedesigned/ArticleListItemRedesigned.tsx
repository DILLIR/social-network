import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { getRouteArticleDetails } from '@/shared/const/router';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Button } from '@/shared/ui/redesigned/Button';
import { ArticleListItemProps } from '../ArticleListItem';
import {
    ArticleBlockType,
    ArticleTextBLock,
    ArticleView
} from '../../../model/types/article';
import cls from './ArticleListItemRedesigned.module.scss';

export function ArticleListItemRedesigned({
    className,
    article,
    view,
    target
}: ArticleListItemProps) {
    const { t } = useTranslation();

    const userInfo = (
        <Stack direction="row" gap={8} alignItems="center">
            <Avatar size={32} src={article.user?.avatar} />
            <Text weight="bold" text={article.user?.username} />
        </Stack>
    );

    const views = (
        <Stack direction="row" gap={8} alignItems="center">
            <Icon Svg={EyeIcon} />
            <Text text={article.views.toString()} className={cls.views} />
        </Stack>
    );

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBLock;

        return (
            <Card
                data-testid="ArticleListItem"
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view]
                ])}
            >
                <Stack gap={16}>
                    <Stack direction="row" gap={8} alignItems="center">
                        <Avatar size={32} src={article.user.avatar} />
                        <Text weight="bold" text={article.user.username} />
                        <Text text={article.createdAt} />
                    </Stack>
                    <Stack gap={16}>
                        <Text title={article.title} weight="bold" size="l" />
                        <Text text={article.subtitle} size="l" />
                    </Stack>
                    <AppImage
                        fallback={
                            <Skeleton
                                className={cls.img}
                                width="100%"
                                height="250px"
                            />
                        }
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    {textBlock?.paragraphs && (
                        <Text
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                            className={cls.textBlock}
                        />
                    )}
                    <Stack direction="row" justifyContent="space-between">
                        <AppLink to={getRouteArticleDetails(article.id)}>
                            <Button variant="outline">{t('Read more')}</Button>
                        </AppLink>

                        {views}
                    </Stack>
                </Stack>
            </Card>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view]
            ])}
        >
            <Card className={cls.card} size="none">
                <AppImage
                    fallback={<Skeleton width="100%" height={200} />}
                    alt={article.title}
                    src={article.img}
                    className={cls.img}
                />
                <Stack className={cls.info} gap={4}>
                    <Text title={article.title} className={cls.title} />
                    <Stack gap={4} className={cls.footer} width="100%">
                        <Stack
                            justifyContent="space-between"
                            alignItems="center"
                            width="100%"
                            direction="row"
                        >
                            <Text
                                text={article.createdAt}
                                className={cls.date}
                            />
                            {views}
                        </Stack>
                        <Stack gap={4} direction="row">
                            {userInfo}
                        </Stack>
                    </Stack>
                </Stack>
            </Card>
        </AppLink>
    );
}
