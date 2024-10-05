import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export function Icon({ className, Svg, inverted }: IconProps) {
    return (
        <Svg
            className={classNames(cls.Icon, { [cls.inverted]: inverted }, [
                className
            ])}
        />
    );
}
