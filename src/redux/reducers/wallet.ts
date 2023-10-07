import { AnyAction } from 'redux';
import {
  EDIT_MODE,
  RECEIVE_CURRENCIES_FAILED,
  RECEIVE_CURRENCIES_SUCCEEDED,
  REQUEST_CURRENCIES, SAVE_EXPENSES,
  UPDATE_EXPENSES,
  UPDATE_TOTAL,
} from '../actions';
import { ExpensesType } from '../../types';
import { ExchangeRatesContent } from '../../tests/helpers/mockData';

const INITIAL_STATE = {
  currencies: [],
  isLoading: false,
  expenses: [] as ExpensesType[],
  total: 0,
  rates: {} as ExchangeRatesContent,
  editor: false,
  idToEdit: undefined,
};

const walletReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case REQUEST_CURRENCIES || RECEIVE_CURRENCIES_FAILED:
      return {
        ...state,
        isLoading: true,
      };

    case RECEIVE_CURRENCIES_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        currencies: Object.keys(action.payload.currencies),
        rates: action.payload.currencies,
      };

    case SAVE_EXPENSES:
      return {
        ...state,
        expenses: [
          ...state.expenses.filter((expense) => expense.id !== state.idToEdit),
          action.payload.expenses],
        editor: false,
        idToEdit: undefined,
        // expenses: [...state.expenses, action.payload.expenses],
      };

    case UPDATE_TOTAL:
      return {
        ...state,
        total: state.expenses.reduce((acc, curr) => {
          return acc + (+curr.value * +curr.exchangeRates[curr.currency].ask);
        }, 0).toFixed(2),
      };

    case UPDATE_EXPENSES:
      return {
        ...state,
        expenses: action.payload.expenses,
      };

    case EDIT_MODE:
      return {
        ...state,
        editor: true,
        idToEdit: action.payload.idToEdit,
      };

    default:
      return state;
  }
};

export default walletReducer;
