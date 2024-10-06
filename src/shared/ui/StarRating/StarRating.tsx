import StarIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (value: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export function StarRating({
    className,
    onSelect,
    size = 24,
    selectedStars = 0
}: StarRatingProps) {

    const [currentStarsCount, setCurrentStarsCount] = useState(0);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (startCount: number) => () => {
        if(!isSelected) {
            setCurrentStarsCount(startCount);
        }
    }

    const onLeave = () => {
        if(!isSelected) {
            setCurrentStarsCount(0);
        }
    }

    const onClick = (value: number) => () => {
        setIsSelected(true);
        setCurrentStarsCount(value);
        onSelect?.(value);
    }

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    Svg={StarIcon}
                    key={starNumber}
                    className={classNames(cls.starIcon, {
                        [cls.hovered]: currentStarsCount >= starNumber,
                        [cls.normal]: !(selectedStars >= starNumber),
                        [cls.selected]: isSelected
                    })}
                    width={size}
                    height={size}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
}
