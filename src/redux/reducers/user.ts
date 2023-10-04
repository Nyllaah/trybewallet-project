import { AnyAction } from "redux";
import { USER_INFO } from "../actions";

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  const { payload: email } = action;
  switch (action.type) {
    case USER_INFO:
      return {
        email,
      }
    default:
      return state;
  }
};

export default userReducer;