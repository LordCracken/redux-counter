import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';
import { CounterActions, IState } from '../store/storeInterfaces';

const Counter = () => {
  const counter = useSelector((state: IState) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: CounterActions.increment });
  };

  const decrementHandler = () => {
    dispatch({ type: CounterActions.decrement });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
