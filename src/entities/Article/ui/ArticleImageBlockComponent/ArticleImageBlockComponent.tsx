import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';


import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleImageBLock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBLock;
}

export const ArticleImageBlockComponent = memo(
    function ArticleImageBlockComponent({
        className,
        block
    }: ArticleImageBlockComponentProps) {
        return (
            <div
                className={classNames(cls.ArticleImageBlockComponent, {}, [
                    className
                ])}
            >
                <img src={block.src} className={cls.img} alt={block.title} />
                {block.title && <Text text={block.title} align="center" />}
            </div>
        );
    }
);
