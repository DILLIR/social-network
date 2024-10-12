import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

interface CounterProps {
    className?: string;
}

export function Counter({ className }: CounterProps) {
    const counterValue = useCounterValue();
    const { decrement, increment } = useCounterActions();

    const handleIncrement = () => {
        increment();
    };

    const handleDecrement = () => {
        decrement();
    };

    return (
        <div className={classNames('', {}, [className])}>
            <h1 data-testid="value-title">
                value =
                {counterValue}
            </h1>
            <Button onClick={handleIncrement} data-testid="increment-btn">
                Increment
            </Button>
            <Button onClick={handleDecrement} data-testid="decrement-btn">
                Decrement
            </Button>
        </div>
    );
}
