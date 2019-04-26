import { userConstants } from "../constants/userConstants";

import AuthService from "../services/AuthService";
import { history } from "../helper/history";

export const login = (email, password) => dispatch => {
  AuthService.login(email, password)
    .then(res => {
      dispatch({ type: userConstants.USER_VERIFIED, payload: res.user });
      history.push("/");
    })
    .catch(function(error) {
      console.log(
        "There has been a problem with your fetch operation: ",
        error.message
      );
    });
};

export const logout = () => dispatch => {
  AuthService.logout();
  dispatch({ type: userConstants.USER_UNVERIFIED });
  history.push("/login");
};

// function signup(user) {}
