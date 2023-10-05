import { AnyAction } from "redux";
import { RECEIVE_CURRENCIES_FAILED, RECEIVE_CURRENCIES_SUCCEEDED, REQUEST_CURRENCIES, SAVE_EXPENSES } from "../actions";

const INITIAL_STATE = {
  currencies: [],
  isLoading: false,
  expenses: [],
  total: 0.00,
  rates: {},
};

const walletReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case REQUEST_CURRENCIES:
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

    case RECEIVE_CURRENCIES_FAILED:
      return {
        ...state,
        isLoading: true,
      };

    case SAVE_EXPENSES:
      return {
        ...state,
        expenses: [...state.expenses, action.payload.expenses],
        total: state.total + action.payload.total,
      };

    default:
      return state;
  }
};

export default walletReducer;