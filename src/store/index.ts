import { createStore } from 'redux';

import { CounterActions, IActions, IState } from './storeInterfaces';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state: IState = initialState, action: IActions) => {
  switch (action.type) {
    case CounterActions.increment:
      return { counter: state.counter + 1, showCounter: state.showCounter };
    case CounterActions.decrement:
      return { counter: state.counter - 1, showCounter: state.showCounter };
    case CounterActions.increase:
      return { counter: state.counter + action.amount!, showCounter: state.showCounter };
    case CounterActions.toggle:
      return { counter: state.counter, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
