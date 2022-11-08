import { createStore } from 'redux';

import { CounterActions, IActions, IState } from './storeInterfaces';

const counterReducer = (state: IState = { counter: 0 }, action: IActions) => {
  switch (action.type) {
    case CounterActions.increment:
      return { counter: state.counter + 1 };
    case CounterActions.decrement:
      return { counter: state.counter - 1 };
    case CounterActions.increase:
      return { counter: state.counter + action.amount! };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
