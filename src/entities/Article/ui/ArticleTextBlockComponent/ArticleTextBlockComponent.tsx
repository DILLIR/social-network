import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleTextBLock } from '../../model/types/article';
import { Text } from '../../../../shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBLock;
}

export const ArticleTextBlockComponent = memo(function ArticleTextBlockComponent({ className, block }: ArticleTextBlockComponentProps) {
    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map((paragraph, index) => (
                <Text key={index} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
})