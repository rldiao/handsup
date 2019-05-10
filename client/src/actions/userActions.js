import { userConstants } from "../constants/userConstants";
import { stateConstants } from "../constants/stateConstants";

import AuthService from "../services/AuthService";
import { history } from "../helper/history";

export const login = (email, password, userType) => dispatch => {
  AuthService.login(email, password, userType)
    .then(res => {
      dispatch({
        type: userConstants.USER_VERIFIED,
        payload: {
          state: stateConstants.AUTH,
          user: res.user
        }
      });
      history.push("/");
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const logout = () => dispatch => {
  AuthService.logout();
  dispatch({
    type: userConstants.USER_UNVERIFIED,
    payload: {
      state: stateConstants.UNAUTH,
      user: null
    }
  });
  history.push("/login");
};
