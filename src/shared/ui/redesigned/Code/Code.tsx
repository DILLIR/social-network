import { useCallback } from 'react';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '../Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export function Code({ className, text }: CodeProps) {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Icon
                className={cls.copyBtn}
                Svg={CopyIcon}
                clickable
                onClick={onCopy}
            />
            <code>{text}</code>
        </pre>
    );
}
