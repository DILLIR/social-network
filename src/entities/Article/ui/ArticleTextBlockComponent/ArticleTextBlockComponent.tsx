import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text/Text';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleTextBLock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBLock;
}

export const ArticleTextBlockComponent = memo(
    function ArticleTextBlockComponent({
        className,
        block
    }: ArticleTextBlockComponentProps) {
        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className
                ])}
            >
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Text title={block.title} className={cls.title} />}
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                        }
                    />
                )}
                {block.paragraphs.map((paragraph, index) => (
                    <ToggleFeatures
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        feature="isAppRedesigned"
                        on={
                            <Text
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        }
                        off={
                            <TextDeprecated
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        );
    }
);
