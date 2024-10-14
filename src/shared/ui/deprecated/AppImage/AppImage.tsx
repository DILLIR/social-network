import { useLayoutEffect, useState } from 'react';

interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: JSX.Element;
    errorFallback?: JSX.Element;
}
/**
 * Outdated, use components from redesigned directory
 * @deprecated
 */
export function AppImage({
    className,
    src,
    alt = 'image',
    errorFallback,
    fallback,
    ...other
}: AppImageProps): JSX.Element {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return <img className={className} src={src} alt={alt} {...other} />;
}
