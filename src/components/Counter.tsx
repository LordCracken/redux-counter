import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store';

import classes from './Counter.module.css';
import { IState } from '../store/storeInterfaces';

const Counter = () => {
  const counter = useSelector((state: IState) => state.counter);
  const showCounter = useSelector((state: IState) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
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
