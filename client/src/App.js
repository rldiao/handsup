import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";

import styles from "./App.module.css";
import NavBar from "./components/navigation/NavBar";
import UserProfilePage from "./pages/userProfile/userProfilePage";

import HomePage from "./pages/home/HomePage";
import ErrorPage from "./pages/error/ErrorPage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/login/SignupPage";

// TEST - START
const checkAuth = () => {
  const token = localStorage.getItem("id_token");
  if (!token) {
    return false;
  }

  try {
    const { exp } = decode(token);
    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (err) {
    return false;
  }
  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() === true ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
// TEST - END

class App extends Component {
  state = {
    data: null,
    isAuth: false
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      // .then(res => this.setState({ isAuth: res.isAuth}))
      .catch(err => console.log(err));
  }

  connecToServer = () => {
    fetch("/");
  };
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div>
        {/*<NavBar />*/}
        {/*<div className={styles.content}>*/}
          {/*<Switch>*/}
            {/*<PrivateRoute path="/" exact component={HomePage} />*/}
            {/*<Route path="/login" component={LoginPage} />*/}
            {/*<Route path="/signup" component={SignupPage} />*/}
            {/*<Route component={ErrorPage} />*/}
          {/*</Switch>*/}
        {/*</div>*/}
        <div>
          <UserProfilePage/>
        </div>

      </div>
    );
  }
}

export default App;
