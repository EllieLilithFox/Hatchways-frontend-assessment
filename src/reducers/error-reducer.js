import * as c from "../actions/action-constants";

const initialState = {
  msg: {},
  status: null,
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
      };
    default:
      return state;
  }
};
