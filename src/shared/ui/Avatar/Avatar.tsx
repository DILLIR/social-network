import { classNames } from '@/shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export function Avatar({
    className, src, size, alt, ...props
}: AvatarProps) {
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    return (
        <img
            {...props}
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
}
