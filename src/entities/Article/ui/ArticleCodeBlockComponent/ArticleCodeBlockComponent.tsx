import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from '../../../../shared/ui/Code/Code';
import { ArticleCodeBLock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBLock;
}

export const ArticleCodeBlockComponent = memo(
    function ArticleCodeBlockComponent({
        className,
        block
    }: ArticleCodeBlockComponentProps) {
        return (
            <div
                className={classNames("", {}, [
                    className
                ])}
            >
                <Code text={block.code} />
            </div>
        );
    }
);
