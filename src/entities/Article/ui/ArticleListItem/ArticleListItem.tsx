import { useTranslation } from 'react-i18next';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import { useHover } from '../../../../shared/lib/hooks/useHover';
import { Avatar } from '../../../../shared/ui/Avatar/Avatar';
import { Button } from '../../../../shared/ui/Button/Button';
import { Card } from '../../../../shared/ui/Card/Card';
import {
    Article,
    ArticleBlockType,
    ArticleTextBLock,
    ArticleView
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { RoutePath } from '../../../../shared/config/routeConfig/routeConfig';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export function ArticleListItem({
    className,
    article,
    view
}: ArticleListItemProps) {
    const [isHover, bindHover] = useHover();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    const domains = (
        <Text className={cls.types} text={article.type.join(',')} />
    );

    const views = (
        <>
            <Text text={article.views.toString()} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view == ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBLock;

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view]
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text text={article.title} className={cls.title} />
                    {domains}
                    <img
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
                            {t('Read more')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            {...bindHover}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view]
            ])}
        >
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    <Text className={cls.date} text={article.createdAt} />
                </div>
                <div className={cls.infoWrapper}>
                    {domains}
                    {views}
                </div>
                <Text text={article.title} />
            </Card>
        </div>
    );
}