import { useState } from "react";
import classes from'./Counter.module.scss'

export function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
    }

    const decrement = () => {
        setCount(prev => prev - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment} className={classes.btn}>Increase</button>
            <button onClick={decrement} className={classes.btn}>Decrease</button>
        </div>
    )
}