import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import cls from './Avatar.module.scss';

interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}
/**
 * Outdated, use components from redesigned directory
 * @deprecated
 */
export function Avatar({
    className,
    src,
    size,
    alt,
    fallbackInverted,
    ...props
}: AvatarProps) {
    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size
        }),
        [size]
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = (
        <Icon
            width={size}
            height={size}
            Svg={UserIcon}
            inverted={fallbackInverted}
        />
    );

    return (
        <AppImage
            {...props}
            src={src}
            style={styles}
            alt={alt}
            errorFallback={errorFallback}
            fallback={fallback}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
}
