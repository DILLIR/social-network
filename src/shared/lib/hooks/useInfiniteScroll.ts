import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLDivElement>;
    wrapperRef: MutableRefObject<HTMLDivElement>;
}

export function useInfiniteScroll({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfiniteScrollOptions) {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const triggerRefClosure = triggerRef.current;
        const wrapperRefClosure = wrapperRef.current;

        if (callback != null) {
            const options = {
                root: wrapperRefClosure,
                rootMargin: '20px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerRefClosure);
        }

        return () => {
            if (observer != null && triggerRefClosure != null) {
                observer.unobserve(triggerRefClosure);
            }
        };
    }, [triggerRef, wrapperRef, callback]);
}
