import { memo } from 'react';
import AppSvg from '@/shared/assets/icons/app-image.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Stack } from '@/shared/ui/redesigned/Stack';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string;
    size?: number;
}

// eslint-disable-next-line react/display-name
export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classNames(cls.appLogoWrapper, {}, [className])}
    >
        <div className={cls.gradientBig} />
        <div className={cls.gradientSmall} />
        <AppSvg
            className={cls.appLogo}
            height={size}
            width={size}
            color="black"
        />
    </Stack>
));
