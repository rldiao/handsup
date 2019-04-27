import { userConstants } from "../constants/userConstants";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case userConstants.USER_VERIFIED:
      return action.payload;
    // {
    //   ...state,
    //   state: action.payload.state,
    //   user: action.payload.user
    // };
    case userConstants.USER_UNVERIFIED:
      return action.payload;
    // {
    //   // ...state,
    //   state: action.payload.state,
    //   // TODO: can redux accept null?
    //   user: action.payload.user
    // };
    default:
      return state;
  }
}
