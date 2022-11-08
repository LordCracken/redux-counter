export interface IState {
  counter: number;
}

export interface IActions {
  type: CounterActions;
}

export enum CounterActions {
  increment = 'increment',
  decrement = 'decrement',
}
