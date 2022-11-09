export interface ICounterState {
  counter: number;
  showCounter: boolean;
}

export interface IAuthState {
  isAuth: boolean;
}

export interface IState {
  counter: ICounterState;
  auth: IAuthState;
}
