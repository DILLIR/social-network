import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(function ThemeSwitcher({
    className
}: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
            style={{ wordBreak: 'break-word' }}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
