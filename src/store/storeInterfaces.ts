export interface IState {
  counter: number;
}

export interface IActions {
  type: CounterActions;
  amount?: number;
}

export enum CounterActions {
  increment = 'increment',
  decrement = 'decrement',
  increase = 'increase',
}
