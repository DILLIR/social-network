import { getSaveScrollPositionByPath } from '@/features/ScrollSave/model/selectors/scrollSave';
import { MutableRefObject, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import { scrollSaveActions } from '../../features/ScrollSave/model/slices/ScrollSlice';
import { useInitialEffect } from '../../shared/lib/hooks/useInitialEffect';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: React.ReactNode;
    onScrollEnd?: () => void;
}

export function Page({ className, children, onScrollEnd }: PageProps) {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getSaveScrollPositionByPath(state, pathname));

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollSaveActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 500);

    return (
        <main
            ref={wrapperRef}
            onScroll={onScroll}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
        </main>
    );
}
