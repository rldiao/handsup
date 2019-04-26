import { userConstants } from "../constants/userConstants";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case userConstants.USER_VERIFIED:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
