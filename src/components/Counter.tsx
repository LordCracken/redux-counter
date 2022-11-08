import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';
import { CounterActions, IState } from '../store/storeInterfaces';

const Counter = () => {
  const counter = useSelector((state: IState) => state.counter);
  const showCounter = useSelector((state: IState) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: CounterActions.increment });
  };

  const decrementHandler = () => {
    dispatch({ type: CounterActions.decrement });
  };

  const increaseHandler = () => {
    dispatch({ type: CounterActions.increase, amount: 10 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: CounterActions.toggle });
  };

  const counterBlock = (
    <>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </>
  );

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && counterBlock}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
