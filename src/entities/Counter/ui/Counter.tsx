import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
    className?: string;
}

export function Counter({ className }: CounterProps) {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div className={classNames('', {}, [className])}>
            <h1 data-testid="value-title">
                value =
                {counterValue}
            </h1>
            <Button onClick={increment} data-testid="increment-btn">
                Increment
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn">
                Decrement
            </Button>
        </div>
    );
}
