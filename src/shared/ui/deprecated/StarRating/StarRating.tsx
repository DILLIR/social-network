import { useState } from 'react';
import StarIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon as IconDeprecated } from '../Icon/Icon';
import { toggleFeatures, ToggleFeatures } from '../../../lib/features';
import { Icon } from '../../redesigned/Icon';
import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (value: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];
/**
 * Outdated, use components from redesigned directory
 * @deprecated
 */
export function StarRating({
    className,
    onSelect,
    size = 24,
    selectedStars = 0
}: StarRatingProps) {
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (startCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(startCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (value: number) => () => {
        setIsSelected(true);
        setCurrentStarsCount(value);
        onSelect?.(value);
    };

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.StarRatingRedesigned,
        off: () => cls.StarRating
    });

    return (
        <div className={classNames(mainClass, {}, [className])}>
            {stars.map((starNumber) => {
                const props = {
                    Svg: StarIcon,
                    className: classNames(cls.starIcon, {
                        [cls.hovered]: currentStarsCount >= starNumber,
                        [cls.normal]: !(selectedStars >= starNumber),
                        [cls.selected]: isSelected
                    }),
                    width: size,
                    height: size,
                    onMouseEnter: onHover(starNumber),
                    onMouseLeave: onLeave,
                    onClick: onClick(starNumber),
                    'data-testid': `StarRating.${starNumber}`,
                    'data-selected': currentStarsCount >= starNumber
                };
                return (
                    <ToggleFeatures
                        key={starNumber}
                        feature="isAppRedesigned"
                        on={
                            <Icon
                                clickable={!isSelected}
                                {...props}
                                key={starNumber}
                            />
                        }
                        off={<IconDeprecated {...props} key={starNumber} />}
                    />
                );
            })}
        </div>
    );
}
