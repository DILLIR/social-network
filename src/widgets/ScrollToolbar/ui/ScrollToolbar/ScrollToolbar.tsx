import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Stack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';
import cls from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
    className?: string;
}

// eslint-disable-next-line react/display-name
export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className } = props;

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            width="100%"
            className={classNames(cls.ScrollToolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </Stack>
    );
});
