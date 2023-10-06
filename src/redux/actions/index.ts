import { Dispatch } from 'redux';
import getCurrencies from '../../services/currenciesAPI';
import { ExpensesType } from '../../types';

export const USER_EMAIL = 'USER_INFO';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES_SUCCEEDED = 'RECEIVE_CURRENCIES_SUCCEEDED';
export const RECEIVE_CURRENCIES_FAILED = 'REVEICE_CURRENCIES_FAILED';
export const SAVE_EXPENSES = 'SVAE_EXPENSES';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const FETCH_RATES = 'FETCH_RATES';

export const userAction = (email: string) => ({
  type: USER_EMAIL,
  payload: email,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const receiveCurrenciesSucceeded = (currencies: object) => ({
  type: RECEIVE_CURRENCIES_SUCCEEDED,
  payload: {
    currencies,
  },
});

export const receiveCurrenciesFailed = () => ({
  type: RECEIVE_CURRENCIES_FAILED,
});

export const actionFetchCurrencies = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestCurrencies());
    try {
      const currencies = await getCurrencies();
      delete currencies.USDT;
      dispatch(receiveCurrenciesSucceeded(currencies));
    } catch (error) {
      console.log(error);
      dispatch(receiveCurrenciesFailed());
    }
  };
};

export const saveExpenses = (expenses: ExpensesType) => ({
  type: SAVE_EXPENSES,
  payload: {
    expenses,
  },
});

export const updateTotal = (currency: string, rates: object, value: number) => ({
  type: UPDATE_TOTAL,
  payload: {
    currency,
    rates,
    value,
  },
});
