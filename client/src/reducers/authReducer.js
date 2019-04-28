import { userConstants } from "../constants";
import AuthService from "../services/AuthService";

const initialAuthState = AuthService.loggedIn()
  ? userConstants.USER_VERIFIED
  : userConstants.USER_UNVERIFIED;

const initialState = { state: initialAuthState };

export default function(state = initialState, action) {
  switch (action.type) {
    case userConstants.USER_VERIFIED:
      return action.payload;
    case userConstants.USER_UNVERIFIED:
      return action.payload;
    default:
      return state;
  }
}
