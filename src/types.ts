import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type ExpensesType = {
  id: number,
  value: number,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: object,
};

export type GlobalStateType = {
  user: {
    email: string,
  },
  wallet: {
    isLoading: boolean,
    currencies: [],
    rates: object,
    expenses: ExpensesType[],
    total: number,
  },
};

export type ThunkDispatchType = ThunkDispatch<GlobalStateType, null, AnyAction>;
