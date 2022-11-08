export interface IState {
  counter: number;
  showCounter: boolean;
}

export interface IActions {
  type: CounterActions;
  amount?: number;
}

export enum CounterActions {
  increment = 'increment',
  decrement = 'decrement',
  increase = 'increase',
  toggle = 'toggle',
}
