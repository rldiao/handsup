import { userConstants } from "../constants/userConstants";
import { stateConstants } from "../constants/stateConstants";

import AuthService from "../services/AuthService";
import { history } from "../helper/history";

export const login = (email, password) => dispatch => {
  AuthService.login(email, password)
    .then(res => {
      dispatch({
        type: userConstants.USER_VERIFIED,
        payload: {
          state: stateConstants.AUTH,
          userType: res.data.userType
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
      userType: null
    }
  });
  history.push("/login");
};
