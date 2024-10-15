import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code as CodeDeprecated } from '../../../../shared/ui/deprecated/Code/Code';
import { Code } from '../../../../shared/ui/redesigned/Code/Code';
import { ArticleCodeBLock } from '../../model/types/article';
import { ToggleFeatures } from '../../../../shared/lib/features';

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
            <div className={classNames('', {}, [className])}>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Code text={block.code} />}
                    off={<CodeDeprecated text={block.code} />}
                />
            </div>
        );
    }
);
