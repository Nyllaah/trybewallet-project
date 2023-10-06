import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ExchangeRatesContent, ExchangeRatesKeys } from './tests/helpers/mockData';

export type ExpensesType = {
  id: number,
  value: string,
  description: string,
  currency: ExchangeRatesKeys,
  method: string,
  tag: string,
  exchangeRates: ExchangeRatesContent,
};

export type GlobalStateType = {
  user: {
    email: string,
  },
  wallet: {
    isLoading: boolean,
    currencies: ExchangeRatesKeys[],
    rates: object,
    expenses: ExpensesType[],
    total: number,
  },
};

export type ThunkDispatchType = ThunkDispatch<GlobalStateType, null, AnyAction>;
