import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../../model/selectors/ArticleDetails';
import { fetchArticleById } from '../../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../../model/slice/articleDetailsSlice';
import { ArticleBlock, ArticleBlockType } from '../../../model/types/article';
import { ArticleCodeBlockComponent } from '../../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleDetailsProps } from '../ArticleDetails';
import cls from '../ArticleDetails.module.scss';
import { AppImage } from '../../../../../shared/ui/redesigned/AppImage';

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
};

export const ArticleDetailsRedesigned = memo(function ArticleDetails({
    className,
    id
}: ArticleDetailsProps) {
    const { t } = useTranslation('articleDetails');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            default:
                return null;
        }
    }, []);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = (
            <Stack gap={16}>
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton width="100%" height={400} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </Stack>
        );
    } else if (error) {
        content = (
            <Text
                align="center"
                variant="error"
                title={t('Something went wrong while loading article')}
            />
        );
    } else {
        content = (
            <>
                <Text title={article?.title} size="l" weight="bold" />
                <Text title={article?.subtitle} />
                <AppImage
                    src={article?.img}
                    className={cls.img}
                    fallback={
                        <Skeleton width="100%" height={420} border="16px" />
                    }
                />
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Stack
                gap={16}
                className={classNames(cls.ArticleDetailsRedesigned, {}, [
                    className
                ])}
            >
                {content}
            </Stack>
        </DynamicModuleLoader>
    );
});
