import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export function Skeleton({
    className, height, width, border,
}: SkeletonProps) {
    const styles: CSSProperties = {
        height,
        width,
        borderRadius: border,
    };

    return (
        <div
            style={styles}
            className={classNames(cls.Skeleton, {}, [className])}
        />
    );
}
